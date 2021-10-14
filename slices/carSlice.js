import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cars: []
}

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.vehicles = action.payload
    },
    removeCar: (state, action) => {
      state.vehicles = action.payload
    },

  },
});

export const { addCar, removeCar } = carSlice.actions

export const selectCar = (state) => state.car.cars

export default carSlice.reducer