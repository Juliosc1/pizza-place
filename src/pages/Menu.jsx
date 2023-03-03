import React from 'react'
import PizzaItem from '../components/PizzaItem'
import { SliceItem } from '../components/SliceItem'
import { GourmetPizza, PizzaSlice } from '../helpers/PizzaList'
import pizzaImgMenu from '../image/pizza2.jpg'

const Menu = () => {
  return (
    <div className='flex flex-1 justify-center bg-orange-50 p-6'>

      <div className='grid grid-cols-1 sm:grid-cols-3'>

        <div className='sm:col-span-3 flex justify-center sm:mb-4'>
          <h1 className='text-5xl italic text-orange-500'>Menu</h1>
        </div>

        <div className='hidden sm:flex w-[90%] opacity-80'>
          <img src={pizzaImgMenu} alt="pizzaMenu" className='rounded-xl' />
        </div>

        <div className='sm:col-start-2 py-4'>
          <h1 className='text-2xl text-orange-800'>Gourmet Pizza</h1>
          {GourmetPizza.map((pizza, key) => {
            return (
              <div key={key}>
                <PizzaItem 
                  name={pizza.name}
                  description={pizza.description}
                  price={pizza.price}
                />
              </div>
            )
          })}
        </div>

        <div className='sm:col-start-3 py-4'>
          <h1 className='text-2xl text-orange-800'>Pizza Slice</h1>
          {PizzaSlice.map((pizzaSlice, key) => {
            return (
              <div key={key}>
                <SliceItem 
                  name={pizzaSlice.name}
                  description={pizzaSlice.description}
                  price={pizzaSlice.price}
                />
              </div>
            )
          })}

          <button className='bg-orange-500 text-white p-2 rounded-lg hover:scale-105 my-8 shadow-xl'>Explore More</button>
        </div>

      </div>

    </div>
  )
}

export default Menu