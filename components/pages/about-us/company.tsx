import React from 'react'
import { Button } from '@/components/ui/button'

const Company = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 pb-10 flex flex-col gap-10'>
      <div className='flex md:gap-16 gap-10 justify-center items-center sm:flex-row flex-col'>
        {/* <img src="https://static.wixstatic.com/media/11062b_cdd6cc16a4774c939d5e87d02e43403ef000.jpg/v1/fill/w_490,h_721,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_cdd6cc16a4774c939d5e87d02e43403ef000.jpg" alt="" className='w-[40%]' /> */}
        <div className=''>
          <video id="comp-kyllwk9e_video"className="h-[30rem] w-[25rem] object-cover object-center" crossOrigin="anonymous" playsInline preload="auto" loop muted autoPlay src="/assets/company-rpm.mp4"></video>

        </div>

        <div className='sm:w-[60%] w-full flex flex-col gap-4'>
          <h2 className='text-4xl font-semibold'>PT. Resalindo Prima Mandiri</h2>
          <p>RPM is a general contractor company that operates in architecture and design, construction services, interior design, structure planner, real estate, and warehouse. We offer our services for private to public companies in all types of business that related to construction services, whether renovation or new building services.</p>
          <p>RPM builds good reputation in construction services, with the aim of creating as well as offering solutions for our clients. We are looking forward to and provide services in the present until years to come, as an attempt to participate in advancing the development in Indonesia.</p>
        </div>
      </div>
      <Button className='w-fit px-5 rounded-xl mx-auto'>
        Contact Us
      </Button>
    </div>
  )
}

export default Company