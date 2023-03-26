import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProd: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, { payload = [] }) => {
      if (!state.products.length && !payload.length) {
        return;
      }
      state.products = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProd = payload;
    },


  },
});

const { reducer, actions } = productSlice;

export const { setProducts, setSelectedProduct } = actions;

export default reducer;