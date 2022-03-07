import React, {useState, useEffect} from 'react';
import Axios from "axios";

import {FotosSearch} from '../gestorFoto/fotosSearch';

import Box from '@mui/material/Box';

export const Search = () =>{

    const [fotos,setFotos] = useState([]);
    const [ciudad, setCiudad] = useState("madrid");
    
    const fotoListFuncional = (`https://api.unsplash.com/photos?query=londres&client_id=94Qm7uawu-WipDfsnw4LgIey51lYC0BjuLtDF7nL3is`);
    const fotoList = (`https://api.unsplash.com/search/photos?query=${ciudad}&client_id=94Qm7uawu-WipDfsnw4LgIey51lYC0BjuLtDF7nL3is`);
    useEffect(() =>{
        Axios.get(fotoListFuncional)
        .then((response) => {
            //console.log(response.data.urls);
            setFotos(response.data)
            console.log('-------------------------')
            
        })
        .catch((error) => {
            console.log('a ocurrido un error ', error);
        })
    },[ciudad])

  
    return(
        <Box sx={{ overflow: 'hidden' }}>
            <FotosSearch fotos={fotos}/>           
        </Box>
    )
}