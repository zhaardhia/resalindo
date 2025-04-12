// ServiceSection.jsx
import React from 'react';
import { Home, ClipboardList } from 'lucide-react';

const Service = () => {
  return (
    <div className="w-full bg-[#343434] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-semibold text-white mb-6">Make Your Dreams Come True</h2>
        
        <p className="text-gray-300 mb-12 max-w-6xl mx-auto font-light md:text-lg">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </p>
        
        {/* Service Cards */}
        <div className="flex justify-center md:gap-14 sm:gap-5 gap-2 mb-16 flex-row">
          {/* Design Card */}
          <div className="bg-white md:py-8 py-4 rounded w-full max-w-[240px] md:h-[250px] h-[150px] flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center">
              <Home className="md:h-16 md:w-16 w-10 h-10 text-gray-600" />
            </div>
            <h3 className="md:text-xl sm:text-md text-sm font-medium text-gray-600 uppercase">Design</h3>
          </div>
          
          {/* Maintenance Card */}
          <div className="bg-white md:py-8 py-4 rounded w-full max-w-[240px] md:h-[250px] h-[150px] flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center">
              <ClipboardList className="md:h-16 md:w-16 w-10 h-10 text-gray-600" />
            </div>
            <h3 className="md:text-xl sm:text-md text-sm font-medium text-gray-600 uppercase">Maintenance</h3>
          </div>
          
          {/* Build Card */}
          <div className="bg-white md:py-8 py-4 rounded w-full max-w-[240px] md:h-[250px] h-[150px] flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center">
              <ClipboardList className="md:h-16 md:w-16 w-10 h-10 text-gray-600" />
            </div>
            <h3 className="md:text-xl sm:text-md text-sm font-medium text-gray-600 uppercase">Build</h3>
          </div>
        </div>
        
        {/* Service Categories - First Row */}
        <div className="flex flex-wrap justify-center text-gray-300 mb-4">
          <div className="md:px-4 px-2 py-2 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Architectural Design</div>
          <div className="md:px-4 px-2 py-2 border-l border-gray-600 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Interior Design</div>
          <div className="md:px-4 px-2 py-2 border-l border-gray-600 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Structure Planner</div>
        </div>
        
        {/* Service Categories - Second Row */}
        <div className="flex flex-wrap justify-center text-gray-300">
          <div className="md:px-4 px-2 py-2 hover:text-gray-100 cursor-pointer sm:text-md text-sm">New Construction</div>
          <div className="md:px-4 px-2 py-2 border-l border-gray-600 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Cekrumahku.id</div>
          <div className="md:px-4 px-2 py-2 border-l border-gray-600 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Renovation</div>
          <div className="md:px-4 px-2 py-2 border-l border-gray-600 hover:text-gray-100 cursor-pointer sm:text-md text-sm sm:block hidden">Material Support</div>
        </div>

        <div className="flex flex-wrap sm:hidden justify-center text-gray-300 mt-2">
          <div className="md:px-4 px-2 py-2 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Material Support</div>
        </div>

        {/* mobile */}
        {/* <div className="flex flex-wrap justify-center text-gray-300 mb-4 sm:hidden">
          <div className="md:px-4 px-2 py-2 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Architectural Design</div>
          <div className="md:px-4 px-2 py-2 border-l border-gray-600 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Interior Design</div>
        </div>

        <div className="flex flex-wrap justify-center text-gray-300 mb-4 sm:hidden">
          <div className="md:px-4 px-2 py-2 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Structure Planner</div>
          <div className="md:px-4 px-2 py-2 border-l border-gray-600 hover:text-gray-100 cursor-pointer sm:text-md text-sm">New Construction</div>
        </div>

        <div className="flex flex-wrap justify-center text-gray-300 mb-4 sm:hidden">
          <div className="md:px-4 px-2 py-2 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Cekrumahku.id</div>
          <div className="md:px-4 px-2 py-2 border-l border-gray-600 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Renovation</div>
        </div> */}
        
        {/* <div className="flex flex-wrap justify-center text-gray-300 sm:hidden">
          <div className="md:px-4 px-2 py-2 hover:text-gray-100 cursor-pointer sm:text-md text-sm">Material Support</div>
        </div> */}
      </div>
    </div>
  );
};

export default Service;