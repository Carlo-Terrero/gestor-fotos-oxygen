import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../../fotosSlice/countSlice';
import { FotosFavo } from '../gestorFoto/fotosFavo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const MyFotos = () => {
    
    //const fotosFav = useSelector(selectCount);
    

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