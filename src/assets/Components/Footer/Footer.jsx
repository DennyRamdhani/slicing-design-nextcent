import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="w-full h-[328px] px-[165px] py-16 bg-gray-800 justify-start items-start gap-[125px] inline-flex">
    <div className="flex-col justify-start items-start gap-10 inline-flex">
        <div className="justify-start items-center gap-[9.89px] inline-flex">
            <div className="relative">
                <img src="src/assets/Icon/Logo1.svg" alt="ini logo" className='w-[191] h-[30px]'/>
            </div>
        </div>
        <div className="flex-col justify-start items-center gap-2 flex">
            <div className="w-[350px] text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Copyright © 2024 Denny Ramdhani.</div>
            <div className="w-[350px] text-slate-50 text-sm font-normal font-['Inter'] leading-tight">All rights reserved</div>
        </div>
        <div className="justify-start items-start gap-4 inline-flex">
            <div className="relative">
                <img src="src/assets/Icon/Social Icons.svg" alt="" className='w-8 h-8'/>
            </div>
            <div className="relative">
                <img src="src/assets/Icon/Social Icons1.svg" alt="" className='w-8 h-8'/>
            </div>
            <div className="relative">
                <img src="src/assets/Icon/Social Icons2.svg" alt="" className='w-8 h-8'/>
            </div>
            <div className="relative">
                <img src="src/assets/Icon/Social Icons3.svg" alt="" className='w-8 h-8'/>
            </div>
            
        </div>
    </div>
    <div className="justify-start items-start gap-[30px] flex">
        <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-40 text-white text-xl font-semibold font-['Inter'] leading-7">Company</div>
            <div className="flex-col justify-start items-start gap-3 flex">
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">About us</div>
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Blog</div>
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Contact us</div>
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Pricing</div>
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Testimonials</div>
            </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-40 text-white text-xl font-semibold font-['Inter'] leading-7">Support</div>
            <div className="flex-col justify-start items-start gap-3 flex">
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Help center</div>
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Terms of service</div>
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Legal</div>
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Privacy policy</div>
                <div className="w-40 text-slate-50 text-sm font-normal font-['Inter'] leading-tight">Status</div>
            </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-40 text-white text-xl font-semibold font-['Inter'] leading-7">Stay up to date</div>
            <div className="w-[255px] h-10 relative">
                <div className="w-[255px] h-10 left-0 top-0 absolute opacity-20 bg-white rounded-lg"></div>
                <div className="w-[18px] h-[18px] left-[225px] top-[11px] absolute">
                    <img src="src/assets/Icon/send.svg" alt=""/>
                </div>
                <div className="left-[12px] top-[9px] absolute text-gray-300 text-sm font-normal font-['Inter'] leading-tight">Your email address</div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Footer