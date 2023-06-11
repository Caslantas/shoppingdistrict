import React from 'react'
import { BsFillBasketFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'

function Navbar() {
  const { quantity } = useSelector((store) => store.cart)
  return (
    <nav>
      <div className='navbar'>
        <h3>Sebze Reyonu</h3>
        <div className='navDiv'>
          <div className='items-div'>
            <p>{quantity}</p>
          </div>
          <BsFillBasketFill className='items-icon' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
