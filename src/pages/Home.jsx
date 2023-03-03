import React from 'react'
import pizzaImg from '../image/pizzaHome1.jpg'

const Home = () => {
  return (
    <div className='flex flex-1 flex-col sm:px-4 sm:py-4 bg-orange-50 text-orange-800'>
      <div className='grid grid-cols-1 sm:grid-cols-3'>
        <div className='flex justify-center items-center sm:col-span-2'>
          <img src={pizzaImg} alt="pizzaSlice" className='rounded-lg opacity-70 h-[80%]' />
        </div>

        <div className='flex flex-col justify-center px-6 sm:col-start-1 sm:row-start-1 gap-6'>
          <h1 className='text-4xl font-bold sm:font-bold sm:text-6xl italic text-orange-600'>Pizza Place</h1>
          <p className='font-bold sm:font-semibold mb-6 sm:py-14sm:text-lg'>Pizza makes me think that anything is possible!</p>
          <p className='text-sm'>Welcome to our pizzeria! We are thrilled to have you join us today for a delicious meal. Whether you're in the mood for a classic Margherita or a more adventurous pie with all the toppings, we've got you covered. </p>

          <div className='my-4'>
            <button className='bg-orange-500 text-white py-2 px-4 sm:px-6 rounded-xl hover:scale-105 shadow-xl'><a href='/menu'>Eat now</a></button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home