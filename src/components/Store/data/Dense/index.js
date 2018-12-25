import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import './styles.css'

const styles = {
    root: {
        flexGrow: 1,
    },
};

class DenseAppBar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor:'#009688', height: '55px'}}>
                    <Toolbar variant="dense">
                       {this.props.children}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

DenseAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);