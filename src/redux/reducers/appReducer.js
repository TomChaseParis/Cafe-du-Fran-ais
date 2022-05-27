import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lng: 'FR',
  mode: 'light'
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLng: (state, action) => {
      state.lng = action.payload || initialState.lng
    },
    setMode: (state, action) => {
      state.mode = action.payload || initialState.mode
    },
  },
})

export const { setLng, setMode } = appSlice.actions

export default appSlice.reducer
