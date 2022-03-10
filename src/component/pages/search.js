import React, {useState, useEffect} from 'react';
import Axios from "axios";
import { useSelector } from 'react-redux';

import {selecFoto} from '../../fotosSlice/fotoSlice'

import {FotosSearch} from '../gestorFoto/fotosSearch';
import {client_id} from '../../env';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Pagination from '@mui/material/Pagination';

export const Search = () =>{

    const [fotos,setFotos] = useState([]);
    const [busqueda, setBusqueda] = useState("madrid");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState('')

    const fotosFav = useSelector(selecFoto)
    
    const fotopage = (`https://api.unsplash.com/search/photos?query=${busqueda}&page=${page}&client_id=${client_id}`)
    useEffect(() =>{
        Axios.get(fotopage)
        .then((response) => {
            setFotos(response.data.results)                     
            setTotalPages(response.data.total_pages)            
            console.log('-------------------------')
            
        })
        .catch((error) => {
            console.log('Ha ocurrido un error ', error);
        })
    },[busqueda, page])

  
    const buscador = (e) => {
        setBusqueda(e.target.value);
    }
  
    // Funciones que se encargan de cambiar las paginas. Mui se encarga de la lógica
    const handleChangePage = (event, value) => {
        setPage(value)
    }

    return(
        <Box sx={{ overflow: 'hidden' }}>

           {/*  <Typography>Buscador</Typography>  */}
           <Box sx={{marginLeft: 5,}}>
                <Input onChange={buscador} placeholder='Buscador' 
                    sx={{marginTop:12,  }}
                
                />
                
                <Pagination count={totalPages} page={page} onChange={handleChangePage} 
                sx={{marginTop: 4}}/>
            </Box>
            {console.log(fotosFav)}
            <FotosSearch fotos={fotos}/>           
        </Box>
    )
}