import React from 'react'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type ServiceThingType = {
  name: string;
  urlImg: string;
  things: { title: string, description: string }[];
  contactWord?: string;
  url: string;
}

const ServiceThing: React.FC<ServiceThingType> = ({ name, things, urlImg, contactWord, url }) => {
  return (
    <div className={cn(
      'min-h-[650px] max-w-6xl mx-auto my-auto flex flex-col justify-center gap-14 text-[#343434] px-5 md:py-0 py-14',
    )}>
      <div className='md:text-5xl text-3xl flex items-center justify-center gap-5 uppercase'>
        <img src={urlImg} alt="" className='md:w-[4rem] w-[2rem]' />
        {name}
      </div>
      <div className='flex justify-center sm:gap-5 gap-10 text-center sm:flex-row flex-col'>
        {things.map((thing) => (
          <div className='flex flex-col gap-5'>
            <p className='md:text-3xl text-2xl'>{thing.title}</p>
            <p className='font-light'>{thing.description}</p>
          </div>
        ))}
      </div>
      <Link href={url} target={url.includes('https') ? '_blank' : '_self'} className='mx-auto'>
        <Button className='w-fit px-4 py-5 rounded-full mx-auto bg-[#343434]'>
          <div className='w-6 h-6 rounded-full bg-white flex justify-center items-center'>
            <Phone className=' text-[#343434]' fill='#343434' />
          </div>
          {contactWord || 'Contact Us'}
        </Button>
      </Link>
    </div>
  )
}

export default ServiceThing
