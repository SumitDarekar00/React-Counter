import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0
  },
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    setToZero: (state) => {
      state.counterValue = 0;
    }
  }
});

export const { increment, decrement, setToZero } = counterSlice.actions;

export default counterSlice.reducer;
