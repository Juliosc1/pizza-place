import React from 'react'
import PizzaItem from '../components/PizzaItem'
import { GourmetPizza } from '../helpers/PizzaList'

const Menu = () => {
  return (
    <div className='flex flex-1 justify-center border bg-orange-50 p-6'>
      <div className='gird grid-cols-1 sm:grid-cols-3'>
        <div className=''>
          <h1 className='text-5xl italic text-orange-500'>Menu</h1>
        </div>
        <div className='py-4'>
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
      </div>
    </div>
  )
}

export default Menu