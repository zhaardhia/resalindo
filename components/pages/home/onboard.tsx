import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Socials from '@/components/socials';

const Onboard = () => {
  return (
    <div className=''>
      <div className='flex flex-col max-w-[700px] mx-auto gap-5'>
        <p className='font-light text-center text-xl text-[#343434]'>GENERAL CONTRACTOR - ARCHITECTURE & DESIGN</p>
        <h2 className='text-5xl font-semibold text-center text-[#343434]'>PT. Resalindo Prima Mandiri</h2>
        <p className='text-center text-[#8E8B82] font-light'>PT. RPM is a lalalal tralala trilili, With experiences and professional team,
        We offer services that operates in architecture and design, interior design, structure planner, construction, renovation, and more.</p>

        <Socials />
      </div>
      <div className='w-full flex justify-center mt-20 items-center'>
        <Link href={'/contact-us'} className='ml-2'>
          <Button className='w-fit px-4 py-5 rounded-full mx-auto bg-[#343434]'>
            <div className='w-6 h-6 rounded-full bg-white flex justify-center items-center'>
              <Phone className=' text-[#343434]' fill='#343434' />
            </div>
            Contact Us
          </Button>
        </Link>
      </div>
      <div className='w-[80%] max-w-6xl h-auto mx-auto p-8 pb-0 shadow-lg'
        style={{
          background: 'linear-gradient(to bottom, white 40%, #e0e0e0 50%, #c0c0c0 100%)'
        }}
      >
        <img src="/rpm/banner-rpm.png" alt="" className='w-full mx-auto object-cover my-10' />
      </div>
    </div>
  )
}

export default Onboard
