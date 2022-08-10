import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  BubbleChart, ContactPage, ContactSupport, ContentCopy, ExitToApp, Home, Person, Sell, PersonAdd, Group, Lock} from "@mui/icons-material";

import { Drawer, Divider, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';

import "./styles.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  

  const [menu, setMenu] = React.useState(false);
  
  if (location.pathname === "/cadastro" ||  location.pathname === "/login" ) {
    return;
  }

  const redirect = (route) => {
    navigate(route);
    setMenu(false);
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
          <ListItemButton onClick={() => redirect('/')}>
            <ListItemIcon><Home/></ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => redirect('/categorias')}>
            <ListItemIcon><Sell/></ListItemIcon>
            <ListItemText>Categorias</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => redirect('/Produtos')}>
            <ListItemIcon><BubbleChart/></ListItemIcon>
            <ListItemText>Produtos</ListItemText>
          </ListItemButton>
        
          <ListItemButton onClick={() => redirect('/clientes')}>
            <ListItemIcon><Person/></ListItemIcon>
            <ListItemText>Clientes</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => redirect('/relatorios')}>
            <ListItemIcon><ContentCopy/></ListItemIcon>
            <ListItemText>Relatórios</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => redirect('/contato')}>
            <ListItemIcon><ContactPage/></ListItemIcon>
            <ListItemText>Contatos</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => redirect('/fornecedor')}>
            <ListItemIcon><PersonAdd/></ListItemIcon>
            <ListItemText>fornecedor</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => redirect('/usuarios')}>
            <ListItemIcon><Group/></ListItemIcon>
            <ListItemText>Usuarios</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => redirect('/perfis')}>
            <ListItemIcon><Lock/></ListItemIcon>
            <ListItemText>Perfis</ListItemText>
          </ListItemButton>

          <ListItemButton onClick={() => redirect('/help')}>
            <ListItemIcon><ContactSupport/></ListItemIcon>
            <ListItemText>Ajuda</ListItemText>
          </ListItemButton>
          
          <ListItemButton onClick={() => redirect('/colaboradores')}>
            <ListItemIcon><Group/></ListItemIcon>
            <ListItemText>Colaboradores</ListItemText>
          </ListItemButton>

          <Divider/>

          <ListItemButton className="sair" onClick={() => redirect('/login')}>
            <ListItemIcon className="sair_texto"><ExitToApp/></ListItemIcon>
            <ListItemText>Sair</ListItemText>
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
