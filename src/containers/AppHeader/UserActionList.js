import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Paper from '@material-ui/core/Paper';

import { listItemData1 } from '../AppLayout/ListItemData';

const styles = (theme) => ({
  root: {
    position: 'fixed',
    right: '2rem',
    zIndex: 2,
    top: '50px',
    backgroundColor: theme.palette.background.paper,
  },
  tyu: {
    margin: 0,
  },
  link: {
  },
});

const listItemData = [...listItemData1];

class UserActionLists extends Component {
  handleClick = (event, to) => {
    event.preventDefault();

    const { history } = this.props;
    history.push(to);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <List
          dense
          disablePadding
          component="nav"
        >
          {
              listItemData.map((list, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={
                    (event) => this.handleClick(event, list.to)}
                >
                  <ListItemIcon>
                    <list.Icon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary={list.text} />
                </ListItem>
              ))
            }
          <ListItem
            button
            onClick={(event) => this.handleClick(event, '/signout')}
          >
            <ListItemIcon>
              <PowerSettingsNewIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="signout" />
          </ListItem>
        </List>
      </Paper>
    );
  }
}

UserActionLists.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserActionLists);
