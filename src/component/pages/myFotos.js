import React from 'react';
import { FotosFavo } from '../gestorFoto/fotosFavo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const MyFotos = () => {
    
    return(
        <Box sx={{marginTop:12,marginLeft: 5}}>
            <Typography 
                sx={{
                    my: 3,
                    marginLeft:3                
            }}
            >Coleccion de fotos personal 
            </Typography>            
            
            <FotosFavo/>
        </Box>
    )
}