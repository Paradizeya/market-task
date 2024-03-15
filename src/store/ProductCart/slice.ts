import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCart, ExtendedProduct } from "@src/shared/types";

const initialState: ProductCart = {
  products: [],
  total: 0,
};

const ProductCartSlice = createSlice({
  name: "ProductCart",
  initialState: initialState,
  reducers: {
    populateCart: (state, action: PayloadAction<ExtendedProduct[]>) => {
      state.products = action.payload;
      state.total = calculateTotal(state.products);
    },

    increment: (state, action: PayloadAction<number>) => {
      const index = findIndex(state.products, action.payload);

      if (index !== -1 && state.products[index].amount < 10) {
        state.products[index].amount += 1;
        state.total = calculateTotal(state.products);
      }
    },

    decrement: (state, action: PayloadAction<number>) => {
      const index = findIndex(state.products, action.payload);

      if (index !== -1 && state.products[index].amount > 1) {
        state.products[index].amount -= 1;
        state.total = calculateTotal(state.products);
      }
    },

    removeProductById: (state, action: PayloadAction<number>) => {
      const index = findIndex(state.products, action.payload);

      if (index !== -1) {
        state.products.splice(index, 1);
        state.total = calculateTotal(state.products);
      }
    },
  },
});

const calculateTotal = (products: ExtendedProduct[]): number => {
  return products.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );
};

const findIndex = (products: ExtendedProduct[], id: number): number => {
  const index = products.findIndex((product) => product.id === id);
  return index;
};

export const { populateCart, increment, decrement, removeProductById } =
  ProductCartSlice.actions;
export default ProductCartSlice.reducer;
