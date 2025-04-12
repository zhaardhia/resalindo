"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="py-5 md:px-14 px-5 md:bg-white/85 bg-white-/50 backdrop-blur-md fixed top-0 w-full z-[100] flex justify-between items-center">
        <Link href={"/"}>
          <img
            src="/rpm/logo-rpm.png"
            alt="logo rpm"
            className="md:w-[60px] w-[40px]"
          />
        </Link>

        <div className="md:flex hidden gap-5 items-center font-semibold decoration-2">
          <Link
            href={"/"}
            className={cn(
              "text-[1rem] hover:text-[#171717] underline-offset-4 text-[#343434] font-medium",
              (pathname === "/" || pathname === "/home") && "!text-black"
            )}
          >
            Home
          </Link>
          <Link
            href={"/projects"}
            className={cn(
              "text-[1rem] hover:text-[#171717] underline-offset-4 text-[#343434] font-medium",
              pathname.includes("projects") && "!text-black"
            )}
          >
            Projects
          </Link>
          <Link
            href={"/about-us"}
            className={cn(
              "text-[1rem] hover:text-[#171717] underline-offset-4 text-[#343434] font-medium",
              pathname === "/about-us" && "!text-black"
            )}
          >
            About Us
          </Link>
          <Link
            href={"/services"}
            className={cn(
              "text-[1rem] hover:text-[#171717] underline-offset-4 text-[#343434] font-medium",
              pathname === "/services" && "!text-black"
            )}
          >
            Services
          </Link>
          <Link
            // href={`https://wa.me/${normalizePhoneNumber(dataWhatsapp!)}`}
            // href={catalog_link}
            href="/contact-us"
          >
            <Button
              // variant={"outline"}
              className="border-black h-9 font-light rounded-full bg-[#343434]"
            >
              {/* <Icon icon={"ic:baseline-whatsapp"} className="text-2xl" /> */}
              {/* <Icon icon="solar:document-linear" className="text-2xl" /> */}
              {/* <Icon icon="mingcute:document-3-line" className="text-xl" /> */}
              Contact Us
            </Button>
          </Link>
          {/* <NavbarMobile/> */}
        </div>
        <div
          className="navbar-toggle md:hidden flex"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {/* <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span> */}
          <span
            className={`transform transition-300 span-first ${
              isNavOpen ? "span-first-active" : ""
            }`}
          />
          <span
            className={`transform transition-300 ${
              isNavOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`transform transition-300 span-third ${
              isNavOpen ? "span-third-active" : ""
            }`}
          />
        </div>
      </nav>

      {isNavOpen && (
        <div
          className={`fixed inset-0 bg-white opacity-[97%] !overflow-hidden z-40 !transform transition-all !duration-300 !ease-in-out ${
            isNavOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/"
              className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300 z-50"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300 z-50"
            >
              Projects
            </Link>
            <Link
              href="/about-us"
              className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300 z-50"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300 z-50"
            >
              Services
            </Link>
            <Link
              // href={`https://wa.me/${normalizePhoneNumber(dataWhatsapp!)}`}
              // href={catalog_link}
              href="/contact-us"
              className="absolute bottom-7 text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300 z-50"
            >
              <Button
                className="!py-6 !text-lg rounded-full bg-[#343434] flex justify-center items-center mx-auto px-7"
              >
                {/* <Icon icon="ic:outline-whatsapp" width="28" height="28" /> */}
                {/* <Icon icon="mingcute:document-3-line" className="text-xl" /> */}
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
