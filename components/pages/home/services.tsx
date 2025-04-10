// ServiceSection.jsx
import React from 'react';
import { Home, ClipboardList } from 'lucide-react';

const Service = () => {
  return (
    <div className="w-full bg-[#343434] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-white mb-6">Make Your Dreams Come True</h2>
        
        <p className="text-gray-300 mb-12 max-w-6xl mx-auto font-light text-lg">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </p>
        
        {/* Service Cards */}
        <div className="flex justify-center gap-10 mb-16">
          {/* Design Card */}
          <div className="bg-white py-8 rounded w-full max-w-[220px] h-[250px] flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center">
              <Home className="h-16 w-16 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 uppercase">Design</h3>
          </div>
          
          {/* Maintenance Card */}
          <div className="bg-white py-8 rounded w-full max-w-[220px] h-[250px] flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center">
              <ClipboardList className="h-16 w-16 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 uppercase">Maintenance</h3>
          </div>
          
          {/* Build Card */}
          <div className="bg-white py-8 rounded w-full max-w-[220px] h-[250px] flex flex-col justify-center items-center gap-5">
            <div className="flex justify-center items-center">
              <ClipboardList className="h-16 w-16 text-gray-600" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 uppercase">Build</h3>
          </div>
        </div>
        
        {/* Service Categories - First Row */}
        <div className="flex flex-wrap justify-center text-gray-300 mb-4">
          <div className="px-4 py-2">Architectural Design</div>
          <div className="px-4 py-2 border-l border-gray-600">Interior Design</div>
          <div className="px-4 py-2 border-l border-gray-600">Structure Planner</div>
        </div>
        
        {/* Service Categories - Second Row */}
        <div className="flex flex-wrap justify-center text-gray-300">
          <div className="px-4 py-2">New Construction</div>
          <div className="px-4 py-2 border-l border-gray-600">Cekrumahku.id</div>
          <div className="px-4 py-2 border-l border-gray-600">Renovation</div>
          <div className="px-4 py-2 border-l border-gray-600">Material Support</div>
        </div>
      </div>
    </div>
  );
};

export default Service;