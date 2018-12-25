import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as withRouter , Router, Switch, Route, Link } from "react-router-dom";
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import BackButton from '../BackButton'
import Dense from '../Dense'
import Search from '../Search'
import MoreIcon from '@material-ui/icons/MoreVert';
import StickyBar from '../StickyBar';


const styles = theme => ({
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
    avatar: {
        margin: 0,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin:5
      },
      gridList: {
        width: 500,
        height: 'auto',
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
});


class Discount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            bookCard: [
                {
                    img:'',
                    title:'Title 1',
                    author:'Jo'
                },
                {
                    img:'',
                    title:'Title 2',
                    author:'Jo'
                },
                {
                    img:'',
                    title:'Title 3',
                    author:'Jo'
                },
                {
                    img:'',
                    title:'Title 3',
                    author:'Jo'
                },
                {
                    img:'',
                    title:'Title 3',
                    author:'Jo'
                },
                {
                    img:'',
                    title:'Title 3',
                    author:'Jo'
                }
            ]
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <StickyBar zIndex="2000">
                <Dense>
                    <BackButton/>
                    <Search />
                </Dense>
                </StickyBar>
                <div className={classes.root}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 50 }}>
                            <ListSubheader component="div">ลดราคา</ListSubheader>
                        </GridListTile>
                        {this.state.bookCard.map(tile => (
                            <GridListTile key={tile.img} style={{padding:10}}>
                                <img src={tile.img} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={<span>by: {tile.author}</span>}
                                    actionIcon={
                                        <IconButton className={classes.icon}>
                                            <MoreIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </React.Fragment>
        )
    }
}


Discount.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Discount);