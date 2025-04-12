import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SOCIALLIST } from "@/common/social";
import { Icon } from "@iconify/react";
import { ISocial } from "@/common/types/social.type";
import socials from "@/data/social.json"
import Socials from "../socials";

const Footer = () => {
  return (
    <footer className="bg-[#343434] flex flex-col md:flex-row gap-5 md:gap-0 justify-between md:items-center py-[3rem] md:px-[3rem] px-[2rem] font-interTight text-white">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center pt-3">
          <img
            src="/rpm/rpm-logo-white.png"
            alt="resalindo"
            className="w-14 h-14"
          />
          <div className="border-r-[1px] border-gray-700 h-[4rem]" />
          <div className="flex flex-col w-[15rem]">
            <p className="text-lg uppercase">Head Office</p>
            <p className="text-[0.8rem] font-extralight">
              Komp. Griya Indah, Cipondoh, Tangerang Banten 15147
            </p>
          </div>
          <div className="md:flex hidden flex-col w-[15rem]">
            <p className="text-lg uppercase">Workshop</p>
            <p className="text-[0.8rem] font-extralight">
              Jl. KH. Hasyim Ashari Kav. DPR, Blok B Cipondoh, Tangerang Banten 15148
            </p>
          </div>
        </div>
        <p className="text-[0.9rem] font-extralight md:block hidden mt-10">
          Copyrights © 2025 All Rights Reserved by Resalindo Prima Mandiri
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col w-[15rem] sm:hidden">
          <p className="text-lg uppercase">Workshop</p>
          <p className="text-[0.8rem] font-extralight">
            Jl. KH. Hasyim Ashari Kav. DPR, Blok B Cipondoh, Tangerang Banten 15148
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[0.9rem] font-extralight md:text-right">
            Phone: +6221 557 44 763
          </p>
          <p className="text-[0.9rem] font-extralight md:text-right">+6221 222 60 666</p>
          <p className="text-[0.9rem] font-extralight md:text-right">
            Email: resalindo.969@gmail.com
          </p>
        </div>

        <Socials lightMode={true} className="md:justify-end justify-start"/>
      </div>
      <p className="text-sm font-extralight md:hidden block">
        Copyrights © 2025 All Rights Reserved by Resalindo Prima Mandiri
      </p>
    </footer>
  );
};

export default Footer;
