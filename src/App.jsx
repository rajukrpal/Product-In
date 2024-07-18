import React, { useState } from 'react'
import { Product } from './data'

const App = () => {
  console.log("prodo",Product)

  const [cart,setCart]= useState([])

 

  const handleCart = (prod) => {
    if (cart.includes(prod)) {
      console.log("chack",cart)
      setCart(cart.filter(item => item.id !== prod.id))
    } else {
      console.log("update",cart)
      setCart([...cart, prod])
    }
  }
  return (
    <div className='p-2'>
      <h3>Cart {cart.length}</h3>
      <div className='grid grid-cols-12 border gap-6'>
        {
          Product.map((prod)=>(
            <div key={prod.id} className='col-span-3 border '>
            <div>
            <center>{prod.title}</center>
            </div>
            <div>
            <img src={prod.image} alt="" />
            </div>
            <div>
              <p>{prod.detail}</p>
              <span>$ {prod.price}</span>
              <div>
              <button onClick={()=>handleCart(prod)} className='bg-blue-400'>{cart.includes(prod) ? "Remove" : "Add"}</button>
              </div>
            </div>
  
          </div>
          ))
        }
       

      </div>
    
    </div>
  )
}

export default App

