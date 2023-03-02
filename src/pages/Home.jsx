import React from 'react'
import pizzaImg from '../image/pizza.jpg'

const Home = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center h-full sm:px-4 bg-orange-50'>
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:justify-center sm:items-center'>
        <div className='h-full w-full object-cover p-6 '>
          <img src={pizzaImg} alt="pizzaSlice" className='rounded-xl opacity-80' />
        </div>

        <div className='text-orange-500 px-6 sm:col-start-1 sm:row-start-1 h-full'>
          <h1 className='text-4xl font-bold sm:font-semibold sm:text-6xl font-sans'>Pizza Place</h1>
          <p className='font-bold sm:font-semibold mb-6 sm:py-14 text-orange-600 sm:text-lg'>Pizza makes me think that anything is possible</p>

          <button className='bg-orange-500 text-white py-2 px-4 rounded-xl hover:scale-105'>Eat now</button>
        </div>

      </div>
    </div>
  )
}

export default Home