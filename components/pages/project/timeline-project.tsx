"use client";

// import { useEffect, useState } from "react";

// const data = [
//   {
//     year: 2024,
//     projects: ["Lorem Ipsum - Lorem Ipsum", "Lorem Ipsum - Lorem Ipsum"],
//   },
//   {
//     year: 2023,
//     projects: ["Lorem Ipsum - Lorem Ipsum", "Lorem Ipsum - Lorem Ipsum"],
//   },
//   {
//     year: 2022,
//     projects: ["Lorem Ipsum - Lorem Ipsum", "Lorem Ipsum - Lorem Ipsum"],
//   },
//   {
//     year: 2021,
//     projects: ["Lorem Ipsum - Lorem Ipsum", "Lorem Ipsum - Lorem Ipsum"],
//   },
//   {
//     year: 2020,
//     projects: ["Lorem Ipsum - Lorem Ipsum", "Lorem Ipsum - Lorem Ipsum"],
//   },
//   {
//     year: 2019,
//     projects: ["Lorem Ipsum - Lorem Ipsum", "Lorem Ipsum - Lorem Ipsum"],
//   },
// ];

// export default function TimelineSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-10">Other Works</h2>
//       <div className="flex gap-8">
//         {/* Timeline */}
//         <div className="flex flex-col items-center relative">
//           <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300" />
//           {data.map((item, index) => (
//             <div key={item.year} className="relative z-10 mb-10 flex flex-col items-center">
//               <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm border-2 ${
//                 activeIndex === index ? "bg-gray-800 text-white border-gray-800" : "bg-white text-gray-500 border-gray-300"
//               }`}>
//                 {String(index + 1).padStart(2, "0")}
//               </div>
//               <div className="mt-2 text-sm font-medium">{item.year}</div>
//             </div>
//           ))}
//         </div>

//         {/* Project list */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
//           {data[activeIndex].projects.map((project, idx) => (
//             <div key={idx}>
//               <h4 className="font-semibold text-md mb-1">{project}</h4>
//               <p className="text-sm text-gray-600">
//                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                 when an unknown printer took a galley of type.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    year: 2024,
    projects: [
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum"
    ],
  },
  {
    year: 2023,
    projects: [
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
    ],
  },
  {
    year: 2022,
    projects: [
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum"
    ],
  },
  {
    year: 2021,
    projects: [
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum"
    ],
  },
  {
    year: 2020,
    projects: [
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum"
    ],
  },
  {
    year: 2019,
    projects: [
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum",
      "Lorem Ipsum - Lorem Ipsum"
    ],
  },
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-10">Other Works</h2>
      <div className="flex gap-8">
        {/* Timeline */}
        <div className="flex flex-col items-start relative md:w-40 w-20">
          <div className="absolute top-0 bottom-0 left-[4.8rem] w-1 bg-gray-300 h-[24rem]" />
          {data.map((item, index) => (
            <div
              key={item.year}
              className="relative z-10 mb-10 flex items-center cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="text-sm font-medium w-12 text-right mr-4">{item.year}</div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm border-2 transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Project list with animation */}
        <div className="flex-1 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {data[activeIndex].projects.map((project, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-md mb-1">{project}</h4>
                  <p className="text-sm text-gray-600">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type.
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
