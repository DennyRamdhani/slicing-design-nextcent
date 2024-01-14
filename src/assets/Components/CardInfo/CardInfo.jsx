import React from 'react'

const CardInfo = (props) => {
  return (
    <>
        <div className='flex-col justify-center items-center mt-10 mb-4 w-[299px] h-[260px]'>
            <div className='flex justify-center'>
            <img src={props.MyImg} alt="Card Satu" className='w-[65px] h-14'/>
            </div>
            <div className='text-center'>
            <h1 className='text-[28px] font-semibold text-neutral-dark-grey mt-4 mb-2'>{props.title}</h1>
            <p className='text-neutral-grey text-sm mt-2'>{props.desc}</p>
        </div>
        </div>
    </>
  )
}

export default CardInfo