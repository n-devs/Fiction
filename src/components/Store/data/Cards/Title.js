import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



const styles = {
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: 20, 
        backgroundColor: 'white', 
    }
};

class Title extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{boxShadow: 'initial'}} >
                    <Toolbar  className={classes.toolbar} disableGutters={true}>
                        {this.props.children}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Title.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Title);