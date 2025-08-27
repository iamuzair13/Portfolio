"use client";

import WSButton from "@/app/UI/WSButton/WSButton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SlSocialFacebook } from "react-icons/sl";
import { ArrowUpRight } from "lucide-react";
import { Fragment } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { footerData } from "../mock/footerData";
import Link from "next/link";

export default function Footer() {
  return (
    <Fragment>
      {/* Get Started Section */}
      <section className="flex flex-col items-center justify-center  bg-black px-[5%] py-16 lg:py-20">
        <h2 className="text-white text-[40px] md:text-[50px] lg:text-[60px] text-center leading-tight">
          Let's get started.
        </h2>
        <div className="mt-6 text-center">
          <h4 className="text-[#a5acc0] text-[16px] md:text-[18px] pb-6">
            Talk with our experts to start your website transformation today.
          </h4>
          <div className="flex justify-center">
            <Link href={"/contact/sales"}>
              <WSButton value="Book a 15-Min Call" icon={<ArrowUpRight />} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="flex flex-wrap justify-evenly items-start gap-y-10 px-[5%] py-12 bg-black text-white">
        {/* Logo & Social Icons */}
        <div className="flex flex-col justify-between lg:w-1/4 md:w-1/2 w-full gap-10 items-center lg:items-start text-center lg:text-left">
          <Avatar className="rounded-none w-[200px]">
            <AvatarImage
              className="object-cover"
              src="/Logos/ProgrammersSQUAD-final-logof.png"
              alt="Logo"
            />
          </Avatar>
          <h4 className="text-sm">
            Specializing in premium web, mobile, and product development
          </h4>
          <div className="flex gap-3 justify-center lg:justify-start">
            {[
              SlSocialFacebook,
              FaXTwitter,
              FaLinkedin,
              FaInstagramSquare,
              CiGlobe,
            ].map((Icon, i) => (
              <Icon
                key={i}
                className="hover:bg-[#010b17] w-10 h-10 hover:text-[#0969dd] p-2 rounded-[20px]"
              />
            ))}
          </div>
        </div>

        {/* Footer Columns */}
        {[0, 5, 6].map((index, colIdx) => (
          <div key={colIdx} className="lg:w-1/4 md:w-1/2 w-full space-y-6">
            <h4 className="font-semibold text-[16px]">
              {Object.values(footerData[index])[0].title}
            </h4>
            {Object.values(footerData[index])[0].items.map((item, i) => (
              <p
                key={i}
                className="cursor-pointer leading-[30px] text-[14px] hover:text-[#0969dd] transition"
              >
                {item.text}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Logo Strip */}
      <section className="px-[5%] bg-black text-white">
        <img src={"/Logos/e (1).png"} className="w-full object-contain" />
      </section>

      {/* Bottom Bar */}
      <section className="flex flex-wrap justify-between items-center px-[5%] py-4 bg-black text-white text-[12px] gap-4">
        <div>
          © {new Date().getFullYear()} <strong>Programmers Squad</strong>.
        </div>
        <div className="flex gap-4">
          <Link href="/privacy">
            <p className="cursor-pointer">Privacy Policy</p>
          </Link>
          <Link href="/terms">
            <p className="cursor-pointer">Terms & Conditions</p>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}
