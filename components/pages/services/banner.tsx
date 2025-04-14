import React from 'react'
import FadeBox from '@/components/fade-box';

const Banner = () => {
  return (
    <div className='w-full min-h-screen object-cover h-auto mx-auto p-8 flex justify-center items-center flex-col gap-12 bg-[url("/assets/services-rpm.png")] bg-cover bg-center'>
      <div className='flex flex-col gap-8 text-center max-w-2xl mt-10'>
        <p className='text-5xl'>Our Services</p>
        <p className='font-light'>We offer a comprehensive range of services to bring your vision to life. From innovative designs to reliable maintenance and expert construction, our team is dedicated to delivering excellence at every step. Explore how we can help you create, maintain, and build your dream space.</p>
      </div>
      <div className="flex flex-wrap justify-center text-[#343434] sm:text-xl text-md mb-4">
        <FadeBox delay='100ms' className="sm:px-10 px-5 py-2">Design</FadeBox>
        <FadeBox delay='150ms' className="sm:px-10 px-5 py-2 border-l border-[#343434]">Maintenance</FadeBox>
        <FadeBox delay='200ms' className="sm:px-10 px-5 py-2 border-l border-[#343434]">Build</FadeBox>
      </div>
    </div>
  )
}

export default Banner;
