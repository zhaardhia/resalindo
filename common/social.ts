import { ReactNode } from "react";
import Instagram from "@/components/socials/instagram";

type SocialType = {
  key: string;
  name: string;
  logo: string;
  color: string;
}

export const SOCIALLIST: SocialType[] = [
  {
    key: "instagram",
    name: "Instagram",
    logo: "mdi:instagram",
    color: "text-black",
  },
  {
    key: "email",
    name: "Email",
    logo: "clarity:email-line",
    color: "text-black"
  },
  {
    key: "whatsapp",
    name: "whatsapp",
    logo: "ic:baseline-whatsapp",
    color: "text-black"
  },
  {
    key: "tiktok",
    name: "Tiktok",
    logo: "iconoir:tiktok",
    color: "text-black"
  },
  {
    key: "facebook",
    name: "Facebook",
    logo: "ic:baseline-facebook",
    color: "text-black"
  },
  {
    key: "twitter",
    name: "Twitter/X",
    logo: "ri:twitter-x-line",
    color: "text-blue-600"
  },
  {
    key: "tiktok",
    name: "Tiktok",
    logo: "ic:baseline-tiktok",
    color: "text-blue-600"
  },
  {
    key: "youtube",
    name: "Youtube",
    logo: "mdi:youtube",
    color: "text-red-600"
  },
];
