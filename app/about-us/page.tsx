import React from 'react'
import LayoutPage from '@/components/layout'
import Company from '@/components/pages/about-us/company'
import Step from '@/components/pages/about-us/step'
import CompanyValue from '@/components/pages/about-us/value'

const AboutUs = () => {
  return (
    <LayoutPage>
      <Company />
      <CompanyValue />
      <Step />
    </LayoutPage>
  )
}

export default AboutUs