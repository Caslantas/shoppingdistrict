import { createSlice } from '@reduxjs/toolkit'
import shoppingItems from '../shoppingItems'

const initialState = {
  cartItems: shoppingItems,
  quantity: 6,
  total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const ıtemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== ıtemId)
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      )
      cartItem.quantity += 1
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      )
      if (cartItem.quantity > 0) {
        cartItem.quantity -= 1
      }
    },
    calculateTotal: (state) => {
      let total = 0
      let quantity = 0
      state.cartItems.forEach((item) => {
        total += item.quantity * item.price
        quantity += item.quantity
      })
      state.quantity = quantity
      state.total = total
    },
  },
})
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions

export default cartSlice.reducer
