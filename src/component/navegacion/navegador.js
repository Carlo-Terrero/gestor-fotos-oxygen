import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import {ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        oscuro: {
            main: '#053e85',
        },
        blanco: {
            main: `#ffffff`,
            contrastText: '#fff', 
        },
    },
});

export const Navegador = () => {
    
    const [botonSelect, setBotonSetselect] = useState(0);
    const navigation = useNavigate();

    const handleNavegation = (btnSelect, linkNavegation) => {

        setBotonSetselect(btnSelect);
        navigation(linkNavegation);
    }

    return(
        <Box sx={{ flexGrow: 1 }}>     
            <AppBar >
                <Toolbar>
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>                
                        
                    <ThemeProvider theme={theme}>
                        <Stack spacing={1} direction="row">
                            <Button  to="/" variant="contained" sx={{
                                backgroundColor: botonSelect === 0 ? "blanco.main" : "oscuro.main",
                                color: botonSelect === 0 ? "oscuro.main" : "blanco.main",
                                '&:hover': {
                                    color: botonSelect === 0 ? "blanco.main" : "oscuro.main",
                                }
                            }}
                                onClick={() => handleNavegation(0, "/")}
                            >
                                Search 
                            </Button>

                            <Button to="/myFoto" variant="contained" sx={{
                                backgroundColor: botonSelect === 1 ? "blanco.main" : "oscuro.main",
                                color: botonSelect === 1 ? "oscuro.main" : "blanco.main",
                                '&:hover': {
                                    color: botonSelect === 0 ? "blanco.main" : "oscuro.main",
                                }
                            }}
                                onClick={() => handleNavegation(1, "/myFoto")}
                            >
                                myFoto
                            </Button>
                        </Stack>
                    </ThemeProvider>
                                         
                </Toolbar>

            </AppBar>
        </Box>
    )
}