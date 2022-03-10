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
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import EditIcon from '@mui/icons-material/Edit';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';


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

    return(
        <Box sx={{ overflow: 'hidden' }}>
            <Input onChange={buscadorDescription} placeholder='Buscador de favoritas' 
            sx={{marginLeft: 3.5}}/>

            <Grid container wrap="nowrap" sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            bgcolor: "background.paper",
            marginBottom: 5,
            }}>    

                {listaFotos.map((foto,i) =>                       
                    <Box key={i} sx={{ width: 390, marginRight: 0.5, marginTop: 4 }}>                             
                        <img
                            style={{ width: 350, height: 280 }}
                            alt={foto.description}
                            src={foto.urls.full}
                        /> 
            
                        <Box sx={{ pr: 2 }}>
                            <Typography gutterBottom variant="body2">
                                {foto.description ? foto.description : 'Añadir descripción'}                               
                                {foto.date}

                            </Typography>                         

                            {/* <Typography variant="caption" color="text.secondary">
                                {` links ${foto.likes} • ${foto.updated_at} `}
                            </Typography> */}
                            
                        </Box>
                     
                        <Button onClick={() => handleOpen(foto.id)}><EditIcon/></Button>                         
                        <Button onClick={() => descargarImg(foto)}><ArrowCircleDownIcon/></Button>
                        <Button onClick={() => dispatch(deleteFoto(foto))}><DeleteIcon/></Button>

                        <React.Fragment>                            
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2"
                                        
                                    >
                                        Insertar nueva descripción
                                    </Typography>
                                
                                    <TextField
                                    id="standard-helperText"
                                    label="Nueva Descriptición"                                    
                                    variant="standard"
                                    onChange={handleOnChange}
                                    multiline
                                    fullWidth 
                                    sx={{marginTop:2, }}/>
                                
                                    <Box sx={{marginTop: 1.5, float: 'right'}}>
                                        <Button onClick={() => cambiarDescripcion()}><CheckIcon/></Button>
                                        <Button color="error"onClick={handleClose}><CancelIcon/></Button>
                                    </Box>
                                </Box>
                            </Modal>
                        </React.Fragment>
                   
                    </Box> 
                     
                )}

            </Grid>

            
        </Box>
    )
}