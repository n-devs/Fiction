import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GradeIcon from '@material-ui/icons/Grade';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import Typography from '@material-ui/core/Typography';
import StickyBar from '../StickyBar'
import Cards from '../Cards'
import BookCard from '../BookCard'

import './styles.css'
import NewsBookCard from '../NewsBookCard';
import CategoryBookCard from '../CategoryBookCard';

const styles = {
    root: {
        flexGrow: 1,
        maxWidth: 5000,
    },
    backgroundTabs: {
        padding: '10px  3px',
        backgroundColor: 'rgba(0, 0, 0, 0.06)'
    }
};

const theme = createMuiTheme({
    palette: {
        primary: { main: "#00bcd4" },
        secondary: { main: '#008394' },
    },
});

const tabItems = createMuiTheme({
    palette: {
        primary: { main: "rgba(241, 241, 241, 0)" },
        secondary: { main: "rgba(241, 241, 241, 0)" },
    },
});

class LabelTabs extends React.Component {
    state = {
        value: 0,
        cards: [
            { titleName: 'แนะนำ', herf: '/recommend' },
            { titleName: 'อัพเดตใหม่', herf: '/new-update' },
            { titleName: 'ลดราคา', herf: '/discount'}
        ]
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <StickyBar zIndex="1200" >
                    <Paper
                        square
                        style={{ width: '100%', height: 50 }}
                        className={classes.root}>
                        <MuiThemeProvider theme={theme}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                fullWidth
                                indicatorColor="secondary"
                                textColor="primary"
                                scrollable={true}
                            >
                                <Tab style={{ minHeight: 0, fontSize: '12px' }} icon={<DashboardIcon style={{ height: 16 }} />} label="หน้าแรก" />
                                <Tab style={{ minHeight: 0, fontSize: '12px' }} icon={<NewReleasesIcon style={{ height: 16 }} />} label="มาใหม่" />
                                <Tab style={{ minHeight: 0, fontSize: '12px' }} icon={<LoyaltyIcon style={{ height: 16 }} />} label="ขายดี" />
                                <Tab style={{ minHeight: 0, fontSize: '12px' }} icon={<GradeIcon style={{ height: 16 }} />} label="ติดอันดับ" />
                                <Tab style={{ minHeight: 0, fontSize: '12px' }} icon={<FavoriteIcon style={{ height: 16 }} />} label="ฟรี" />
                                <Tab style={{ minHeight: 0, fontSize: '12px' }} icon={<VerticalSplitIcon style={{ height: 16 }} />} label="หมวดหมู่" />
                            </Tabs>

                        </MuiThemeProvider>
                    </Paper>
                </StickyBar>
                {this.state.value === 0 &&
                    <Typography
                        component="div"
                        className={classes.backgroundTabs}
                    >
                        <React.Fragment>
                            {this.state.cards.map(card => (

                                <Cards title={card.titleName} to={card.herf} >
                                    <MuiThemeProvider theme={tabItems}>
                                        <Tabs
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                            fullWidth
                                            indicatorColor="secondary"
                                            textColor="primary"
                                            scrollable={true}
                                        >
                                            <BookCard />
                                        </Tabs>
                                    </MuiThemeProvider>
                                </Cards>
                            ))}

                        </React.Fragment>
                    </Typography >}
                {this.state.value === 1 &&
                    <Typography
                        component="div"
                        className={classes.backgroundTabs}
                    >
                        <React.Fragment>
                            
                            <Paper style={{padding: '10px 0px'}}>
                                {this.state.cards.map(card => (

                                    <NewsBookCard />

                                ))
                                }
                            </Paper>
                        </React.Fragment>
                    </Typography >}
                {this.state.value === 2 &&
                    <Typography
                        component="div"
                        className={classes.backgroundTabs}
                    >
                        <React.Fragment>
                            <Paper
                                square
                                style={{ height: 50, margin: 5, borderRadius: 4 }}
                                className={classes.root}></Paper>
                        </React.Fragment>
                    </Typography >}
                {this.state.value === 3 &&
                    <Typography
                        component="div"
                        className={classes.backgroundTabs}
                    >
                        <React.Fragment>
                            <Paper
                                square
                                style={{ height: 50, margin: 5, borderRadius: 4 }}
                                className={classes.root}></Paper>
                        </React.Fragment>
                    </Typography >}
                {this.state.value === 4 &&
                    <Typography
                        component="div"
                        className={classes.backgroundTabs}
                    >
                        <React.Fragment>
                            <Paper
                                square
                                style={{ height: 50, margin: 5, borderRadius: 4 }}
                                className={classes.root}></Paper>
                        </React.Fragment>
                    </Typography >}
                {this.state.value === 5 &&
                    <Typography
                        component="div"
                        className={classes.backgroundTabs}
                    >
                        <React.Fragment>
                            <CategoryBookCard/>
                        </React.Fragment>
                    </Typography >}
            </React.Fragment>
        );
    }
}

LabelTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, theme)(LabelTabs);