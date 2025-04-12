import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import FadeBox from '@/components/fade-box';

const Achievements = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Lorem Ipsum Dolor',
      subtitle: 'Lorem Ipsum Dolor',
      color: 'bg-amber-600'
    },
    {
      id: 2,
      title: 'Lorem Ipsum Dolor',
      subtitle: 'Lorem Ipsum Dolor',
      color: 'bg-amber-700'
    },
    {
      id: 3,
      title: 'Lorem Ipsum Dolor',
      subtitle: 'Lorem Ipsum Dolor',
      color: 'bg-amber-800'
    },
    {
      id: 4,
      title: 'Lorem Ipsum Dolor',
      subtitle: 'Lorem Ipsum Dolor',
      color: 'bg-amber-900'
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-gray-600 mb-2">Portfolio / Projects</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Proud Achievements</h2>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full inline-flex items-center transition-all">
              More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <div>
            <p className="text-gray-700">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        
        {/* Projects Grid - Full width layout */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className="relative rounded-lg overflow-hidden cursor-pointer h-64 md:h-80 transition-all duration-500 ease-in-out hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-amber-600"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-1">Lorem Ipsum Dolor</h3>
              <p className="text-sm text-white/80">Lorem Ipsum Dolor</p>
            </div>
          </div>
          
          <div 
            className="relative rounded-lg overflow-hidden cursor-pointer h-64 md:h-80 transition-all duration-500 ease-in-out hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-amber-700"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-1">Lorem Ipsum Dolor</h3>
              <p className="text-sm text-white/80">Lorem Ipsum Dolor</p>
            </div>
          </div>
          
          <div 
            className="relative rounded-lg overflow-hidden cursor-pointer h-64 md:h-80 transition-all duration-500 ease-in-out hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-amber-800"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-1">Lorem Ipsum Dolor</h3>
              <p className="text-sm text-white/80">Lorem Ipsum Dolor</p>
            </div>
          </div>
          
          <div 
            className="relative rounded-lg overflow-hidden cursor-pointer h-64 md:h-80 transition-all duration-500 ease-in-out hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-amber-900"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-1">Lorem Ipsum Dolor</h3>
              <p className="text-sm text-white/80">Lorem Ipsum Dolor</p>
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-wrap justify-center gap-4 w-[120%]">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`
                relative rounded-lg overflow-hidden cursor-pointer
                ${index === 1 ? 'w-full md:w-[calc(50%-1rem)]' : 'w-full md:w-[calc(30%-1rem)]'}
                transition-all duration-500 ease-in-out hover:w-full md:hover:w-[calc(50%-1rem)]
                h-64 md:h-80
              `}
            >
              <div className={`absolute inset-0 ${project.color}`}></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-white/80">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div> */}
        
      </div>
      <div className='max-w-7xl mx-auto'>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project, index) => (
            <FadeBox 
              delay={`${index + 1}00ms`}
              className={`
                relative rounded-lg overflow-hidden cursor-pointer
                ${
                  index === 1 ? 'w-full md:w-[calc(50%-1rem)]' 
                  : index === 2 ? 'w-full md:w-[calc(40%-1rem)]'
                  : index === 3 ? 'w-full md:w-[calc(45%-1rem)]' 
                  : 'w-full md:w-[calc(30%-1rem)]'}
                transition-all duration-500 ease-in-out hover:w-full md:hover:w-[calc(50%-1rem)]
                h-64 md:h-80
              `}
            >
              <Link 
                href={'/projects/xxx'}
                key={project.id}
                // className={`
                //   relative rounded-lg overflow-hidden cursor-pointer
                //   ${
                //     index === 1 ? 'w-full md:w-[calc(50%-1rem)]' 
                //     : index === 2 ? 'w-full md:w-[calc(40%-1rem)]'
                //     : index === 3 ? 'w-full md:w-[calc(45%-1rem)]' 
                //     : 'w-full md:w-[calc(30%-1rem)]'}
                //   transition-all duration-500 ease-in-out hover:w-full md:hover:w-[calc(50%-1rem)]
                //   h-64 md:h-80
                // `}
              >
                {/* <div className={`absolute inset-0 ${project.color}`}></div> */}
                <img src="/rpm/render-example-design.png" alt="" className='w-full h-full object-cover hover:blur-sm' />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-white/80">{project.subtitle}</p>
                </div>
              </Link>
            </FadeBox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;