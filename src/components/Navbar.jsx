import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <>
    <div className='flex justify-between items-center py-6 px-10'>
      <div className='text-orange-500 flex justify-center items-center gap-2 text-xl font-semibold'>
        <h1 className=''>Pizza Place</h1>
        <FaPizzaSlice />
      </div>

      <div className='flex justify-center items-center text-xl text-orange-500 gap-4'>
        <ul className='flex justify-center items-center gap-4 font-semibold'>
          <li>Home</li>
          <li>Menu</li>
          <li>Specials</li>
          <li>Contatc Us</li>
        </ul>

        <div className='flex border rounded-full border-orange-500 p-2'>
          <button onClick={handleClick}>
            {click ? <IoCloseSharp /> : <HiMenuAlt3 /> }
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar