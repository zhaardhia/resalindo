"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "Question one?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  { question: "Question two?", answer: "Answer for question two. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type." },
  { question: "Question three?", answer: "Answer for question three. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type." },
  { question: "Question four?", answer: "Answer for question four. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type." },
];

export default function FAQSection() {
  const [openIndex] = useState(0); // only default open the first

  return (
    <div className="max-w-6xl mx-auto px-4 pt-10 pb-20">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-4xl font-semibold mb-10">
          Need Free Consultation and <br /> More Info?
        </h2>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
          Contact Us <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center min-h-[25rem]">
        <div className="text-5xl font-bold leading-tight">
          <span className="block">Frequently</span>
          <span className="block">Asked</span>
          <span className="block">Questions</span>
        </div>

        <div className="md:col-span-2 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`border-b pb-4 transition-all duration-300 cursor-pointer ${
                index === openIndex ? "pt-0" : "pt-2"
              } group hover:pt-0`}
            >
              <h4 className="text-3xl font-semibold mb-1">{item.question}</h4>
              {(index === openIndex || (
                <div className="hidden group-hover:block transition-opacity duration-300 text-sm text-gray-700">
                  {item.answer}
                </div>
              )) ?? (
                <div className="text-sm text-gray-700 block">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
