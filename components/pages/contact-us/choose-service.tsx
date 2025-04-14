"use client";

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import FadeBox from '@/components/fade-box';

const optionsDesign = [
  {
    key: 'design-10x12',
    kind: 'design',
    label: 'Area Max 10 × 12',
    url: 'https://mayar.id'
  },
  {
    key: 'design-15x20',
    kind: 'design',
    label: 'Area Max 15 × 20',
    url: 'https://mayar.id'
  },
  {
    key: 'design-big',
    kind: 'design',
    label: 'Area greater than 15 × 20',
    url: 'https://mayar.id'
  },
]

const optionsMaintenance = [
  {
    key: 'maintenance-10x12',
    kind: 'maintenance',
    label: 'Area Max 10 × 12',
    url: 'https://mayar.id'
  },
  {
    key: 'maintenance-15x20',
    kind: 'maintenance',
    label: 'Area Max 15 × 20',
    url: 'https://mayar.id'
  },
  {
    key: 'maintenance-big',
    kind: 'maintenance',
    label: 'Area greater than 15 × 20',
    url: 'https://mayar.id'
  },
]

const optionsBuild = [
  {
    key: 'build-10x12',
    kind: 'build',
    label: 'Area Max 10 × 12',
    url: 'https://mayar.id'
  },
  {
    key: 'build-15x20',
    kind: 'build',
    label: 'Area Max 15 × 20',
    url: 'https://mayar.id'
  },
  {
    key: 'build-big',
    kind: 'build',
    label: 'Area greater than 15 × 20',
    url: 'https://mayar.id'
  },
]

const ChooseServices = () => {
  const [selectedDesign, setSelectedDesign] = useState<{ key: string, kind: string, label: string, url: string }>();
  const [selectedMaintenance, setSelectedMaintenance] = useState<{ key: string, kind: string, label: string, url: string }>();
  const [selectedBuild, setSelectedBuild] = useState<{ key: string, kind: string, label: string, url: string }>();

  return (
    <div className='flex gap-5 justify-center w-full mx-auto sm:flex-row flex-col sm:px-10 px-5'>
      <FadeBox delay='100ms' className='w-full'>
        <Card className='bg-[#343434] text-white w-full'>
          <CardContent className="flex flex-col text-center md:gap-10 gap-5 p-10 justify-center">
            <span className="text-2xl font-semibold">Design</span>
            <img src={'/assets/design-icon-white.png'} alt="" className='h-[5rem] mx-auto' />
            <div className="space-y-3 w-full">
              {optionsDesign.map((option, index) => (
                <label
                  key={index}
                  className={`flex justify-between items-center text-sm px-4 py-2 rounded-xl border transition-all cursor-pointer
                    ${selectedDesign?.key === option.key ? "bg-white text-black" : "bg-transparent text-white border-white/50"}`}
                >
                  <span>{option.label}</span>
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all
                      ${selectedDesign?.key === option.key ? "border-black" : "border-white/60"}`}
                  >
                    {selectedDesign?.key === option.key && <span className="w-2 h-2 bg-black rounded-full" />}
                  </span>
                  <input
                    type="radio"
                    name="radioGroup"
                    className="hidden"
                    checked={selectedDesign?.key === option.key}
                    onChange={() => setSelectedDesign(option)}
                  />
                </label>
              ))}
            </div>
            {selectedDesign ? (
              <a href={selectedDesign?.url} target='_blank'>
                <Button className='bg-green-500 w-full'>Book Schedule</Button>
              </a>
            ) : <Button className='bg-green-500' disabled>Book Schedule</Button>}
            
          </CardContent>
        </Card>
      </FadeBox>
      <FadeBox delay='150ms' className='w-full'>
        <Card className='bg-[#343434] text-white w-full'>
          <CardContent className="flex flex-col text-center md:gap-10 gap-5 p-10">
            <span className="text-2xl font-semibold">Maintenance</span>
            <img src={'/assets/maintenance-icon-white.png'} alt="" className='h-[5rem] mx-auto' />
            <div className="space-y-3 w-full">
              {optionsMaintenance.map((option, index) => (
                <label
                  key={index}
                  className={`flex justify-between items-center text-sm px-4 py-2 rounded-xl border transition-all cursor-pointer
                    ${selectedMaintenance?.key === option.key ? "bg-white text-black" : "bg-transparent text-white border-white/50"}`}
                >
                  <span>{option.label}</span>
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all
                      ${selectedMaintenance?.key === option.key ? "border-black" : "border-white/60"}`}
                  >
                    {selectedMaintenance?.key === option.key && <span className="w-2 h-2 bg-black rounded-full" />}
                  </span>
                  <input
                    type="radio"
                    name="radioGroup"
                    className="hidden"
                    checked={selectedMaintenance?.key === option.key}
                    onChange={() => setSelectedMaintenance(option)}
                  />
                </label>
              ))}
            </div>
            {selectedMaintenance ? (
              <a href={selectedMaintenance?.url} target='_blank'>
                <Button className='bg-green-500 w-full'>Book Schedule</Button>
              </a>
            ) : <Button className='bg-green-500' disabled>Book Schedule</Button>}
          </CardContent>
        </Card>
      </FadeBox>
      <FadeBox delay='200ms' className='w-full'>
        <Card className='bg-[#343434] text-white w-full'>
          <CardContent className="flex flex-col text-center md:gap-10 gap-5 p-10">
            <span className="text-2xl font-semibold">Build</span>
            <img src={'/assets/build-icon-white.png'} alt="" className='h-[5rem] mx-auto' />
            <div className="space-y-3 w-full">
              {optionsBuild.map((option, index) => (
                <label
                  key={index}
                  className={`flex justify-between items-center text-sm px-4 py-2 rounded-xl border transition-all cursor-pointer
                    ${selectedBuild?.key === option.key ? "bg-white text-black" : "bg-transparent text-white border-white/50"}`}
                >
                  <span>{option.label}</span>
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all
                      ${selectedBuild?.key === option.key ? "border-black" : "border-white/60"}`}
                  >
                    {selectedBuild?.key === option.key && <span className="w-2 h-2 bg-black rounded-full" />}
                  </span>
                  <input
                    type="radio"
                    name="radioGroup"
                    className="hidden"
                    checked={selectedBuild?.key === option.key}
                    onChange={() => setSelectedBuild(option)}
                  />
                </label>
              ))}
            </div>
            {selectedBuild ? (
              <a href={selectedBuild?.url} target='_blank'>
                <Button className='bg-green-500 w-full'>Book Schedule</Button>
              </a>
            ) : <Button className='bg-green-500' disabled>Book Schedule</Button>}
          </CardContent>
        </Card>
      </FadeBox>
    </div>
  )
}

export default ChooseServices