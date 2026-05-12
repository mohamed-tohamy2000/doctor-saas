import { ArrowRight } from 'lucide-react'
import Carttow from './Carttow'
import doctor from '../../../assets/doctor.png'
import doctor1 from '../../../assets/doctor1.png'
import doctor2 from '../../../assets/doctor2.png'

export default function Sectiontow() {
     const doctors = [
    {
      image: doctor1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      rating: '4.9',
      description: 'Specializing in preventative cardiology and advanced heart failure management.',
    },
    {
      image: doctor,
      name: 'Dr. Michael Chen',
      specialty: 'Pediatrics',
      rating: '4.8',
      description: 'Dedicated to comprehensive childhood development and acute illness treatment.',
    },
    {
      image: doctor2,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Neurology',
      rating: '5.0',
      description: 'Focusing on complex neurological disorders and cutting-edge therapeutic interventions.',
    },
  ]

  return (
    <section className=' py-8  '>
      <div className='flex items-center justify-between'>
        <span>
           <h1 className='text-[#171D1C] font-semibold text-3xl'>Featured Practitioners</h1>
           <p className='text-[#3D4947] font-normal tex-[16px]'>Book consultations with our highly rated specialists.</p>
        </span>
        <h1 className='text-[#00685F] font-semibold text-[14px] flex'>View All Doctors <ArrowRight /></h1>
      </div>
      <Carttow doctors={doctors}/>
    </section>
  )
}
