import { useDispatch } from 'react-redux'
import { clearCart } from '../control/cartSlice'
import { closeModal } from '../control/ModalSlice'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Alışveriş sepetinizdeki tüm ürünler silinsin mi?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='confirm-btn'
            onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }}
          >
            Onayla
          </button>
          <button
            type='button'
            className='clear-btn'
            onClick={() => {
              dispatch(closeModal())
            }}
          >
            iptal
          </button>
        </div>
      </div>
    </aside>
  )
}
export default Modal
