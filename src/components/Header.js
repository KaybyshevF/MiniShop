import React, { useState } from 'react'
import { AiFillShop } from "react-icons/ai";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'> Лучи Сапфиров </span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <AiFillShop onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`}/>
            {cartOpen && (
              <div className='shop-cart'></div>
            )}
              
        </div>
        <div className='presentation'></div>
    </header>
  )
}


