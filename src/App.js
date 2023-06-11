import './App.css'
import Modal from './components/Modal'
import Navbar from './components/Navbar'
import ShoppingList from './components/ShoppingList'
import { calculateTotal } from './control/cartSlice'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  return (
    <div className='App'>
      {isOpen && <Modal />}
      <Navbar />
      <ShoppingList />
    </div>
  )
}

export default App
