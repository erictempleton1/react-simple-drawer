import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';


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
  drawerPaper: {
    background: "#9E9E9E9E",
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
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
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class PersistentDrawer extends Component {
  state = {
    open: false,
    anchor: 'right',
  };

  toggleDrawer = () => {
    this.setState({ open: this.state.open ? false : true });
  }

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          Header
        </div>
        <Button>Item 1</Button>
        <Button>Item 2</Button>
        <Button>Item 3</Button>
      </Drawer>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <Button onClick={this.toggleDrawer}>Toggle Drawer</Button>
          </main>
          {drawer}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PersistentDrawer);