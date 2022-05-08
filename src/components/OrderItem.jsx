import React, {useContext} from 'react';
import AppContext from '../context/AppContext'
import '../styles/OrderItem.scss';
import icon_close from '@icons/icon_close.png'

const OrderItem = ({product}) => {
  const {removeFromCart} = useContext(AppContext);

  const handleRemove = (item) => {
    removeFromCart(item)
  }
  return (
    <div className="OrderItem">
    <figure>
      <img src={product.images} alt={product.title} />
    </figure>
    <p>{product.title}</p>
    <p>${product.price}</p>
    <img src={icon_close} onClick={() => handleRemove(product)} alt="close" />
  </div>
  )
}

export default OrderItem;