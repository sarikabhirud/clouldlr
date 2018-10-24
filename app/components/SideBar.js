// @flow
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class SideBar extends Component {
  componentWillMount() {
    const { fetchLogGroups } = this.props;
    fetchLogGroups();
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    const { logs, classes } = this.props;
    console.log(logs);
    return (
      <div className="pane-sm sidebar">
        <List>
          {logs.map(value => (
            <ListItem
              key={value.logGroupName}
              role={undefined}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary={value.logGroupName} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
