import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selecFoto, deleteFoto } from '../../fotosSlice/fotoSlice';

// Styles
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';

export const FotosFavo = () => {

    const dispatch = useDispatch();
    const listaFotos = useSelector(selecFoto);
    console.log(listaFotos)

    const handleClick = (foto) => {
        console.log('me estas borrando', foto.id)
    }

    return(
        <Grid container wrap="nowrap">
        {listaFotos.map((foto,i) =>                       
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

                <Button onClick={() => dispatch(deleteFoto(foto))}>Delete</Button>
               
            </Box> 
        )}

    </Grid>
    )
}