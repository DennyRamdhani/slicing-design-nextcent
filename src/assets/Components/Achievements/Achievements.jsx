import React from 'react'

const Achievements = () => {
  return (
    <>
    <div className="w-full h-72 px-36 my-12 bg-slate-50 justify-between items-center inline-flex">
    <div className="w-[540px] flex-col justify-start items-start gap-2 inline-flex">
        <div className="flex-col justify-start items-start gap-2 flex">
            <div className="w-[408px]"><span className="text-neutral-600 text-4xl font-semibold font-['Inter'] leading-[44px]">Helping a local </span><span className="text-green-500 text-4xl font-semibold font-['Inter'] leading-[44px]">business reinvent itself</span></div>
        </div>
        <div className="self-stretch text-zinc-900 text-base font-normal font-['Inter'] leading-normal">We reached here with our hard work and dedication</div>
    </div>
    <div className="flex-col justify-start items-center gap-10 inline-flex">
        <div className="justify-start items-center gap-[30px] inline-flex">
            <div className="justify-start items-center gap-4 flex">
                <div className="relative">
                  <img src="src/assets/Icon/Ac4.svg" alt="gambar 1" className='w-10 h-10'/>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="w-[191px] text-neutral-600 text-[28px] font-bold font-['Inter'] leading-9">2,245,341</div>
                    <div className="w-[191px] text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Members</div>
                </div>
            </div>
            <div className="justify-start items-center gap-4 flex">
                <div className="relative">
                    {/* <div className="w-[32.37px] h-[30px] left-[7.97px] top-[9px] absolute"> */}
                      <img src="src/assets/Icon/Ac4.svg" alt="" className='w-12 h-12'/>
                    {/* </div> */}
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="w-[191px] text-neutral-600 text-[28px] font-bold font-['Inter'] leading-9">46,328</div>
                    <div className="w-[191px] text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Clubs</div>
                </div>
            </div>
        </div>
        <div className="justify-start items-center gap-[30px] inline-flex">
            <div className="justify-start items-center gap-4 flex">
                <div className="w-12 h-12 relative">
                  <img src="src/assets/Icon/Ac4.svg" alt="" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="w-[191px] text-neutral-600 text-[28px] font-bold font-['Inter'] leading-9">828,867</div>
                    <div className="w-[191px] text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Event Bookings</div>
                </div>
            </div>
            <div className="justify-start items-center gap-4 flex">
                <div className="w-12 h-12 relative">
                  <img src="src/assets/Icon/Ac4.svg" alt="" />
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="w-[191px] text-neutral-600 text-[28px] font-bold font-['Inter'] leading-9">1,926,436</div>
                    <div className="w-[191px] text-neutral-500 text-base font-normal font-['Inter'] leading-normal">Payments</div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Achievements