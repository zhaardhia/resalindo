// components/ProjectDetail.tsx
'use client';

import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const imagePlaceholders = [
  'img1', 'img2', 'img3',
  'img4', 'img5', 'img6'
];

export default function ProjectDetail() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="max-w-7xl pb-16 px-5 md:px-16 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Side: Text + Image Grid */}
      <div className="lg:col-span-8 space-y-6">
        <div>
          <button className="bg-black text-white text-sm px-10 py-1 rounded-2xl mb-2">Build</button>
          <h1 className="text-4xl font-semibold">Lorem Ipsum Dolor</h1>
          <p className="text-gray-500 text-md mt-1 max-w-[35rem]">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className=' flex gap-2'>
            <div className='flex flex-col gap-2 w-[37%]'>
              <div className='aspect-square w-full bg-gray-300 rounded-md transform transition-all duration-300 ease-in-out'>
                <img src="/rpm/render-example-design.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className='aspect-square w-full bg-gray-300 rounded-md transform transition-all duration-300 ease-in-out'>
                <img src="/rpm/render-example-design.png" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className='aspect-square w-[75%] h-auto bg-gray-300 rounded-md transform transition-all duration-300 ease-in-out'>
              <img src="/rpm/render-example-design.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='aspect-square w-full bg-gray-300 rounded-md transform transition-all duration-300 ease-in-out'>
              <img src="/rpm/render-example-design.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className='aspect-square w-full bg-gray-300 rounded-md transform transition-all duration-300 ease-in-out'>
              <img src="/rpm/render-example-design.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className='aspect-square w-full bg-gray-300 rounded-md transform transition-all duration-300 ease-in-out'>
              <img src="/rpm/render-example-design.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* {imagePlaceholders.map((_, i) => (
            <div
              key={i}
              className={`w-full h-40 bg-gray-300 rounded-md transform transition-all duration-300 ease-in-out ${
                hoveredIndex === i
                  ? 'scale-105 z-20'
                  : hoveredIndex === null
                  ? 'scale-100'
                  : 'scale-95 opacity-60'
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))} */}
        </div>
      </div>

      {/* Right Side: Project Info + Next Project */}
      <div className="lg:col-span-3 flex flex-col items-start">
        <div className="sticky top-6 space-y-8 w-full">
          {/* Project Info */}
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-2xl">557 sqm</p>
              <p className="text-xs text-gray-400">Area</p>
              <hr className="my-2" />
            </div>
            <div>
              <p className="font-semibold text-2xl">300 sqm</p>
              <p className="text-xs text-gray-400">Building Area</p>
              <hr className="my-2" />
            </div>
            <div>
              <p className="font-semibold text-2xl">2020</p>
              <p className="text-xs text-gray-400">Year</p>
              <hr className="my-2" />
            </div>
            <div>
              <p className="font-semibold text-2xl">Jakarta</p>
              <p className="text-xs text-gray-400">Location</p>
              <hr className="my-2" />
            </div>
          </div>

          {/* Next Project */}
          <Link href='/projects/yyy' className='mt-5'>
            <h3 className="text-md font-medium mb-2 flex justify-between items-center">
              Next Project
              <MoveRight />
            </h3>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square bg-gray-300 rounded-md shrink-0">
                <img src="/rpm/render-example-design.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className='flex justify-between'>
                <div>
                  <p className="font-semibold text-sm">Lorem Ipsum Dolor</p>
                  <p className="text-xs text-gray-400">Jakarta, 2021</p>
                </div>
                <div>
                  <button className="bg-[#8E8B82] text-white text-sm md:px-10 px-5 py-1 rounded-2xl mb-2">Design</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </section>
    // <div className="w-full min-h-screen flex items-center justify-center bg-white p-10">
    //   <div className="grid grid-cols-3 gap-4 w-full max-w-7xl">
    //     {/* Left Image Section */}
    //     <div className="col-span-2 grid grid-cols-3 grid-rows-3 gap-4 group">
    //       {/* Left column: 3 stacked */}
    //       <div className="flex flex-col gap-4">
    //         <div className="aspect-square bg-gray-300 transition-all duration-300 group-hover:scale-90 hover:scale-110"></div>
    //         <div className="aspect-square bg-gray-300 transition-all duration-300 group-hover:scale-90 hover:scale-110"></div>
    //         <div className="aspect-square bg-gray-300 transition-all duration-300 group-hover:scale-90 hover:scale-110"></div>
    //       </div>

    //       {/* Center large image */}
    //       <div className="row-span-3 col-span-1">
    //         <div className="w-full h-full bg-gray-300 aspect-square transition-all duration-300 group-hover:scale-90 hover:scale-110"></div>
    //       </div>

    //       {/* Bottom row: 3 images */}
    //       <div className="col-span-3 flex gap-4 mt-4">
    //         <div className="flex-1 aspect-square bg-gray-300 transition-all duration-300 group-hover:scale-90 hover:scale-110"></div>
    //         <div className="flex-1 aspect-square bg-gray-300 transition-all duration-300 group-hover:scale-90 hover:scale-110"></div>
    //         <div className="flex-1 aspect-square bg-gray-300 transition-all duration-300 group-hover:scale-90 hover:scale-110"></div>
    //       </div>
    //     </div>

    //     {/* Right Info Section */}
    //     <div className="col-span-1 pl-8 flex flex-col justify-between">
    //       <div className="space-y-6">
    //         <div>
    //           <p className="text-xl font-bold">557 sqm</p>
    //           <p className="text-sm text-gray-500">Area</p>
    //         </div>
    //         <hr />
    //         <div>
    //           <p className="text-xl font-bold">300 sqm</p>
    //           <p className="text-sm text-gray-500">Building Area</p>
    //         </div>
    //         <hr />
    //         <div>
    //           <p className="text-xl font-bold">2020</p>
    //           <p className="text-sm text-gray-500">Year</p>
    //         </div>
    //         <hr />
    //         <div>
    //           <p className="text-xl font-bold">Jakarta</p>
    //           <p className="text-sm text-gray-500">Location</p>
    //         </div>
    //       </div>

    //       {/* Next Project Card */}
    //       <div className="mt-10">
    //         <p className="text-md font-semibold mb-2">Next Project</p>
    //         <div className="w-full aspect-square bg-gray-300 rounded-md mb-2"></div>
    //         <p className="text-sm font-medium">Lorem Ipsum Dolor</p>
    //         <p className="text-xs text-gray-500">Jakarta, 2021</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
}
