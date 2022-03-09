import { createSlice } from '@reduxjs/toolkit'

export const fotoSlice = createSlice({
  name: 'fotosFavoritas',
  initialState: {
    listFoto: [],
  },
  reducers: {    
    addFoto: (state, action) => {
      state.listFoto.push(action.payload)
    },
    deleteFoto: (state, action) => {
      state.listFoto = state.listFoto.filter(foto => foto.id !== action.payload.id ) 
      //console.log(action.payload)

    },
    editDescription: (state, action) => {
      /* state.value += action.payload */
      console.log(action)
      state.listFoto.find(foto => foto.id === action.payload.id).description = action.payload.description

    },
  },
})

export const { addFoto, deleteFoto, editDescription} = fotoSlice.actions

/* export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
 */
export const selecFoto = (state) => state.fotosFavoritas.listFoto;

export default fotoSlice.reducer