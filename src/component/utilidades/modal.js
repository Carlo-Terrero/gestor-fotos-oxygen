import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { editDescription } from '../../fotosSlice/fotoSlice'

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

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [valueText, setValueText] = useState('');
  const dispatch = useDispatch();
  const foto = props.foto;

  const cambiarDescripcion = () => {
   /*  console.log(props.foto.id)
    props.foto.description = valueText; */
    dispatch(editDescription(valueText))
    handleClose();
  }

  const handleOnChange = (e) => {
    setValueText(e.target.value);
  }

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Edit</Button>
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
          {console.log(valueText)}
          <Button onClick={cambiarDescripcion}>Aceptar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
