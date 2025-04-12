import React from 'react'
import socials from "@/data/social.json"
import Instagram from './instagram';
import Facebook from './facebook';
import Linkedin from './linkedin';
import { cn } from '@/lib/utils';

const Socials = ({ className, lightMode = false, small = false }: { className?: string, lightMode?: boolean, small?: boolean }) => {
  return (
    <div className={cn("flex gap-3 justify-center items-center", className)}>
      {socials?.map((social) => {
        return (
          <a
            href={social?.link}
            className="cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            {social.key === 'instagram' ?
              <div className={cn('p-1 rounded-lg', lightMode ? 'bg-white' : 'bg-[#343434]')}>
                <Instagram className={lightMode ? 'text-[#343434]' : "text-white"} />
              </div>
              : ''
            }
            {social.key === 'facebook' ?
              <div className={cn('p-1 rounded-lg', lightMode ? 'bg-white' : 'bg-[#343434]')}>
                <Facebook className={lightMode ? 'text-[#343434]' : "text-white"} />
              </div>
              : ''
            }
            {social.key === 'linkedin' ?
              <div className={cn('p-1 rounded-lg', lightMode ? 'bg-white' : 'bg-[#343434]')}>
                <Linkedin className={lightMode ? 'text-[#343434]' : "text-white"} />
              </div>
              : ''
            }
          </a>
        );
      })}
    </div>
  )
}

export default Socials;
