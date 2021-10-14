import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'
import basketReducer from "./slices/basketSlice";
import carReducer from "./slices/carSlice"

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
