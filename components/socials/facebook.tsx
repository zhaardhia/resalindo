
import React from 'react'
import { cn } from '@/lib/utils'

const Facebook = ({ fill, className = '' }: { fill?: string, className?: string }) => {
  return (
    <div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill || 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={cn(className, "lucide lucide-instagram-icon lucide-instagram")}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={fill || 'none'} className={cn(className)} viewBox="-7 -2 24 24"><path fill="currentColor" d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865"/></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={fill || 'none'} className={cn(className)} viewBox="0 0 320 512"><path fill="currentColor" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
    </div>
  )
}

export default Facebook;
