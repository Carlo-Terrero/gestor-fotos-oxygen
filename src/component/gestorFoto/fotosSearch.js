import { useDispatch } from 'react-redux';
import {addFoto} from '../../fotosSlice/fotoSlice';
import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export const FotosSearch = (props) => {

    const dispatch = useDispatch();

    const handleaddFavoritos = (foto) => {
        //const  = {date: new Date(Date.now())}
        const newFoto = {...foto, fecha: new Date().toISOString()}
        //console.log(newFoto)
        //dispatch(addFavoritos(foto)) hacen lo mismo. Creo que el problema esta aqui
        dispatch(addFoto(newFoto))
    }

    return(
        <Box container wrap="nowrap"  sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            marginTop: -3,
            marginLeft: 5,
            marginBottom: 5,
            bgcolor: "background.paper",
            }}>

            {props.fotos.map((foto,i) =>                       
                <Box key={i} sx={{ width: 390, marginRight: 0.5, marginTop: 5 }}>          
                    <img
                        style={{ width: 350, height: 280 }}
                        alt={foto.description}
                        src={foto.urls.full}                        
                    /> 
                                

                    {/* <Button onClick={() => dispatch(addFoto(foto))}> */}
                    <Button onClick={() => handleaddFavoritos(foto)}>
                        {/* agregar fotos */}
                        <AddPhotoAlternateIcon/>
                        <Typography variant="caption" color="text.secondary">
                            {`  ${foto.description ? foto.description : 'añadir descripción en favoritas'}  `}
                        </Typography>
                    </Button>
                    
                    
                </Box> 
            )}

        </Box>
    )
}