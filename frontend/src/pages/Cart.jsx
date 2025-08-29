import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextContext';

const Cart = () => {

  const { products, currency, cartItems } = useContext(ShopContext);

  return (
    <div>Cart</div>
  )

}

export default Cart