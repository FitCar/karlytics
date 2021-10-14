import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state,action) => {
      state.users = action.payload
    },
    logout: (state) => {
      state.users = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.users;

export default userSlice.reducer;