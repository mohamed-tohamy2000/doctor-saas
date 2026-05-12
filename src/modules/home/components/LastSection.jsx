import { CalendarDays, Search, UserCheck } from 'lucide-react'
import Steps from './Steps'

export default function LastSection() {
  const steps = [
    {
      icon: Search,
      title: '1. Search',
      description: 'Find specialists based on your symptoms, location, or preferred availability.',
      active: false,
    },
    {
      icon: UserCheck,
      title: '2. Choose',
      description: 'Review doctor profiles, verified patient ratings, and specific clinical expertise.',
      active: false,
    },
    {
      icon: CalendarDays,
      title: '3. Book',
      description: 'Select an open slot and confirm your appointment instantly. No phone calls required.',
      active: true,
    },
  ]

  return (
    <section className='bg-[#E4E9E7] py-14'>
      <div className='mx-auto max-w-5xl px-4 text-center'>
        <h1 className='text-3xl font-semibold text-[#171D1C]'>How It Works</h1>
        <p className='mx-auto mt-3 max-w-2xl text-[16px] font-normal text-[#3D4947]'>
          A streamlined process designed to get you the care you need with minimal operational friction.
        </p>

        <div className='mt-14 grid grid-cols-1 gap-10 md:grid-cols-3'>
          <Steps steps={steps}/>
        </div>
      </div>
    </section>
  )
}
