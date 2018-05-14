import React from 'react';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import { ListItemIcon } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';


const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: '#9E9E9E9E',
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});

function ListItemComposition({ classes, onClick }) {

  return (
      <MenuList>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon onClick={onClick} className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={onClick} className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <DraftsIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={onClick} className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <InboxIcon />
          </ListItemIcon>
        </MenuItem>
      </MenuList>
  );
}


export default withStyles(styles)(ListItemComposition);