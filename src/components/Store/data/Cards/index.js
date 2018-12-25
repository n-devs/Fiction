import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

import Title from './Title'
import StickyBar from '../StickyBar';

const styles = {
    root: { padding: '10px 4px' },
    card: {
        minWidth: 275,
        margin: '10px 2px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        flexGrow: 1,
        fontSize: 14,

    },
    pos: {
        marginBottom: 12,
    },
    more: {
        position: 'relative',
    }
};

class Cards extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card} >
                <CardContent style={{ padding: '5px 10px' }}>
                    <Title>
                        <Typography className={classes.title} color="textSecondary" >
                            {this.props.title}
                        </Typography>
                        <div className={classes.root} />
                        <div className={classes.more}>
                           <Link to={this.props.to} ><Button size="small" color="primary">เพิ่มเติม</Button></Link>
                        </div>
                    </Title>
                    <StickyBar>
                        {this.props.children}
                    </StickyBar>
                </CardContent>
            </Card>
        );
    }
}

Cards.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);