import React from 'react'
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const values = [
  {
    title: '7+ Years Experience',
    description: 'Telah dipercaya untuk memenuhi kebutuhan arsitektur dan konstruksi oleh banyak client lebih dari 10 tahun'
  },
  {
    title: 'Best Service',
    description: 'Memiliki tim profesional yang benar-benar memahami kebutuhan arsitektur & konstruksi'
  },
  {
    title: 'Best Material',
    description: 'Menggunakan alat pendukung dan bahan material yang telah dikurasi untuk hasil akhir pekerjaan maksimal'
  },
  {
    title: '7+ Years Experience',
    description: 'Telah dipercaya untuk memenuhi kebutuhan arsitektur dan konstruksi oleh banyak client lebih dari 10 tahun'
  },
  {
    title: 'Best Service',
    description: 'Memiliki tim profesional yang benar-benar memahami kebutuhan arsitektur & konstruksi'
  },
  {
    title: 'Best Material',
    description: 'Menggunakan alat pendukung dan bahan material yang telah dikurasi untuk hasil akhir pekerjaan maksimal'
  },
]

const CompanyValue = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-10'>
      <p className='text-4xl font-semibold text-center mb-10'>Company Value</p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {values.map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className='bg-[#343434] text-white'>
                  <CardContent className="flex flex-col text-center gap-4 py-20 px-10">
                    <span className="text-2xl font-semibold">{_.title}</span>
                    <p className='text-sm font-light'>{_.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CompanyValue