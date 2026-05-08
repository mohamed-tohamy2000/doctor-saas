import React from 'react'

export default function Steps({steps}) {
  return (
    <>
      {steps.map((step) => {
            const Icon = step.icon

            return (
              <div key={step.title} className='flex flex-col items-center text-center'>
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full shadow-sm ${
                    step.active ? 'bg-[#00776D] text-white' : 'bg-[#F8FBFA] text-[#00776D]'
                  }`}
                >
                  <Icon size={30} strokeWidth={2.4} />
                </div>
                <h2 className='mt-5 text-[20px] font-semibold text-[#171D1C]'>{step.title}</h2>
                <p className='mt-2 max-w-[300px] text-sm font-normal leading-6 text-[#3D4947]'>
                  {step.description}
                </p>
              </div>
            )
          })}
    </>
  )
}
