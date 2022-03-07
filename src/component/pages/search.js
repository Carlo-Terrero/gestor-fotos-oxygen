import React, {useState, useEffect} from 'react';
import Axios from "axios";

import {FotosSearch} from '../gestorFoto/fotosSearch';
import {client_id} from '../../env';

import Box from '@mui/material/Box';

export const Search = () =>{

    const [fotos,setFotos] = useState([]);
    const [busqueda, setBusqueda] = useState("madrid");
    const [page, setPage] = useState(1)
    
    const fotoList = (`https://api.unsplash.com/search/photos?query=${busqueda}&client_id=${client_id}`);
    const fotopage = (`https://api.unsplash.com/search/photos?query=${busqueda}&page=${page}&client_id=${client_id}`)
    useEffect(() =>{
        Axios.get(fotopage)
        .then((response) => {
            //console.log(response.data.urls);
            setFotos(response.data.results)            
            console.log('-------------------------')
            
        })
        .catch((error) => {
            console.log('Ha ocurrido un error ', error);
        })
    },[busqueda, page])

  
    const buscador = (e) => {
        //console.log(e.target.value);
        setBusqueda(e.target.value);
        //console.log('Estamos al aire');
    }
  
    const sumarPage = () => {
        setPage(page + 1);        
    }

    const restarPage = () => {
        setPage(page - 1);
    }

    return(
        <Box sx={{ overflow: 'hidden' }}>
            <p>Buscador</p> <input onChange={buscador}/>
          
            {console.log(page)}

            <button onClick={sumarPage}>+</button>
            <button onClick={restarPage}>-</button>
            <FotosSearch fotos={fotos}/>           
        </Box>
    )
}