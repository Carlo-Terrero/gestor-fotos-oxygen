import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../../fotosSlice/countSlice';
import { FotosFavo } from '../gestorFoto/fotosFavo';

export const MyFotos = () => {
    
    //const fotosFav = useSelector(selectCount);
    

    return(
        <div>
            <p>Estamos en mis fotos </p>            
            <FotosFavo/>
        </div>
    )
}