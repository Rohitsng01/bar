import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import img1 from '../img/momos1.jpg';
import img2 from '../img/chicken.jpg';
import img3 from '../img/chicken26.avif';
import img4 from '../img/chickencurry.jpg';
import img5 from '../img/chickenkabab.jpg';
import img6 from '../img/burger.avif';
import img7 from '../img/burgerfried.jpg';
import img8 from '../img/chowmin.jpg';
import img9 from '../img/ChickenChowmein.jpg';
import img10 from '../img/eggchow.webp';
import img11 from '../img/egg.jpg';
import { useSelector } from 'react-redux';


const Cart = () => {

  const {CartItems} = useSelector(state => state.Cart)
  return (
    <div className='cart'>
      <main>
        {
          CartItems.length > 0 ? (
            CartItems.map(i=>(
              <CartItem
              imgsrc = {img1}
              name = {"Momos"}
               price = {150}
               qty = {1}
              id ={"uqwhduuh"} />
             
            ))
          ): <h1>No items Yet</h1>
            }
        
         </main>

     <aside>
      <h2>Subtotal : <img  src='assets/img/rup.svg'/>{2000}</h2>
      <h2>Shipping : <img  src='assets/img/rup.svg'/>{180}</h2>
      <h2>Tax : <img  src='assets/img/rup.svg'/>{20}</h2>
      <h2>Total : <img  src='assets/img/rup.svg'/>{12909}</h2>
     </aside>
    </div>
  )
};

const CartItem =({imgsrc,name, price,qty,decrement,increment,deletHandler,id}) => (
<div className='cartItem'>
  <div className='a1'> <img width="100" height="100" src={imgsrc} alt='Item'/> </div>
  <div>  <h3>{name}</h3> </div>
   <div> <p><img  src='assets/img/rup.svg'/>{price}</p> </div>
    
    <div>
    <button onClick={() => decrement(id)}>-</button>
    <p>{qty}</p>
    <button onClick={() => increment(id)}>+</button> </div>
    
   <div> <AiFillDelete onClick={() => deletHandler(id)}/></div>
</div>
)

export default Cart