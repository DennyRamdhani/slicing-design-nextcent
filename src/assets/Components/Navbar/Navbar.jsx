import React from 'react'
import Button from '../Button/Button'

function Navbar() {
  return (
    <>
        <div className='flex justify-between items-center w-full h-[84px] px-[120px]'>
          <div>
            <img src="/src/assets/Icon/Logo.svg" alt="Ini Logo" className='w-[200px]'/>
          </div>
          <div className='flex gap-[50px]'>
            <a href="#" className='text-primary font-medium'>Home</a>
            <a href="#" className='hover:text-primary'>Service</a>
            <a href="#" className='hover:text-primary'>Feature</a>
            <a href="#" className='hover:text-primary'>Product</a>
            <a href="#" className='hover:text-primary'>Testimonial</a>
            <a href="#" className='hover:text-primary'>FAQ</a>
          </div>        
          <div className='flex gap-[10px]'>
          <Button variant="bg-neutral-white  py-4 px-8 border border-primary hover:bg-primary hover:text-neutral-white" textColor="text-primary">Login</Button>
          <Button variant="bg-primary  py-4 px-8" textColor="text-neutral-white">Sign Up</Button>
          </div>            
        </div>
    </>
  )
}

export default Navbar