import { createSlice } from '@reduxjs/toolkit'

export const fotoSlice = createSlice({
  name: 'fotosFavoritas',
  initialState: {
    listFoto: [],
  },
  reducers: {
    /* addFoto: (state) => {
      state.listFoto.push({name:'Carlos', apellido: 'Terrero'})
    }, */
    addFoto: (state, action) => {
      state.listFoto.push(action.payload)
    },
    deleteFoto: (state, action) => {
        state.listFoto = state.listFoto.filter(foto => foto.id !== action.payload.id ) 
      //console.log(action.payload)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addFoto, deleteFoto, incrementByAmount, prueba } = fotoSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selecFoto = (state) => state.fotosFavoritas.listFoto;

export default fotoSlice.reducer