import { createSlice } from '@reduxjs/toolkit'

export const fotoSlice = createSlice({
  name: 'fotosFavoritas',
  initialState: {
    listFoto: [],
  },
  reducers: {
    addFoto: (state) => {
      state.listFoto.push(JSON.stringify({name:'Carlos', apellido: 'Terrero'}))
    },
    prueba: (state, action) => {
      state.listFoto.push(JSON.stringify(action.payload))
    },
    deleteFoto: (state) => {
      state.listFoto -= 3
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