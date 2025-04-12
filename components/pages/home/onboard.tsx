import React from 'react'
import socials from "@/data/social.json"
import { SOCIALLIST } from '@/common/social';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const Onboard = () => {
  return (
    <div className=''>
      <div className='flex flex-col max-w-[700px] mx-auto gap-3'>
        <p className='font-light text-center text-xl text-[#343434]'>GENERAL CONTRACTOR - ARCHITECTURE & DESIGN</p>
        <h2 className='text-5xl font-semibold text-center text-[#343434]'>PT. Resalindo Prima Mandiri</h2>
        <p className='text-center text-[#8E8B82] font-light'>PT. RPM is a lalalal tralala trilili, With experiences and professional team,
        We offer services that operates in architecture and design, interior design, structure planner, construction, renovation, and more.</p>
        <div className="flex gap-2 justify-center items-center">
          {socials?.map((social) => {
            const findSocial = SOCIALLIST.find(
              (item) => item.key === social.key
            );

            return (
              <a
                href={social?.link}
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon={findSocial?.logo!} className="text-3xl" />
              </a>
            );
          })}
          
        </div>

        <Link href={'/contact-us'} className='mx-auto'>
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
