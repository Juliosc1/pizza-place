import React, { useState } from 'react'

const defaultInputValue = {
  name: "",
  email: "",
  description: ""
}

const Contact = () => {
  const [inputValue, setInputVaule] = useState(defaultInputValue);
  
  const {name, email, description} = inputValue

  const handleInputValue = (e) => {
    setInputVaule((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValue)
    setInputVaule(defaultInputValue)

    alert("Thank you for contacting us. We will return with an answer next year...")
  }

  return (
    <div className='flex flex-1 justify-center items-center bg-orange-50'>

      <div className='flex flex-col h-full text-orange-800 p-4 sm:gap-8 sm:items-center'>
        <div className='flex justify-center items-center py-8'>
          <h2 className='text-4xl font-semibold'>Contact Us</h2>
        </div>

        <div className='text-sm sm:text-base'>
          <p>We welcome any questions you may have, and we're always happy to help make a reservation for your next visit.</p>
          <p>Simply send us an email at, and one of our friendly staff members will get back to you as soon as possible.</p>
        </div>

        <div className='flex flex-col justify-center items-center py-4'>
          <p className='font-semibold'>Opening Hours</p>
          <p>Open Every Day!</p>
          <p>From 10 am to 9 pm</p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col justify-start items-start w-full sm:w-[70%]'>
          <div className='flex gap-12 p-4 w-full'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={handleInputValue} required className='border-b border-orange-800 outline-0 bg-orange-50 w-full'/>
          </div>
          <div className='flex gap-14 p-4 w-full'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={handleInputValue} required className='border-b border-orange-800 outline-0 bg-orange-50 w-full'/>
          </div>
          <div className='flex gap-4 p-4 w-full'>
            <label htmlFor="description">Description</label>
            <textarea rows={4} name="description" id='description' value={description} onChange={handleInputValue} required className='border border-orange-800 rounded-xl outline-0 bg-orange-50 w-full'></textarea>
          </div>
          <div className='flex justify-end w-full p-4'>
            <button type='submit' className='bg-orange-500 text-white py-2 px-4 rounded-lg shadow-lg hover:scale-105'>Send</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Contact