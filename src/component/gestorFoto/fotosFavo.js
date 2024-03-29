import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selecFoto, deleteFoto, editDescription } from '../../fotosSlice/fotoSlice';
import { saveAs } from 'file-saver';

// Styles
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import EditIcon from '@mui/icons-material/Edit';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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
    const [busqueda, setBusqueda] = useState('');
   

    const [open, setOpen] = useState(false);

    const handleOpen = (foto) => {
        setNewDescription(foto.description);
        setEditFoto(foto.id);
        setOpen(true);
    };
    
    const handleClose = () => {
        setNewDescription('');
        setEditFoto('');
        setOpen(false);
    };

    const descargarImg = (foto) => {
        saveAs(foto.urls.full, 'image.jpg');
    }

    const buscadorDescription = (e) => {
        setBusqueda(e.target.value);
    }

    const cambiarDescripcion = () => { 
        dispatch(editDescription({id: editFoto, description: newDescription }))
        handleClose();
    }

    const handleOnChange = (e) => {
        setNewDescription( e.target.value);
    }

    //Aqui el buscador
    const filteredPhotos = busqueda.length ? listaFotos.filter(f => f.newDescription.toLowerCase().includes(busqueda.toLowerCase())) : listaFotos;

    return(
        <Box sx={{ overflow: 'hidden' }}>
            <Input onChange={buscadorDescription} placeholder='Buscador de favoritas' sx={{marginLeft: 3.5}}/>

            <Grid container wrap="nowrap" sx={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "center",
                bgcolor: "background.paper",
                marginBottom: 5,
            }}>    
                
                {filteredPhotos.map((foto,i) =>                       
                    <Box key={i} sx={{ width: 390, marginRight: 0.5, marginTop: 4 }}>                             
                        <img
                            style={{ width: 350, height: 280 }}
                            alt={foto.description}
                            src={foto.urls.small}
                        /> 
            
                        <Box sx={{ pr: 2 }}>
                            <Typography gutterBottom variant="body2">                                
                                {foto.newDescription}                          
                                {/* {foto.fecha} */}

                            </Typography>                         
                            
                        </Box>
                     
                        <Button onClick={() => handleOpen(foto)}><EditIcon/></Button>                         
                        <Button onClick={() => descargarImg(foto)}><ArrowCircleDownIcon/></Button>
                        <Button onClick={() => dispatch(deleteFoto(foto))}><DeleteIcon/></Button>
                        <Button onClick={() => navigator.clipboard.writeText(foto.urls.small)}>
                            <ContentCopyIcon/>
                        </Button>                   
                   
                    </Box> 
                     
                )}

            </Grid>
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
                    
                        <TextField
                        id="standard-helperText"
                        label="Nueva Descriptición"                                    
                        variant="standard"
                        onChange={handleOnChange}
                        multiline
                        value={newDescription}
                        fullWidth 
                        sx={{marginTop:2, }}/>
                    
                        <Box sx={{marginTop: 1.5, float: 'right'}}>
                            <Button onClick={() => cambiarDescripcion()}><CheckIcon/></Button>
                            <Button color="error"onClick={() => handleClose()}><CancelIcon/></Button>
                        </Box>
                    </Box>
                </Modal>
            </React.Fragment>
            
        </Box>
    )
}