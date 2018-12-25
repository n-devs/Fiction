import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Search extends React.Component {
    render() {
        
  const { classes } = this.props;
        return (
            <React.Fragment>
                <div id="wrap">
                    <form action="" autocomplete="on">
                        <input id="search" name="search" type="text" placeholder="ค้นหา Fiction" />
                        <label htmlFor="search" type="submit">
                            <IconButton  className={classes.button} component="span">
                                <SearchIcon />
                            </IconButton>
                        </label>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Search);