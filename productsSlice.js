import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.productsList.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.productsList = state.productsList.filter(product => product.id !== action.payload);
    }
  }
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
