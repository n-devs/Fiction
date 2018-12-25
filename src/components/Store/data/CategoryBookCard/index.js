import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 1 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'rgba(126, 126, 126, 0)',
    },
    btnTab: {
        borderRadius: '50%',
        maxWidth: '40px',
        width: '40px',
        maxHeight: '40px',
        height: '40px',
        margin: '10px',
        fontSize: 10,
        padding: 0,
        backgroundColor: 'gainsboro',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 0px 0px rgba(0,0,0,0.12)'
    },
    title: {
        margin: 10
    }
});

const theme = createMuiTheme({
    palette: {
        primary: { main: "#009688" },
        secondary: { main: "rgba(241, 241, 241, 0)" },
    },
});

class CategoryBookCard extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default" style={{ boxShadow: 'initial', backgroundColor: 'rgba(126, 126, 126, 0)', }}>
                    <MuiThemeProvider theme={theme}>
                        <Tabs
                            value={value}
                            onChange={this.handleChange}
                            scrollable
                            indicatorColor="secondary"
                            textColor="primary"
                            scrollable={true}
                        >
                            <Tab className={classes.btnTab} label="รัก" icon={<FavoriteIcon />} />
                            <Tab className={classes.btnTab} label="วาย" icon={
                                <SvgIcon>
                                    <path d="M 12 2 C 6.476563 2 2 6.476563 2 12 C 2 17.523438 6.476563 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476563 17.523438 2 12 2 Z M 13.027344 13.839844 L 13.027344 17.464844 L 10.980469 17.464844 L 10.980469 13.839844 L 8.296875 7.464844 L 10.492188 7.464844 L 12.003906 11.957031 L 13.507813 7.464844 L 15.707031 7.464844 Z " />
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="แฟนตาซี" icon={
                                <SvgIcon>
                                    <path d="M 16.277344 16.289063 L 13 4 C 13 2.894531 12.105469 2 11 2 L 6 2 L 9 4 L 9 5 L 10 6 L 7.621094 16.304688 C 4.296875 16.792969 2 17.816406 2 19 C 2 20.65625 6.476563 22 12 22 C 17.523438 22 22 20.65625 22 19 C 22 17.804688 19.65625 16.773438 16.277344 16.289063 Z "/>
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="เกมออนไลน์" icon={
                                <SvgIcon>
                                  <path d="M19.531,5H4.469C3.584,5,2.807,5.58,2.553,6.427C1.963,8.391,1,11.918,1,14c0,2.761,2.238,4.999,4.999,5 c3.3,0,8.703,0,12.003,0C20.762,18.999,23,16.761,23,14c0-2.082-0.963-5.609-1.553-7.573C21.193,5.58,20.416,5,19.531,5z M10,13H9 v1c0,0.552-0.448,1-1,1h0c-0.552,0-1-0.448-1-1v-1H6c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h1v-1c0-0.552,0.448-1,1-1h0 c0.552,0,1,0.448,1,1v1h1c0.552,0,1,0.448,1,1v0C11,12.552,10.552,13,10,13z M16,11c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1 s1,0.448,1,1C17,10.552,16.552,11,16,11z M18,15c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C19,14.552,18.552,15,18,15 z"/>
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="วิทยาศาสตร์" icon={
                                <SvgIcon>
                                    <path d="M 8 3 L 8 5 L 9 5 L 9 10 L 3.4277344 17.773438 L 3.4316406 17.773438 C 3.1656406 18.112437 3 18.535 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 C 21 18.535 20.834359 18.112437 20.568359 17.773438 L 20.572266 17.773438 L 15 10 L 15 5 L 16 5 L 16 3 L 8 3 z M 11 5 L 13 5 L 13 10 L 11 10 L 11 5 z M 13 13 C 13.552 13 14 13.448 14 14 C 14 14.552 13.552 15 13 15 C 12.448 15 12 14.552 12 14 C 12 13.448 12.448 13 13 13 z M 9.5 16 C 10.328 16 11 16.672 11 17.5 C 11 18.328 10.328 19 9.5 19 C 8.672 19 8 18.328 8 17.5 C 8 16.672 8.672 16 9.5 16 z"/>
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="ระทึกขวัญ" icon={
                                <SvgIcon>
                                    <path d="M20.97,9.85c-0.34-4.17-3.89-7.53-8.25-7.83c-2.7-0.17-5.3,0.69-7.12,2.4C3.92,5.98,3,8.14,3,10.5c0,2.62,1.32,4.26,2,4.94 V17c0,1.1,0.9,2,2,2h1v2c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-2h1c1.1,0,2-0.9,2-2v-1.56C19.74,14.71,21.22,12.84,20.97,9.85z M9.5,15C8.67,15,8,14.33,8,13.5C8,12.67,8.67,12,9.5,12s1.5,0.67,1.5,1.5C11,14.33,10.33,15,9.5,15z M12.8,17.8 c-0.5,0-0.7-0.4-0.8-0.7c-0.1,0.3-0.4,0.7-0.8,0.7c-0.2,0-0.5-0.2-0.5-0.5c0-0.7,0.8-2,1.3-2.1c0.5,0.1,1.3,1.4,1.3,2.1 C13.3,17.6,13.1,17.8,12.8,17.8z M14.5,15c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5 C16,14.33,15.33,15,14.5,15z"/>
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="สืบสวน" icon={
                                <SvgIcon>
                                    <path d="M18.849,14.305C18.938,13.852,19,13.409,19,13c0-0.015-0.008-0.027-0.008-0.041C20.732,12.352,22,11.458,22,10.203 c0-1.102-0.994-1.951-3.131-2.678c-0.077-0.215-0.154-0.432-0.232-0.653C17.873,4.701,16.923,2,14.533,2 c-0.584,0-1.038,0.079-1.439,0.149c-0.366,0.064-0.684,0.12-1.095,0.12c-0.397,0-0.69-0.053-1.03-0.114 C10.566,2.082,10.11,2,9.466,2c-2.633,0-3.68,3.338-4.34,5.527C2.992,8.254,2,9.103,2,10.203c0,1.255,1.268,2.149,3.008,2.756 C5.008,12.973,5,12.985,5,13c0,0.408,0.05,0.85,0.142,1.31l-3.565,1.786c-0.528,0.265-0.713,0.927-0.398,1.427L4,22h16l2.822-4.477 c0.315-0.5,0.13-1.163-0.398-1.427L18.849,14.305z M9.466,4c0.465,0,0.781,0.057,1.147,0.123c0.379,0.068,0.81,0.146,1.386,0.146 c0.585,0,1.039-0.08,1.44-0.149C13.806,4.056,14.123,4,14.533,4c0.995,0,1.662,1.96,2.254,3.642c0,0,0,0,0,0.001 C15.974,7.819,14.304,8,11.999,8C9.657,8,7.975,7.81,7.184,7.627C7.666,6.096,8.438,4,9.466,4z M4.036,10.264 c0.153-0.145,0.646-0.5,1.985-0.931C6.828,9.668,8.476,10,11.999,10c3.537,0,5.194-0.322,6.007-0.659 c1.272,0.411,1.769,0.752,1.939,0.905C19.401,10.915,16.251,12,12,12C7.673,12,4.486,10.876,4.036,10.264z M7.786,13.644 c0.091,0.918,0.763,1.76,1.899,1.829c0.841,0.052,1.79-0.359,1.875-1.48C11.707,13.996,11.858,14,12,14s0.293-0.004,0.44-0.007 c0.085,1.121,1.033,1.532,1.875,1.48c1.136-0.069,1.808-0.911,1.899-1.829c0.25-0.042,0.499-0.087,0.745-0.137 c-0.2,1.695-1.328,3.963-2.699,5.315c-0.78,0.769-1.576,1.165-2.245,1.179c-2.138-0.03-4.683-3.82-4.984-6.496 C7.28,13.555,7.532,13.601,7.786,13.644z"/>
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="กำลังภายใน" icon={
                                <SvgIcon>
                                    <path d="M 14.527344 1 L 14.236328 1.265625 C 13.597328 1.851625 11.537609 1.8202344 10.349609 1.6152344 L 10 3.5839844 C 10.555 3.6809844 13.042719 4.0503437 14.761719 3.2773438 C 15.972719 4.4363438 17.887438 4.6974687 19.148438 4.7304688 C 19.097438 6.0044688 19.279391 7.9881719 20.650391 9.3261719 C 19.489391 11.362172 20.282266 13.88 20.322266 14 L 22.244141 13.388672 C 22.237141 13.366672 21.552562 11.117812 22.726562 9.8828125 L 23 9.59375 L 23 8.5292969 L 22.509766 8.2382812 C 20.635766 7.1252813 21.257672 3.9284375 21.263672 3.8984375 L 21.535156 2.5722656 L 20.175781 2.703125 C 19.296781 2.786125 16.618438 2.7479531 15.898438 1.5019531 L 15.507812 1 L 14.527344 1 z M 8 6 C 6.35 6 5 7.35 5 9 L 5 10 L 14.560547 10 L 13.939453 12.490234 L 13.509766 14.210938 C 12.979766 16.330938 11.15 17.840234 9 17.990234 L 9 19 L 7 19 L 7 16 L 8.6601562 16 C 10.030156 16 11.230313 15.060469 11.570312 13.730469 L 12 12 L 5 12 C 3.9 12 3 12.9 3 14 L 3 18.380859 C 3 19.040859 3.2704688 19.680391 3.7304688 20.150391 L 4.8496094 21.269531 C 5.3196094 21.729531 5.9591406 22 6.6191406 22 L 15.5 22 C 16.88 22 18 20.88 18 19.5 L 18 9 C 18 7.35 16.65 6 15 6 L 8 6 z"/>
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="สงคราม" icon={
                                <SvgIcon>
                                    <path d="M 2 2 L 3 6 L 9.457031 12.078125 L 7.046875 14.636719 L 6.207031 13.792969 L 4.792969 15.207031 L 5.679688 16.09375 L 3.171875 18.753906 L 2.707031 18.292969 L 1.292969 19.707031 L 4.292969 22.707031 L 5.707031 21.292969 L 5.242188 20.828125 L 7.90625 18.324219 L 8.792969 19.207031 L 10.207031 17.792969 L 9.367188 16.953125 L 12 14.46875 L 14.625 16.941406 L 13.773438 17.792969 L 15.1875 19.207031 L 16.082031 18.3125 L 18.746094 20.816406 L 18.269531 21.292969 L 19.6875 22.707031 L 22.6875 19.707031 L 21.273438 18.292969 L 20.820313 18.746094 L 18.3125 16.082031 L 19.1875 15.207031 L 17.773438 13.792969 L 16.941406 14.625 L 14.542969 12.078125 L 14.546875 12.074219 L 12 9.375 L 6 3 Z M 22 2 L 18 3 L 13.152344 8.148438 L 15.847656 10.847656 L 21 6 Z "/>
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="ผจญภัย" icon={
                                <SvgIcon>
                                    <path d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 17.5 6.5 22 12 22 C 17.5 22 22 17.5 22 12 C 22 6.5 17.5 2 12 2 z M 17 7 L 14.099609 14.099609 L 7 17 L 9.9003906 9.9003906 L 17 7 z M 12 11 A 1 1 0 0 0 11 12 A 1 1 0 0 0 12 13 A 1 1 0 0 0 13 12 A 1 1 0 0 0 12 11 z"/>
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="เวลา" icon={
                                <SvgIcon>
                                    <path d="M19.95,11h1.95c-0.169-1.779-0.803-3.421-1.781-4.806l-8.169,8.169L7.242,9.657l1.414-1.414l3.293,3.293l6.854-6.854 C17.241,3.207,15.207,2.226,12.95,2V3.95h-2V2c-4.724,0.469-8.48,4.226-8.949,8.95H3.95v2H2c0.471,4.741,4.252,8.508,9,8.955V20h2 v1.891c4.683-0.49,8.404-4.208,8.894-8.891H19.95V11z"/>
                                </SvgIcon>
                            } />
                            <Tab className={classes.btnTab} label="บู๊แอ๊คชั่น" icon={
                                <SvgIcon>
                                    <path d="M 4 4 C 3.591 4 3.2242656 4.2499062 3.0722656 4.6289062 L 1.0722656 9.6269531 C 0.94826563 9.9349531 0.985875 10.283594 1.171875 10.558594 C 1.356875 10.833594 1.667 10.998047 2 10.998047 L 3.7851562 10.998047 C 3.8781562 10.998047 3.9328906 11.049797 3.9628906 11.091797 C 3.9928906 11.133797 4.0212344 11.200109 3.9902344 11.287109 L 1.0566406 19.669922 C 0.94964063 19.975922 0.99854688 20.314125 1.1855469 20.578125 C 1.3725469 20.842125 1.676 21 2 21 L 9 21 C 9.514 21 9.9431406 20.610609 9.9941406 20.099609 L 10.503906 15 L 14 15 A 1.0001 1.0001 0 0 0 15 14 L 15 11 L 22 11 C 22.552 11 23 10.552 23 10 L 23 5 C 23 4.448 22.552 4 22 4 L 4 4 z M 10.904297 11 L 13 11 L 13 13 L 10.705078 13 L 10.904297 11 z"/>
                                </SvgIcon>
                            } />
                        </Tabs>
                    </MuiThemeProvider>
                </AppBar>
                <div style={{
                    backgroundColor: 'white',
                    marginTop: '25px',
                    borderRadius: '4px',
                    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 0px 0px rgba(0,0,0,0.12)'
                }}
                >
                    {value === 0 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายรัก
                        </Typography>
                    </TabContainer>}
                    {value === 1 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายวาย
                        </Typography>
                    </TabContainer>}
                    {value === 2 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายแฟนตาซี
                        </Typography>
                    </TabContainer>}
                    {value === 3 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายเกมออนไลน์
                        </Typography>
                    </TabContainer>}
                    {value === 4 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายวิทยาศาสตร์
                        </Typography>
                    </TabContainer>}
                    {value === 5 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายระทึกขวัญ
                        </Typography>
                    </TabContainer>}
                    {value === 6 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายสืบสวน
                        </Typography>
                    </TabContainer>}
                    {value === 7 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายกำลังภายใน
                        </Typography>
                    </TabContainer>}
                    {value === 8 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายสงคราม
                        </Typography>
                    </TabContainer>}
                    {value === 9 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายผจญภัย
                        </Typography>
                    </TabContainer>}
                    {value === 10 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายเวลา
                        </Typography>
                    </TabContainer>}
                    {value === 11 && <TabContainer>
                        <Typography className={classes.title} color="textSecondary" >
                            นิยายบู๊แอ๊คชั่น
                        </Typography>
                    </TabContainer>}
                </div>
            </div>
        );
    }
}

CategoryBookCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryBookCard);