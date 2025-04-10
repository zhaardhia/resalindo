// components/ClientLogoCarousel.jsx
"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"

const ClientLogoCarousel = () => {
  // Mock client data with names
  const clients = [
    { id: 1, name: 'SERPONG' },
    { id: 2, name: 'SUMMARECON' },
    { id: 3, name: 'BANK BRI' },
    { id: 4, name: 'ADHI CITY' },
    { id: 5, name: 'BIZLAND JAYA' },
    { id: 6, name: 'CIFO' },
    { id: 7, name: 'LANDMARK' },
  ];

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Our Clients
        </h2>

        {/* <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {clients.map((client) => (
              <CarouselItem key={client.id} className="md:basis-1/3 lg:basis-1/5 pl-4">
                <div className="p-1">
                  <div className="flex flex-col items-center justify-center h-24 bg-gray-300 rounded-md">
                    <div className="w-10 h-10 bg-gray-400 rounded-md mb-2"></div>
                    <span className="text-xs font-medium text-gray-600">{client.name}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious className="relative static transform-none" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel> */}

        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {clients.map((client) => (
                <CarouselItem key={client.id} className="md:basis-1/3 lg:basis-1/5">
                  <div className="p-1">
                    <div className="flex flex-col items-center justify-center h-24 bg-gray-300 rounded-md">
                      <div className="w-10 h-10 bg-gray-400 rounded-md mb-2"></div>
                      <span className="text-xs font-medium text-gray-600">{client.name}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Left arrow positioned outside the carousel content */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
              <CarouselPrevious className="h-8 w-8 bg-white" />
            </div>
            
            {/* Right arrow positioned outside the carousel content */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
              <CarouselNext className="h-8 w-8 bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoCarousel;