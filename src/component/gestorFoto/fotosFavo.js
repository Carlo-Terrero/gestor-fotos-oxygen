import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selecFoto, deleteFoto, editDescription } from '../../fotosSlice/fotoSlice';
import { saveAs } from 'file-saver';
//import Popup from 'reactjs-popup';

// Styles
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


//import Modal from '../utilidades/modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const FotosFavo = () => {

    const dispatch = useDispatch();
    const listaFotos = useSelector(selecFoto);

    const [newDescription, setNewDescription] = useState('');
    const [editFoto, setEditFoto] = useState('');
   

    const [open, setOpen] = useState(false);

    const handleOpen = (foto) => {
        setEditFoto(foto);
        setOpen(true)
    };
    
    const handleClose = () => {
        setNewDescription('')
        setEditFoto('')
        setOpen(false)
    };

    const descargarImg = (foto) => {
        saveAs(foto.urls.full, 'image.jpg');
    }

    const buscadorDescription = (e) => {
        let text = e.target.value;
        console.log(text)
    }

    const cambiarDescripcion = () => { 
        dispatch(editDescription({id: editFoto, description: newDescription }))
        handleClose();
    }

    const handleOnChange = (e) => {
        const valor = e.target.value
        setNewDescription(valor);
        console.log(newDescription)
    }
  /*   const defaultDecription = (description) => {
        return (description ? description : 'Descripcion en proceso')
    } */


    return(
        <Box sx={{ overflow: 'hidden' }}>
            <input onChange={buscadorDescription}/>

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
                               {/*  {defaultDecription(foto.description)} */}
                                

                            </Typography>                         

                            <Typography variant="caption" color="text.secondary">
                                {` links ${foto.likes} • ${foto.updated_at} `}
                            </Typography>
                            
                        </Box>
                     
                        <Button onClick={() => dispatch(deleteFoto(foto))}>Delete</Button>
                        <Button onClick={() => descargarImg(foto)}>descar</Button>
                        <Button onClick={() => handleOpen(foto.id)}>Edit</Button> 

                        <React.Fragment>                            
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Insertar nueva descripción
                                </Typography>
                                
                                <textarea onChange={handleOnChange}> </textarea>
                                {/* <textarea onChange={change}></textarea> */}
                                
                                <Button onClick={() => cambiarDescripcion()}>Aceptar</Button>
                                <Button onClick={handleClose}>Cancelar</Button>
                                </Box>
                            </Modal>
                        </React.Fragment>
                   
                    </Box> 
                     
                )}

            </Grid>

            
        </Box>
    )
}