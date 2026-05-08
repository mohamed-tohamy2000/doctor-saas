import React from 'react'
import Carte from './Carte'
import icon from "../../../assets/Icon5.svg"
import icon2 from "../../../assets/Container.svg"
import icon3 from "../../../assets/Icon-1.svg"
import icon4 from "../../../assets/Icon-2.svg"
export default function Section() {
     const carteData = [
        {icon : icon , h1 : "Cardiology" , p: "Expert care for heart health,hypertension, and cardiovascular diseases."  },
        {icon : icon2 , h1 : "Pediatrics" , p: "Comprehensive medical care for infants, children, and adolescents."  },
        {icon : icon3 , h1 : "Neurology" , p: "Diagnosis and treatment of nervous system and brain disorders."  },
        {icon : icon4 , h1 : "Orthopedics" , p: "Specialized care for bones, joints,ligaments, tendons, and muscles."  },
      ]
  return (
    <div className=' bg-[#F0F5F2] py-8 border border-[#BCC9C6] '>
      <div className='text-center'>
        <h1 className='text-3xl text-[#171D1C] font-semibold'>Comprehensive Specialties</h1>
        <p className='text-[#3D4947] font-normal'>Access a wide range of specialized medical care designed for your specific health
            needs.</p>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-6'>
                <Carte cart={carteData}/>
            </div>
      </div>
    </div>
  )
}
