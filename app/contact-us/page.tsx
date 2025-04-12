import React from 'react'
import LayoutPage from '@/components/layout'
import ChooseServices from '@/components/pages/contact-us/choose-service'
import Socials from '@/components/socials'

const ContactUs = () => {
  return (
    <LayoutPage defaultTopHeight={false}>
      <div className='min-h-[100vh] mx-auto text-center bg-[url("/rpm/bg-section.png")] bg-cover bg-center flex flex-col md:gap-20 gap-10 items-center bg-white pb-20 pt-36'>
        <div className='max-w-4xl mx-auto flex flex-col px-5 gap-8'>
          <p className='md:text-5xl text-3xl md:!leading-[55px]'>Consult with us<br/> Before You Commit</p>
          <Socials />
        </div>
        <div className='max-w-6xl w-full'>
          <ChooseServices />
        </div>

      </div>
    </LayoutPage>
  )
}

export default ContactUs