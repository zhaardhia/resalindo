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
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
      },
      {
        title: "Interior Design",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
      },
      {
        title: "Structure Planner",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
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
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
      },
      {
        title: "Site",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
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
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
      },
      {
        title: "Renovation",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
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
