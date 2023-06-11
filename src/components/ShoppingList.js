import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ShoppingItem from './ShoppingItem'
import { clearCart } from '../control/cartSlice'
import { openModal } from '../control/ModalSlice'

function ShoppingList() {
  const dispatch = useDispatch()
  const { cartItems, quantity, total } = useSelector((store) => store.cart)
  return (
    <>
      {quantity < 1 ? (
        <section className='cart'>
          <header>
            <h2>Sepetim</h2>
            <h4>Sepette Ürün Kalmadı😒 </h4>
          </header>
        </section>
      ) : (
        <section className='cart'>
          <header>
            <h2>Sepetim</h2>
          </header>
          <div className='container'>
            {cartItems.map((item) => {
              return <ShoppingItem key={item.id} {...item} />
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar: <span>{total} TL </span>{' '}
              </h4>
            </div>
            <button
              onClick={() => dispatch(openModal())}
              className='cartClearBtn'
            >
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  )
}
export default ShoppingList
