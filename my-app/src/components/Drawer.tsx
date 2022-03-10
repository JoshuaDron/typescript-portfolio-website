import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  useNavigate
} from "react-router-dom";
import { AutoAwesomeMosaic } from '@mui/icons-material';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

const useStyles = makeStyles((theme) => ({
  link: {textDecoration: 'none', color: 'black'},
  list: {display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}
}))

function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className = {classes.list}>
        <Link to="/" className = {classes.link}>
          <ListItem button>
            <ListItemText primary={"Home"}/>
          </ListItem>
        </Link>
        <Link to="/about" className = {classes.link}>
          <ListItem button>
            <ListItemText primary={"About"}/>
          </ListItem>
        </Link>
        <Link to="/work" className = {classes.link}>
          <ListItem button>
            <ListItemText primary={"Work"}/>
          </ListItem>
        </Link>
        <Link to="/interests" className = {classes.link}>
          <ListItem button>
            <ListItemText primary={"Interests"} />
          </ListItem>
        </Link>
        <div className = {classes.link}>
          <ListItem button >
            <CloseIcon onClick={toggleDrawer('top', false)}/>
          </ListItem>
        </div>
        
      </List>
    </Box>
  );

  return (
    <div>
      {(['top'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} startIcon={<MenuIcon />}></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer