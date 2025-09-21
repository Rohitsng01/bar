import React from 'react'
import {AiFillDelete, AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, deleteItem, clearCart } from '../redux/reducer'


const Cart = () => {

  const dispatch = useDispatch();
  const { CartItems, subtotal, shipping, tax, total } = useSelector(state => state.Cart);

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  React.useEffect(() => {
    // Only recalculate tax (1-20) when CartItems changes
    const newTax = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    dispatch({ type: 'Cart/updateShippingTax', payload: { shipping, tax: newTax } });
  }, [CartItems, dispatch, shipping]);

  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <h1>Shopping Cart</h1>
        {CartItems.length > 0 && (
          <button className='clear-cart-btn' onClick={handleClearCart}>
            Clear Cart
          </button>
        )}
      </div>

      <div className='cart-content'>
        <main className='cart-items'>
          {
            CartItems.length > 0 ? (
              CartItems.map((item) => (
                <CartItem
                  key={item.id}
                  imgsrc={item.imgsrc}
                  name={item.name}
                  price={item.price}
                  qty={item.qty}
                  id={item.id}
                  increment={handleIncrement}
                  decrement={handleDecrement}
                  deletHandler={handleDelete}
                />
              ))
            ) : (
              <div className='empty-cart'>
                <div className='empty-cart-icon'>🛒</div>
                <h2>Your cart is empty</h2>
                <p>Add some delicious items from our menu!</p>
                <a href='/menu' className='shop-now-btn'>Shop Now</a>
              </div>
            )
          }
        </main>

        {CartItems.length > 0 && (
          <aside className='cart-summary'>
            <h3>Order Summary</h3>
            <div className='summary-item'>
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className='summary-item'>
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className='summary-item'>
              <span>Tax</span>
              <span>₹{tax}</span>
            </div>
            <div className='summary-item total'>
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button className='checkout-btn'>Proceed to Checkout</button>
          </aside>
        )}
      </div>
    </div>
  )
};

const CartItem = ({imgsrc, name, price, qty, decrement, increment, deletHandler, id}) => (
  <div className='cart-item'>
    <div className='item-image'> 
      <img src={imgsrc} alt={name}/> 
    </div>
    
    <div className='item-details'>  
      <h3 className='item-name'>{name}</h3>
      <p className='item-price'>₹{price}</p>
    </div>
    
    <div className='quantity-controls'>
      <button 
        className='qty-btn' 
        onClick={() => decrement(id)}
        disabled={qty <= 1}
      >
        <AiOutlineMinus />
      </button>
      <span className='quantity'>{qty}</span>
      <button 
        className='qty-btn' 
        onClick={() => increment(id)}
      >
        <AiOutlinePlus />
      </button> 
    </div>
    
    <div className='item-total'>
      <span>₹{price * qty}</span>
    </div>
    
    <div className='item-actions'> 
      <button 
        className='delete-btn' 
        onClick={() => deletHandler(id)}
        title="Remove item"
      >
        <AiFillDelete />
      </button> 
    </div>
  </div>
)

export default Cart