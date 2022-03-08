import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer



/* import { createSlice } from '@reduxjs/toolkit'

export const fotosReducer = createSlice({
  name: 'fotosFavo',
  initialState: {
    //value: 0
    listFotosFav: []
  },
  reducers: {
    //meter img
    addFav: (state, action) => {      
      //state.value += 1
      state.fotosFav.push(action.payload)
      console.log(state)
    },

    decrement: state => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { addFav, decrement, incrementByAmount } = fotosReducer.actions


export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}


//export const listFotosFav = (state) => state.fotosFavo.fotosFav
//export const listFotosFav = (state) => state.fotosFavo.listFotosFav
//export const listFotosFav = () => fotosFavo.fotosFav

export default fotosReducer.reducer
 */