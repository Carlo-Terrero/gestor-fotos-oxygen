import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../fotosSlice/countSlice';
import fotoSlice from '../fotosSlice/fotoSlice';

export default configureStore({
    reducer: {
        counter: counterSlice,
        fotosFavoritas: fotoSlice
    },
});