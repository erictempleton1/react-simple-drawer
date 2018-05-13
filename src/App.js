import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Button from 'material-ui/Button';

import DrawerComponent from './DrawerComponent';


const drawerWidth = 150;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 600,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-right': {
    marginRight: 0,
  },
});


class App extends Component {
  state = {
    open: false,
  };

  toggleDrawer = () => {
    this.setState({ open: this.state.open ? false : true });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <main
            className={classNames(classes.content, classes['content-right'], {
              [classes.contentShift]: this.state.open,
              [classes['contentShift-right']]: this.state.open,
            })}
          >
            <Button onClick={this.toggleDrawer}>Toggle Drawer</Button>
          </main>
          <DrawerComponent open={this.state.open} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);