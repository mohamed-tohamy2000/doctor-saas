import React from 'react'

export default function ConTainer({ children }) {
  return (
    <div className='flex items-center justify-center'>
      <div className=' container'>
        {children}
      </div>
    </div>
  )
}
