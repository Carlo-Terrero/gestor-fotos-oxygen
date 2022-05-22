import { createSlice } from '@reduxjs/toolkit'

function getFromStorage() {
  if (localStorage.getItem('photos')) {
      return JSON.parse(localStorage.getItem('photos'));
  }
  return [];
}

function saveToStorage(photos) {
  localStorage.setItem('photos', JSON.stringify(photos));
}

export const fotoSlice = createSlice({
  name: 'fotosFavoritas',
  
  initialState: {
    listFoto: getFromStorage(),
  },

  reducers: {    
    addFoto: (state, action) => {
      state.listFoto.push(action.payload)
      saveToStorage(state.listFoto)
    },

    deleteFoto: (state, action) => {
      state.listFoto = state.listFoto.filter(foto => foto.id !== action.payload.id ) 
      saveToStorage(state.listFoto)
      //console.log(action.payload)

    },

    editDescription: (state, action) => {
      /* state.value += action.payload */
      //console.log(action)
      //state.listFoto.find(foto => foto.id === action.payload.id).description = action.payload.description
      const newListFoto = [...state.listFoto];
      const fotoToEdit = newListFoto.find(f => f.id === action.payload.id);
      fotoToEdit.description = action.payload.description;
      state.listFoto = newListFoto;
      saveToStorage(state.listFoto)
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