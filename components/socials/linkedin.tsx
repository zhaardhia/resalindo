
import React from 'react'
import { cn } from '@/lib/utils'

const Linkedin = ({ fill, className = '' }: { fill?: string, className?: string }) => {
  return (
    <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill || 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={cn(className, "lucide lucide-instagram-icon lucide-instagram")}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> */}

      <svg className={className} xmlns="http://www.w3.org/2000/svg" fill={fill || 'none'} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
    </div>
  )
}

export default Linkedin;
