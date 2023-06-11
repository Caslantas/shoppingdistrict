import React from 'react'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../control/cartSlice'

function ShoppingItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <img src={img} alt='' />
        <div className='containerItem'>
          <h4>{title}</h4>
          <h4> 1 Kg:{price} TL</h4>
          <div>
            <button onClick={() => dispatch(increase(id))}>
              <FiChevronUp />
            </button>
            <span>{quantity} </span>
            <button onClick={() => dispatch(decrease(id))}>
              <FiChevronDown />
            </button>
          </div>
          <button onClick={() => dispatch(removeItem(id))} className='btn'>
            Sil
          </button>
        </div>
      </div>
    </div>
  )
}
export default ShoppingItem
