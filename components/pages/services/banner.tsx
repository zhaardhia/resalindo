import React from 'react'

const Banner = () => {
  return (
    <div className='w-full min-h-screen object-cover h-auto mx-auto p-8 flex justify-center items-center flex-col gap-12 bg-[url("/assets/services-rpm.png")] bg-cover bg-center'>
      <div className='flex flex-col gap-8 text-center max-w-2xl mt-10'>
        <p className='text-5xl'>Our Services</p>
        <p className='font-light'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
      </div>
      <div className="flex flex-wrap justify-center text-[#343434] sm:text-xl text-md mb-4">
        <div className="sm:px-10 px-5 py-2">Design</div>
        <div className="sm:px-10 px-5 py-2 border-l border-[#343434]">Maintenance</div>
        <div className="sm:px-10 px-5 py-2 border-l border-[#343434]">Build</div>
      </div>
    </div>
  )
}

export default Banner;
