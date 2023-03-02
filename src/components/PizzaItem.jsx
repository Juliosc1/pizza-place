import React from 'react'

const PizzaItem = ({name, description, price}) => {
  return (
    <div className='flex text-orange-800 gap-8 mt-6'>
      <div className='flex flex-col'>
        <h2 className='text-lg'>{name}</h2>
        <p className='text-xs'>{description}</p>
      </div>
      <p>${price}</p>
    </div>
  )
}

export default PizzaItem