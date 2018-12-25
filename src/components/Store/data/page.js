import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Dense from './Dense'
import Search from './Search'
import StickyBar from './StickyBar'
import LabalTabs from './LabalTabs'
import Cards from './Cards'
import firebase from 'firebase'
import dbClient from '../../../database/offline/data/user'
import './styles.css'

const styles = {
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
    avatar: {
        margin: 0,
    },
    list: {
        width: 250,
    },
    input: {
        display: 'none',
    },
    menuIcon: {
        position: 'absolute',
        top: '90px',
        left: '34%',
        width: '80px',
        height: '80px'
    },
    avatarMenu: {
        width: '60px',
        height: '60px',
        border: '4px solid white'
    },
    media: {
        marginBottom: 25,
    },
    labelCam: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    buttonCam: {
        color: 'rgba(0, 0, 0, 0.54)',
        padding: '13px 5px;'
    }
};

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left: false,
            ...this.props.userData
        }

    }

    componentDidMount() {
        dbClient.user.get('log_on').then(user => {
            this.setState({ ...user })

        })

    }

    logOut() {
        firebase.auth().signOut().then(function () {
            window.sessionStorage.clear();
            dbClient.delete();
            window.location.reload();
        });
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        height="140"
                        image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file" className={classes.labelCam}>
                        <IconButton color="primary" className={classes.buttonCam} component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <IconButton className={classes.menuIcon} color="inherit" aria-label="Menu">
                        <Avatar alt="Remy Sharp" src={this.state.photoURL} className={classes.avatarMenu} />
                    </IconButton>
                    <Typography component="div" style={{ marginBottom: 40 }} >
                        <h3 style={{ textAlign: 'center' }}>{this.state.displayName}</h3>
                    </Typography>

                    {['เกมและนิยายของฉัน'].map((text) => (
                        <React.Fragment>
                            <Link to="/library">
                                <ListItem button key={text}>
                                    <ListItemIcon> <InboxIcon /></ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            </Link>

                        </React.Fragment>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Log Out'].map((text) => (
                        <ListItem button key={text} onClick={() => this.logOut()} >
                            <ListItemIcon>
                                <SvgIcon>
                                    <path d="M 8 2 C 6.895 2 6 2.895 6 4 L 6 20 C 6 21.105 6.895 22 8 22 L 16 22 C 17.105 22 18 21.105 18 20 L 18 13 L 11 13 L 11 11 L 18 11 L 18 4 C 18 2.895 17.105 2 16 2 L 8 2 z M 18 11 L 18 13 L 20 13 L 20 16 L 24 12 L 20 8 L 20 11 L 18 11 z" />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );



        return (
            <React.Fragment>
                <Dense>
                    <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                        <Avatar alt="Remy Sharp" src={this.state.photoURL} className={classes.avatar} />
                    </IconButton>
                    <div >
                        <Search />
                    </div>
                </Dense>
                <LabalTabs />

                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>

            </React.Fragment>
        )
    }
}



Page.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);