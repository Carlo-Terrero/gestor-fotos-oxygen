import { configureStore } from '@reduxjs/toolkit';
import fotoSlice from '../fotosSlice/fotoSlice';

export default configureStore({
    reducer: {
        fotosFavoritas: fotoSlice
    },
});