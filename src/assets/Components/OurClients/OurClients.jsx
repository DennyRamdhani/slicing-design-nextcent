import React from 'react'

const OurClients = () => {
  return (
    <>
        <div className='flex-col mt-10 mb-16 w-full mx-auto'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold text-neutral-dark-grey'>Our Clients</h1>
                <p className='text-neutral-grey text-xl mt-2 mb-12'>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='flex justify-between mx-[144px]'>
                <img src="src/assets/Icon/ClientZero.svg" alt="Ini Gambar Client 0" className='w-12 h-12'/>
                <img src="src/assets/Icon/ClientSatu.svg" alt="Ini Gambar Client 1" className='w-12 h-12'/>
                <img src="src/assets/Icon/ClientDua.svg" alt="Ini Gambar Client 2" className='w-12 h-12'/>
                <img src="src/assets/Icon/ClientTiga.svg" alt="Ini Gambar Client 3" className='w-12 h-12'/>
                <img src="src/assets/Icon/ClientEmpat.svg" alt="Ini Gambar Client 4" className='w-12 h-12'/>
                <img src="src/assets/Icon/ClientLima.svg" alt="Ini Gambar Client 5" className='w-12 h-12'/>
                <img src="src/assets/Icon/ClientEnam.svg" alt="Ini Gambar Client 6" className='w-12 h-12'/>
            </div>
        </div>
    </>
  )
}

export default OurClients