import { useDispatch } from 'react-redux';
import {addFoto} from '../../fotosSlice/fotoSlice';
import React from 'react';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';

export const FotosSearch = (props) => {

    const dispatch = useDispatch();
    
    const handleClick = (foto) => {
        alert(`Imagen añadida a su cartera` );
        console.log(foto)
    }

    return(
        <Grid container wrap="nowrap">
            {props.fotos.map((foto,i) =>                       
                <Box key={i} sx={{ width: 210, marginRight: 0.5, my: 5 }}>          
                    <img
                        style={{ width: 210, height: 180 }}
                        alt={foto.description}
                        src={foto.urls.full}
                    /> 
         
                    <Box sx={{ pr: 2 }}>
                        <Typography gutterBottom variant="body2">
                            {foto.description ? foto.description : 'Descripcion en proceso'}
                        </Typography>                         
    
                        <Typography variant="caption" color="text.secondary">
                            {` links ${foto.likes} • ${foto.updated_at} `}
                        </Typography>
                        
                    </Box>
                
                    <Button onClick={() => dispatch(addFoto(foto))}>
                        Add to my photos
                    </Button>
                </Box> 
            )}

        </Grid>
    )
}