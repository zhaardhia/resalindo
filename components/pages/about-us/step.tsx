"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClientContainerAnimate from "@/components/client-container-animate";

const data = [
  {
    title: "Site Visit",
    description: "We begin by visiting the project site to understand the location, scope, and specific requirements. This step allows us to gather essential information and assess the environment for the best approach.",
  },
  {
    title: "Pre Design - Final Design ",
    description: "Our team collaborates with you to create initial design concepts, refining them into a final design that aligns with your vision, functionality, and budget.",
  },
  {
    title: "Cost Estimating (RAB)",
    description: "We provide a detailed cost estimation, ensuring transparency and helping you plan your budget effectively for the entire project.",
  },
  {
    title: "Memorandum Of Understanding (MOU / SPK)",
    description: "Once the design and budget are finalized, we formalize the agreement through a Memorandum of Understanding or Service Agreement to ensure clarity and commitment.",
  },
  {
    title: "Construction Execution",
    description: "With everything in place, we begin construction, adhering to the agreed timeline, quality standards, and design specifications.",
  },
  {
    title: "Finished Construction & Handover Building",
    description: "Upon completion, we conduct a thorough inspection and hand over the finished building, ensuring it meets your expectations and is ready for use.",
  },
];

export default function Step() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-10 pb-24">
      <h2 className="text-4xl font-bold mb-20 text-center">How We Proceed Our Client</h2>
      <div className="flex gap-20 md:flex-row flex-col mx-auto justify-center">
        <div className="md:w-[45%] flex justify-center items-center">
          <ClientContainerAnimate direction="right" className="bg-gray-500 rounded-xl md:max-w-[25rem] max-h-[25rem] w-full h-full aspect-square my-auto">
            <img src="/rpm/proceed-client.png" alt="" className="w-full h-full object-cover rounded-xl" />
          </ClientContainerAnimate>
        </div>

        {/* Timeline */}
        <ClientContainerAnimate direction="above" className="flex flex-col items-start relative justify-between gap-5 md:w-[55%]">
          <div className="absolute top-4 bottom-4 left-[0.9rem] w-1 bg-gray-300 z-0 h-full" />
          {data.map((item, index) => (
            <div
              key={item.title}
              className="relative z-10 flex cursor-pointer gap-8 w-full"
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`!min-w-8 !h-8 rounded-full flex items-center justify-center font-semibold text-sm border-2 transition-all duration-300 z-10 ${
                  activeIndex === index
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  // key={activeIndex}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-10"
                >
                  <div className={activeIndex !== index ? 'opacity-30' : 'opacity-100'}>
                    <h4 className="font-semibold text-md mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </ClientContainerAnimate>

        {/* Project list with animation */}
        {/* <div className="flex-1 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              // key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-10"
            >
              
              {[1, 2, 3, 4, 5, 6].map((_, index) => {
                return (
                  <div className={activeIndex !== index ? 'opacity-30' : 'opacity-100'}>
                    <h4 className="font-semibold text-md mb-1">Lorem Ipsum</h4>
                    <p className="text-sm text-gray-600">
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type.
                    </p>
                  </div>
                )
              })}

              
            </motion.div>
          </AnimatePresence>
        </div> */}
      </div>
    </div>
  );
}
