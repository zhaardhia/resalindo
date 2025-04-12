import React from 'react'
import LayoutPage from '@/components/layout'
import ChooseServices from '@/components/pages/contact-us/choose-service'

const ContactUs = () => {
  return (
    <LayoutPage defaultTopHeight={true}>
      <div className='min-h-[85vh] mx-auto text-center bg-[url("/rpm/bg-section.png")] bg-cover bg-center flex flex-col md:gap-20 gap-10 items-center bg-white pb-20'>
        <div className='max-w-6xl mx-auto flex flex-col px-5'>
          <p className='md:text-5xl text-3xl'>Consult with us Before You Commit</p>
        </div>
        <div className='max-w-6xl w-full'>
          <ChooseServices />
        </div>

      </div>
    </LayoutPage>
  )
}

export default ContactUs