import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cars: [],
  make: '',
}

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars = action.payload
    },
    removeCar: (state, action) => {
      state.cars = action.payload
    },
    addMake: (state, action) => {
      state.make = action.payload
    }

  },
});

export const { addCar, removeCar, addMake } = carSlice.actions

export const selectCar = (state) => state.car.cars
export const selectMake = (state) => state.car.make

export default carSlice.reducer