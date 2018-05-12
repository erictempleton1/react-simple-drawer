import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';


class DrawerComponent extends Component {
  state = {
    open: false,
    anchor: 'right',
  };

  toggleDrawer = () => {
    this.setState({ open: this.state.open ? false : true });
  }
}


export default withStyles(styles)(DrawerComponent);