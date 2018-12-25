import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import CardActionArea from '@material-ui/core/CardActionArea';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
        display: 'flex',
        maxHeight: 140,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 90,
        height: 120,
        backgroundColor: 'gainsboro', 
        margin: '5px'

    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    monneyPoint: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingTop: '83px',
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    grow: {
        flexGrow: 1,
        maxWidth: 70
    },
});

class NewsBookCard extends React.Component {
    render() {
        const { classes, theme } = this.props;

        return (
            <React.Fragment>
                 <CardActionArea>
                <Card className={classes.card} style={{ boxShadow: 'initial', borderRadius: 0 }}>
               
                    <CardMedia
                        className={classes.cover}
                        image="/static/images/cards/live-from-space.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h3">Title Test 1</Typography>
                            <Typography component="p" color="textSecondary"> Mac Miller </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                            <p >3.0</p>
                        </div>
                    </div>
                    <div className={classes.grow}>
                        <IconButton color="inherit" style={{ right: 0, position: 'absolute' }}>
                            <MoreIcon />
                        </IconButton>
                        <div className={classes.monneyPoint}>
                            <p >100 บาท</p>
                        </div>
                    </div>
                    
                </Card>
                </CardActionArea>
                <Divider variant="middle" />
                
            </React.Fragment>
        );
    }
}

NewsBookCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewsBookCard);