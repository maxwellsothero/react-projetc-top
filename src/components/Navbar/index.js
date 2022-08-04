import * as React from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Favorite, Home, Sell} from "@mui/icons-material";
import { Drawer, Divider, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';

import "./styles.css";

export default function Navbar() {
  const location = useLocation();

  const [menu, setMenu] = React.useState(false);
  
  if (location.pathname === "/cadastro" ||  location.pathname === "/login" ) {
    return;
  }

  

  const handleMenu = () => {
    setMenu(!menu);
  } 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer className="menu" open={menu} onClose={handleMenu}>
        <Typography variant="h4" align="center">
          MENU
        </Typography>

        <Divider/>
        
        <List>
          <ListItemButton>
            <ListItemIcon><Home/></ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon><Sell/></ListItemIcon>
            <ListItemText>Categorias</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>

      <AppBar position="static">
        <Toolbar>

          <IconButton
            onClick={handleMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
