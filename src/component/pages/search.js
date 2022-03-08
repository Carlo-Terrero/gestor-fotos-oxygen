import React, {useState, useEffect} from 'react';
import Axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,    
    selectCount,
  } from '../../fotosSlice/countSlice'; 

import { 
    addFoto, 
    deleteFoto,
    selecFoto
  } from '../../fotosSlice/fotoSlice'

import {FotosSearch} from '../gestorFoto/fotosSearch';
import {client_id} from '../../env';

import Box from '@mui/material/Box';

import store from '../../store/store';

export const Search = () =>{

    const [fotos,setFotos] = useState([]);
    const [busqueda, setBusqueda] = useState("madrid");
    const [page, setPage] = useState(1)

    const countValue = useSelector(selectCount);
    const fotosFav = useSelector(selecFoto)
    const dispatch = useDispatch();

    //const fotosParseadas = JSON.parse(fotosFav)
    
    //const fotoList = (`https://api.unsplash.com/search/photos?query=${busqueda}&client_id=${client_id}`);
    const fotopage = (`https://api.unsplash.com/search/photos?query=${busqueda}&page=${page}&client_id=${client_id}`)
    useEffect(() =>{
        Axios.get(fotopage)
        .then((response) => {
            setFotos(response.data.results)            
            console.log('-------------------------')
            
        })
        .catch((error) => {
            console.log('Ha ocurrido un error ', error);
        })
    },[busqueda, page])

  
    const buscador = (e) => {
        setBusqueda(e.target.value);
    }
  
    // Funciones que se encargan de cambiar las paginas
    const sumarPage = () => {
        setPage(page + 1);        
    }

    const restarPage = () => {
        setPage(page - 1);
    }

    return(
        <Box sx={{ overflow: 'hidden' }}>
            <p>Buscador</p> <input onChange={buscador}/>          

            <button onClick={sumarPage}>+</button>
            <button onClick={restarPage}>-</button>

            {/* <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <p>Contador de pruebas {countValue}</p>

            <button onClick={() => dispatch(addFoto())}>+</button>
            <button onClick={() => dispatch(deleteFoto())}>-</button> */}
            
            {/* <p>comprobador de img {fotosFav}</p> */}
            {/* {console.log(store.getState())} */}
            {console.log(fotosFav)}
            <FotosSearch fotos={fotos}/>           
        </Box>
    )
}