import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestId: '',
};

export const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    setRequestId: (state, action) => {
      state.requestId = action.payload;
    },
  },
});

export const { setRequestId } = requestSlice.actions;

export const selectRequest = (state) => state.request.requestId;


export default requestSlice.reducer;
