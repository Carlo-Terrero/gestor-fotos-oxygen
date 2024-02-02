import React, {useState, useEffect} from 'react';

import useDebounce from '../utilidades/useDebounce';
import searchCharacters from '../utilidades/request';

import {FotosSearch} from '../gestorFoto/fotosSearch';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Pagination from '@mui/material/Pagination';

export const Search = () =>{

    const [fotos,setFotos] = useState([]);
    const [busqueda, setBusqueda] = useState("madrid");//searchterm 
    const [isSearching, setIsSearching] = useState(false); // Con este estado se implementa el Loading.
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState('');

    // Esta funcion le agraga un stop a la busqueda para retrasarla
    const debouncedSearchTerm = useDebounce(busqueda, 500); 
    // Const fotosFav = useSelector(selecFoto)
    
    //const fotopage = (`https://api.unsplash.com/search/photos?query=${busqueda}&page=${page}&client_id=${client_id}`);

    useEffect(() =>{
        if(debouncedSearchTerm){
            setIsSearching(true);
            searchCharacters(debouncedSearchTerm,page)
            .then((response) => {
                setIsSearching(false);
                setFotos(response.results)                     
                setTotalPages(response.total_pages)            
            });
        } else {
            setFotos([]);
            setIsSearching(false);
        }
            //Axios.get(fotopage)
            // .then((response) => {
            // })
            // .catch((error) => {
            //     console.log('Ha ocurrido un error ', error);
            // })

        // }

    },[debouncedSearchTerm, page]);
  
    const buscador = (e) => {
        setBusqueda(e.target.value);
    }
  
    // Funciones que se encargan de cambiar las paginas. Mui se encarga de la lógica
    const handleChangePage = (event, value) => {
        setPage(value)
    }

    return(
        <Box sx={{ overflow: 'hidden' }}>

            <Box sx={{marginLeft: 5,}}>

                <Input onChange={buscador} placeholder='Buscador' 
                    sx={{marginTop:12,  }}
                
                />
                
                <Pagination count={totalPages} page={page} onChange={handleChangePage} sx={{marginTop: 4}}/>
            </Box>

            {isSearching && <div>Searching ...</div>}
            <FotosSearch fotos={fotos}/>

            <Pagination count={totalPages} page={page} onChange={handleChangePage} sx={{marginLeft: 4, marginBottom: 3, marginTop: -4}}/>
        </Box>
    )
}