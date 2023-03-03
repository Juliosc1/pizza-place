import React from 'react'
import { PizzaSpecial } from '../helpers/PizzaSpecial'

const Specials = () => {
  return (
    <div className='bg-orange-50 flex flex-1 justify-center items-center h-full'>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-full text-orange-800'>

        <div className='flex flex-col justify-center sm:justify-start items-center mt-4 sm:mt-44 px-8 gap-4'>
          <h1 className='text-4xl font-semibold italic sm:text-6xl sm:mb-10 text-orange-500'>Specials</h1>
          <p className=''>Life is too short for plain pizza. Try our Pizza of the Month and experience a slice of heaven</p>
          <p className='hidden sm:flex'>Looking for a quick and delicious meal? Look no further than a slice of pizza! With its perfect blend of crispy crust, tangy sauce, and gooey cheese, every bite is like a party in your mouth.</p>
          <button className='bg-orange-500 text-white p-2 rounded-lg hover:scale-105 my-8 shadow-lg'><a href='/menu'>See Our Menu</a></button>
        </div>
        
        <div className='flex'>
          {PizzaSpecial.map((pizza) => {
            return (
              <div className='flex flex-col items-center justify-center p-10'>
                <h2 className='text-xl font-semibold py-2'>{pizza.name}</h2>
                  <div className='flex gap-4 mb-10'>
                    <p>{pizza.desciption}</p>
                    <p>${pizza.price}</p>
                  </div>
                <div style={{backgroundImage: `url(${pizza.image})`,
                  backgroundSize: 'cover',}} className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] rounded-xl">
                </div>
              </div>
            )
          })}
        </div>
      
      </div>
    </div>
  )
}

export default Specials