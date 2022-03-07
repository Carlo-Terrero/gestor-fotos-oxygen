import React from "react";
import { NavLink } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Navegador = () => {
    
    return(
        <Box sx={{ flexGrow: 1 }}>     
            <AppBar position="static">
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>                
                        
                    <Button  to="/" variant="contained" color="success">
                        <NavLink to="/">
                            Search
                        </NavLink>
                    </Button>

                    <Button to="/myFoto" variant="contained" color="success">
                        <NavLink to="/myFoto">
                            myFoto
                        </NavLink>
                    </Button>
                                         
                </Toolbar>

            </AppBar>
        </Box>
    )
}