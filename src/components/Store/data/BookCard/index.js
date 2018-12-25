import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
    card: {
        minWidth: 90,
        margin: '5px 3px',
        width: 90
    },
    media: {
        maxHeight: 140,

    },
    moreBtn: {
        right: 0,
        position: 'absolute',
        top: 0,
        padding: '2px 0px',
        width: '18px'
    }
};

class BookCard extends React.Component {
    state = {
        anchorEl: null,
      };

      
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        return (
            <Card
                className={classes.card}
                raised="true"
                style={{
                    display: '-webkit-inline-box',
                    boxShadow: 'initial',
                    borderRadius: 0
                }}
            >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        style={{ width: '100%', height: 110, backgroundColor: 'gainsboro' }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent style={{ padding: 2 }}>
                        <Typography component="h4">test 1</Typography>
                        <Typography component="p" color="textSecondary"> Mac Miller </Typography>
                        <IconButton
                            color="inherit"
                            className={classes.moreBtn}
                            aria-owns={anchorEl ? 'simple-menu' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            <MoreIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>ซื้อ</MenuItem>
                            <MenuItem onClick={this.handleClose}>รายละเอียด</MenuItem>
                        </Menu>
                    </CardContent>
                </CardActionArea>

            </Card>
        );
    }
}

BookCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookCard);