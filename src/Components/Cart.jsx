import '../Style/Panier.css'
import { useState } from 'react';

function Panier({cart, setCart}) {
    const [isOpen, setIsOpen] = useState(true)
    const Total = cart.reduce((acc, plant)=> acc + plant.amount * plant.price,0)
  return isOpen ? (
    <div className='panier'>
        <button onClick={()=> setIsOpen(false)}>fermer</button>
      <h3>Panier</h3>
      <ul>
        {cart.map(({name, price, amount},index)=> <li key={index}>
            🌿
            ({amount})
            {name}
            <br />
            Prix : {price} euro
        </li>)}
      </ul>
      <span>Total : {Total} euro</span>
      <button onClick={()=>setCart([])}>vider</button>
    </div>

  ) : (
    <button onClick={()=>setIsOpen(true)}>Ouvrir le Panier</button>
  )
}
export default Panier;
