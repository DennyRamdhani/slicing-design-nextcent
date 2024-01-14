import React from 'react'
import Button from '../Button/Button'

const HeroSection = (props) => {
  return (
    <>
        <div className={`flex ${props.direction} mx-[144px] items-center py-11`}>
           <div className='w-3/4'>
            <h1 className={`${props.VariantTitle}`}>
            {props.children}
            </h1>
            <p className={`${props.VariantContent}`}>{props.MyContent}</p>
            <Button variant="bg-primary py-4 px-12 text-neutral-white" textColor="">{props.TextButton}</Button>
           </div> 
           <div className='w-1/2'>
            <img src={props.MyImg} alt="this is illustration" className='w-[391px] h-[407px]'/>
           </div> 
        </div>
    </>
  )
}

export default HeroSection