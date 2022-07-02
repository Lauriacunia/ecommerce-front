import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsIcon from '@mui/icons-material/Settings';


const Header = () => {
 
 return (
 
        <div >

        <AppBar  position="sticky">
            <Toolbar>
                <Grid container spacing={2}  
                  direction="row"
                  alignItems="center">
                  <Grid item>
                  <img 
                     src = "https://user-images.githubusercontent.com/63796774/175135690-c16823ec-0808-4903-8d57-b8257983cde2.png" />
                  </Grid>
                  
                </Grid>
                <Grid container spacing={2} 
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center">
                    <Avatar alt="Remy Sharp"  sx={{ width: 24, height: 24 }} src="https://user-images.githubusercontent.com/63796774/175137557-ce74ef5f-cea9-4783-8c5c-c890a6ce38a8.jpeg" />
                    <ShoppingCartOutlinedIcon  sx={{ color: 'white', fontSize: 18 }} />
                    <SettingsIcon   sx={{ color: 'white', fontSize: 18 }} />
                </Grid>
            </Toolbar>
        </AppBar>

        </div>
  
    );
  
}

export default Header