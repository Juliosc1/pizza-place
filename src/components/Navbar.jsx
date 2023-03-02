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
    <div className='flex justify-between items-center py-6 px-10 z-50 border-b border-orange-500 bg-orange-50'>
      <div className='text-orange-500 flex justify-center items-center gap-2 text-xl font-semibold'>
        <h1 className=''>Pizza Place</h1>
        <FaPizzaSlice />
      </div>

      <div className='flex justify-center items-center sm:text-xl text-orange-500 gap-4'>
        <ul className='hidden md:flex justify-center items-center gap-4 font-semibold'>
          <li className='cursor-pointer hover:scale-105'>Home</li>
          <li className='cursor-pointer hover:scale-105'>Menu</li>
          <li className='cursor-pointer hover:scale-105'>Specials</li>
          <li className='cursor-pointer hover:scale-105'>Contatc Us</li>
        </ul>

        <div className='flex sm:hidden border-2 rounded-full border-orange-500 p-2'>
          <button onClick={handleClick}>
            {click ? <IoCloseSharp className='h-6 w-6' /> : <HiMenuAlt3 className='h-6 w-6' /> }
          </button>
        </div>
      </div>
    </div>
    
    {/* moblie */}
    { 
    <div className={click ? 
    'fixed right-0 top-20 w-full h-full justify-center items-center border bg-orange-400 rounded-xl duration-500 ease-in md:hidden z-10' 
    : "fixed -right-full top-20 h-full w-full duration-500 ease-out md:hidden z-10"}>
      <ul onClick={() => setClick(false)} className='flex flex-col justify-center items-center text-white p-12 text-xl font-semibold w-full cursor-pointer'>
        <li className='flex justify-center items-center py-4 border-b border-white w-full hover:scale-105'>Home</li>
        <li className='flex justify-center items-center py-8 border-b border-white w-full hover:scale-105'>Menu</li>
        <li className='flex justify-center items-center py-8 border-b border-white w-full hover:scale-105'>Special</li>
        <li className='flex justify-center items-center py-8 border-b border-white w-full hover:scale-105'>Contact Us</li>
      </ul>
    </div>
    }
    </>
  )
}

export default Navbar