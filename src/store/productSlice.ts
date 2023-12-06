import { createSlice } from '@reduxjs/toolkit'
import { ProductType } from '../utils/Types'
import products from '../data/products'

// Define a type for the slice state
export interface ProductSliceState {
  products: ProductType[]
  selectedProduct: ProductType | null | undefined
}

// Define the initial state using that type
const initialState: ProductSliceState = {
  products: products,
  selectedProduct: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload
      state.selectedProduct = state.products.find((p) => p.id === productId)
    },
  },
})
