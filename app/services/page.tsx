import React from 'react'
import LayoutPage from '@/components/layout'
import Banner from '@/components/pages/services/banner'
import ServiceThing from '@/components/pages/services/service-thing'

const services = [
  {
    name: "Design",
    urlImg: "/assets/design-icon.png",
    things: [
      {
        title: "Architectural Design",
        description: "We craft innovative and functional architectural designs that reflect your vision while optimizing space, aesthetics, and sustainability. Our designs are tailored to meet your unique needs and ensure long-lasting value."
      },
      {
        title: "Interior Design",
        description: "Transform your spaces with our creative interior design solutions. We focus on blending style and functionality to create environments that are both visually stunning and perfectly suited to your lifestyle."
      },
      {
        title: "Structure Planner",
        description: "Our structure planning services ensure the stability and efficiency of your project. From initial concepts to detailed plans, we prioritize safety, durability, and precision in every aspect of the design."
      },
    ],
    url: '/contact-us'
  },
  {
    name: "Maintenance",
    urlImg: "/assets/maintenance-icon.png",
    things: [
      {
        title: "New House",
        description: "Ensure your new home remains in perfect condition with our comprehensive maintenance services. From routine inspections to repairs, we help preserve the beauty, functionality, and value of your property."
      },
      {
        title: "Site",
        description: "Keep your construction site running smoothly with our expert site maintenance solutions. We focus on safety, organization, and efficiency to ensure your project progresses without interruptions."
      },
    ],
    contactWord: "Cekrumahku.id",
    url: 'https://instagram.com'
  },
  {
    name: "Build",
    urlImg: "/assets/build-icon.png",
    things: [
      {
        title: "New Construction​",
        description: "From the ground up, we bring your vision to life with precision and expertise. Our new construction services focus on delivering high-quality, durable, and aesthetically pleasing structures tailored to your needs."
      },
      {
        title: "Renovation",
        description: "Revitalize your space with our professional renovation services. Whether it's modernizing a room or transforming an entire building, we ensure seamless execution and exceptional results that exceed expectations."
      },
    ],
    url: '/contact-us'
  },
]

const Services = () => {
  return (
    <LayoutPage defaultTopHeight={false}>
      <Banner />
      {services.map((service, idx) => (
        <div className={idx % 2 === 0 ? 'bg-white' : 'bg-[#D9D9D9]'}>
          <ServiceThing
            name={service.name}
            urlImg={service.urlImg}
            things={service.things}
            contactWord={service.contactWord}
            url={service.url}
          />
        </div>
      ))}
    </LayoutPage>
  )
}

export default Services;
