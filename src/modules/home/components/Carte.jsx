import React from 'react'

export default function Carte({cart}) {
  return (
      <>
        {cart.map((el,index) => (
            <div   key={index} className='p-8 bg-[#fdfdfd] flex flex-col items-start rounded-2xl border border-[#BCC9C6] gap-4'>
            <div className='p-3 bg-[#E4E9E7]'>
                <img src={el.icon} alt="" />
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <h1 className='text-[#171D1C] font-semibold text-[20px]'>
                    {el.h1}
                </h1>
                <p className=' text-[#3D4947] font-normal text-[14px] text-start'>
                    {el.p}
                </p>
            </div>
        </div>
        ))}
</>
  )
}
