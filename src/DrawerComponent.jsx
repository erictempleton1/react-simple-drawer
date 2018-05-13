import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';


const drawerWidth = 150;
const styles = theme => ({
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
});


function DrawerComponent({ classes, open }) {
  return (
    <Drawer
        variant="persistent"
        anchor='right'
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
}


export default withStyles(styles)(DrawerComponent);