import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/reducer'

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





import toast from 'react-hot-toast';


function Menu() {
    const dispatch = useDispatch()

    const ProductList = [
        {
            name: "MOMOS",
            price: 50,
            imgsrc: img1,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "101"
        },
        {
            name: "BURGER",
            price: 110,
            imgsrc: img6,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "102"
        },
        {
            name: "BURGER WITH FRIED CHIPS",
            price: 150,
            imgsrc: img7,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "103"
        },
        {
            name: "CHOWMIN",
            price: 80,
            imgsrc: img8,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "104"
        },
        {
            name: "EGG CHOWMIN",
            price: 95,
            imgsrc: img10,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "105"
        },
        {
            name: "CHICKEN CHOWMIN",
            price: 150,
            imgsrc: img9,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "106"
        },
        {
            name: "EGG CURRY",
            price: 100,
            imgsrc: img11,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "107"
        },
        {
            name: "CHICKEN TIKKA",
            price: 120,
            imgsrc: img2,
            title: "Basically Tikka serves delicious food with big portions and is great value of money. They have a salad bar",
            id: "108"
        },
        {
            name: "CHICKEN 26",
            price: 250,
            imgsrc: img3,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "109"
        },
        {
            name: "CHICKEN CURRY",
            price: 190,
            imgsrc: img4,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "110"
        },
        {
            name: "CHICKEN KABAB",
            price: 270,
            imgsrc: img5,
            title: "We are serving best momos, it really taste very nice, you can have both veg and non veg momos here.",
            id: "111"
        },
    ];
    const addToCartHandler = (options) => {
        dispatch(addToCart(options))
        toast.success("Added To Cart")
    }
    return (
        <div className='m1'>
            {ProductList.map( (i) => (
            <ProductCard
                key={i.id}
                imgsrc = {i.imgsrc}
                name={i.name}
                title= {i.title}
                price={i.price}
                id={i.id}
                handler={addToCartHandler}
            />
            ))
            }


        </div>
    )
}
const ProductCard = ({name, id, price, handler,title, imgsrc}) => (
    <div className='productCard'>
        <div>
        <img width="100" height="100" src={imgsrc} alt={name} /> </div>
        <div>
        <p>{name}</p>
        <p>{title}</p> </div>
        <div>
        <h4>₹{price}</h4> </div>
        <div className='nm'>
        <button onClick={() => handler({ price, name, id, quantity: 1, imgsrc })} >Add To Cart</button>
        </div>
        

    </div>
);

export default Menu