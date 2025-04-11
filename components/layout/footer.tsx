import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SOCIALLIST } from "@/common/social";
import { Icon } from "@iconify/react";
import { ISocial } from "@/common/types/social.type";
import socials from "@/data/social.json"

const Footer = () => {
  return (
    <footer className="bg-[#343434]  flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between md:items-center py-[3rem] md:px-[3rem] px-[2rem] font-interTight text-white">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img
            src="/muralin/muralin-logo.png"
            alt="muralin"
            className="w-[7rem] h-[3.5rem]"
          />
          <div className="border-r-[1px] border-gray-700 h-[4rem]" />
          <div className="flex flex-col w-[15rem]">
            <p className="text-lg uppercase">Head Office</p>
            <p className="text-[0.8rem] font-extralight">
              Komp. Griya Indah, Cipondoh, Tangerang Banten 15147
            </p>
          </div>
          <div className="flex flex-col w-[15rem]">
            <p className="text-lg uppercase">Workshop</p>
            <p className="text-[0.8rem] font-extralight">
              Jl. KH. Hasyim Ashari Kav. DPR, Blok B Cipondoh, Tangerang Banten 15148
            </p>
          </div>
        </div>
        <p className="text-[0.8rem] font-extralight">
          Copyrights © 2025 All Rights Reserved by Resalindo Prima Mandiri
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-[0.9rem] font-extralight text-right">
            Phone: +6221 557 44 763
          </p>
          <p className="text-[0.9rem] font-extralight text-right">+6221 222 60 666</p>
          <p className="text-[0.9rem] font-extralight text-right">
            Email: resalindo.969@gmail.com
          </p>
        </div>

        <div className="flex gap-2">
          {socials?.map((social) => {
            const findSocial = SOCIALLIST.find(
              (item) => item.key === social?.key
            );

            return (
              <a
                href={social?.link}
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon={findSocial?.logo!} className="text-3xl" />
              </a>
            );
          })}

            <a href={`mailto:example@email.com`}>
              <Icon
                icon={SOCIALLIST.find((item) => item.key === "email")?.logo!}
                className="text-3xl"
              />
            </a>
            <a href={`mailto:example@email.com`}>
              <Icon
                icon={SOCIALLIST.find((item) => item.key === "email")?.logo!}
                className="text-3xl"
              />
            </a>
          {/* {information?.email ? (
            <a href={`mailto:example@email.com`}>
              <Icon
                icon={SOCIALLIST.find((item) => item.key === "email")?.logo!}
                className="text-3xl"
              />
            </a>
          ) : (
            ""
          )}
          {information?.whatsapp ? (
            <a href={`https://wa.me/${information?.whatsapp}`}>
              <Icon
                icon={SOCIALLIST.find((item) => item.key === "whatsapp")?.logo!}
                className="text-3xl"
              />
            </a>
          ) : (
            ""
          )} */}
          {/* <Icon icon={'logos:youtube-icon'} className='text-white text-xl'/>
          <Icon icon={'logos:youtube-icon'} className='text-white text-xl'/>
          <Icon icon={'logos:youtube-icon'} className='text-white text-xl'/>
          <Icon icon={'skill-icons:instagram'} className='text-white text-xl'/>
          <Icon icon={'logos:youtube-icon'} className='text-white text-xl'/>
          <Icon icon={'logos:youtube-icon'} className='text-white text-xl'/> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
