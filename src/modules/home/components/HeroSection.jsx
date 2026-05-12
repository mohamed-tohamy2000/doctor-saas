import img from "../../../assets/4eadf427706cb617bdf1280e0d212fd7f25800d5.png"
import icomn from "../../../assets/Icon.svg"
import { ArrowRight } from 'lucide-react'
export default function HeroSection() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-3.5 mt-5 p-5'>
      <div className=' flex flex-col items-start justify-center '>
        <div className='bg-[#E4E9E7] w-fit p-2 rounded-4xl mb-6 flex gap-2'>
         <img src={icomn} alt="" />
         <h1 className='text-[#3D4947] font-medium'>Trusted by 10,000+ Patients</h1>
        </div>
        <span className='text-[36px] font-bold mb-5'>
          Clinical Excellence Meets
          <h1 className='text-[#00685F]'>Operational Efficiency <span className='text-[#171D1C]'>.</span></h1>
        </span>
        <p className='text-[#3D4947] font-normal mb-8'>Experience modern healthcare scheduling. Book specialized
          appointments, manage your medical records, and connect with top-
          tier practitioners seamlessly.</p>
          <div className='flex items-center gap-4'>
            <button className=' py-5 px-8 bg-[#00685F] text-[#FFFFFF] font-normal flex items-center gap-2 rounded-lg'>
              Book Appointment
              <ArrowRight />
            </button>
            <button className=' py-5 px-8 bg-[##F5FAF8] text-[##00685F] font-normal flex items-center gap-2 rounded-lg border border-[#BCC9C6]'>
              Learn More
            </button>
          </div>
      </div>
      <div className=' flex  '>
        <img src={img} alt="" className='w-full rounded-2xl'/>
      </div>
    </section>
  )
}
