import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './control/cartSlice'
import ModalSlice from './control/ModalSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    modal: ModalSlice,
  },
})
