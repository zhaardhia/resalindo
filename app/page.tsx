import Image from "next/image";
import Link from "next/link";
import LayoutPage from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

import { Metadata } from "next";
import { ParamsType } from "@/common/params";

import Onboard from "@/components/pages/home/onboard";
import ClientLogoCarousel from "@/components/pages/home/clients";
import Achievements from "@/components/pages/home/achievements";
import Service from "@/components/pages/home/services";
import WhyChooseUs from "@/components/pages/home/why";

export const dynamic = "force-static";
// export const revalidate = 0
export const revalidate = false;

export const generateMetadata = async ({
  params,
  searchParams,
}: ParamsType): Promise<Metadata> => {
  return {
    title: `Kami Muralin`,
    icons: '/muralin-favicon.png',
    description: '',
    keywords:
      'muralin, kami muralin, kamimuralin, mural, jasa mural, jasa buat mural',
  };
};

export default async function Home() {

  return (
    <LayoutPage>
      <div>
        <Onboard />
        <ClientLogoCarousel />
        <Achievements />
        <Service />
        <WhyChooseUs />
      </div>
    </LayoutPage>
  );
}
