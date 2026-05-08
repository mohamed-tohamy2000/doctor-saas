import React from 'react'
import { Star } from 'lucide-react'


export default function Carttow({doctors}) {
 
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6'>
      {doctors.map((doctor) => (
        <div
          key={doctor.name}
          className='overflow-hidden rounded-2xl border border-[#BCC9C6] bg-[#F8FBFA]'
        >
          <div className='relative h-[192px] overflow-hidden'>
            <img
              src={doctor.image}
              alt={doctor.name}
              className='h-full w-full object-cover'
            />
            <span className='absolute right-4 top-4 flex items-center gap-1 rounded bg-white px-2 py-1 text-xs font-medium text-[#171D1C]'>
              <Star size={12} className='fill-[#00685F] text-[#00685F]' />
              {doctor.rating}
            </span>
          </div>

          <div className='flex flex-col gap-3 p-4'>
            <div>
              <h2 className='text-[20px] font-semibold text-[#171D1C]'>{doctor.name}</h2>
              <p className='text-sm font-semibold text-[#00685F]'>{doctor.specialty}</p>
            </div>
            <p className='min-h-[44px] text-sm font-normal text-[#3D4947]'>
              {doctor.description}
            </p>
            <button className='w-full rounded border border-[#BCC9C6] bg-white px-4 py-2 text-sm font-semibold text-[#00685F]'>
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
