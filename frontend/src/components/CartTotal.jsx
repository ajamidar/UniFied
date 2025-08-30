import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContextContext';
import Title from './Title';

const CartTotal = () => {

    const {currency, getCartAmount} = useContext(ShopContext);

    let pickupPoint = 'University hub';
    let platformFee = 2.00;

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTAL'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Platform Fee: &nbsp;</p>
                    <p>{currency}{platformFee}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Pickup point:</p>
                    <p>{pickupPoint}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency}{getCartAmount() === 0 ? '0.00' : `${getCartAmount() + platformFee}.00`}</b>
                </div>

            </div>

        </div>
    )
}

export default CartTotal