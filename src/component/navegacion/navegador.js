import React from "react";
import { NavLink } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import {ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    blanco: {
        main: purple[500]
    },
    limon: {
        main: '#5EBC04',
        contrastText: '#fff',
        
    },
  },
});

export const Navegador = () => {
    
    return(
        <Box sx={{ flexGrow: 1 }}>     
            <AppBar >
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>                
                        
                    <ThemeProvider theme={theme}>
                        <Stack spacing={1} direction="row">
                            <Button  to="/" variant="contained" color="limon">
                                <NavLink to="/">
                                    Search
                                </NavLink>
                            </Button>

                            <Button to="/myFoto" variant="contained" color="limon">
                                <NavLink to="/myFoto">
                                    myFoto
                                </NavLink>
                            </Button>
                        </Stack>
                    </ThemeProvider>
                                         
                </Toolbar>

            </AppBar>
        </Box>
    )
}