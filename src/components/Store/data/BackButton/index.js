import React from "react";
import { withRouter } from "react-router-dom";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from '@material-ui/core/IconButton';

const Back = ({ history }) => (
    <IconButton
        onClick={history.goBack}
        color="inherit"
        aria-label="Menu"
        style={{
            marginLeft: -18,
            marginRight: 10,
        }}
    >
        <KeyboardBackspaceIcon style={{
            margin: 0
        }} />
    </IconButton>
);

export default withRouter(Back);