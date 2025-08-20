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
  const a = 1;

  return (
    <Fragment>
      {/* get started */}
      <section className="  flex flex-col max-md:flex-col items-center h-[50vh] max-md:pt-[70px] px-[5%] justify-evenly bg-black   ">
        <div className="md:left md:w-[70%]">
          <h2 className="text-white text-[60px] text-center max-md:text-[24px] md:leading-[70px] ">
            Let's get started.
          </h2>
        </div>
        <div className="right flex flex-col max-md:justify-center max-md:text-center items-center ">
          <h4 className="text-[#a5acc0] text-[20px] max-md:text-[16px]  pb-10">
            Talk with our experts to start your website transformation today.
          </h4>
          <div className="cursor-pointer">
            <Link href={"/contact/sales"}>
              <WSButton value="Book Intro Call" icon={<ArrowUpRight />} />
            </Link>
          </div>
        </div>
      </section>

      {/* list */}
      <section className="  flex flex-row flex-wrap max-md:flex-row   items-start pt-[70px]  justify-evenly max-lg:flex-row flex-wrap px-[5%] bg-black text-white  ">
        <div className="flex flex-col justify-between lg:w-1/4 max-lg:w-full max-lg:pb-10  gap-18">
          <div className=" space-y-4">
            <Avatar className={"rounded-none w-[200px]  "}>
              <AvatarImage
                className="object-cover"
                src="/Logos/ProgrammersSQUAD-final-logof.png"
                alt="Logo"
              />
            </Avatar>
            <h4 className="w-50">
              Specializing in premium web, mobile, and product development
            </h4>
          </div>
          <div className="flex flex-row   justify-start">
            <SlSocialFacebook className="hover:bg-[#010b17] w-10 h-10 hover:text-[#0969dd] p-2 rounded-[20px]" />
            <FaXTwitter className="hover:bg-[#010b17] w-10 h-10 hover:text-[#0969dd] p-2 rounded-[20px]" />
            <FaLinkedin className="hover:bg-[#010b17] w-10 h-10 hover:text-[#0969dd] p-2 rounded-[20px]" />
            <FaInstagramSquare className="hover:bg-[#010b17] w-10 h-10 hover:text-[#0969dd] p-2 rounded-[20px]" />
            <CiGlobe className="hover:bg-[#010b17] w-10 h-10 hover:text-[#0969dd] p-2 rounded-[20px]" />
          </div>
        </div>
        <div className="flex flex-col max-lg:flex-row max-lg:justify-between gap-x-6 w-[25%] max-lg:w-1/2 space-y-10">
          <div className="leading-[20px]">
            <h4 className="font-[600] text-[16px]">
              {footerData[0].Development.title}
            </h4>
            {footerData[0].Development.items.map((item, index) => {
              return (
                <div key={index} className="">
                  <p className=" text-white cursor-pointer leading-[40px] text-[14px] ">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
          {/* <div className=" leading-[20px] ">
            <h4 className="font-[600] text-[16px]">
              {footerData[1].DESIGN.title}
            </h4>
            {footerData[1].DESIGN.items.map((item, index) => {
              return (
                <div key={index}>
                  <p className="cursor-pointer leading-[40px] text-[14px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div> */}
          {/* <div className="leading-[20px] ">
            <h4 className="font-[600] text-[16px]">
              {footerData[8].Resources.title}
            </h4>
            {footerData[8].Resources.items.map((item, index) => {
              return (
                <div key={index}>
                  <p className="cursor-pointer leading-[40px] text-[14px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div> */}
        </div>

        {/* <div className="w-[25%] space-y-10 flex flex-col max-md:flex-row gap-x-6 ">
          <div className=" leading-[20px]">
            <h4 className="font-[600] text-[16px]">
              {footerData[2].SEO.title}
            </h4>
            {footerData[2].SEO.items.map((item, index) => {
              return (
                <div key={index}>
                  <p className="cursor-pointer leading-[40px] text-[14px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="leading-[20px] ">
            <h4 className="font-[600] text-[16px]">
              {footerData[3].Solutions.title}
            </h4>
            {footerData[3].Solutions.items.map((item, index) => {
              return (
                <div key={index}>
                  <p className="cursor-pointer leading-[40px] text-[14px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div> 
           <div className="leading-[20px] ">
            <h4 className="font-[600] text-[16px]">
              {footerData[4].Industries.title}
            </h4>
            {footerData[4].Industries.items.map((item, index) => {
              return (
                <div key={index}>
                  <p className="cursor-pointer leading-[40px] text-[14px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div> 
        </div> */}

        <div className="w-[25%] max-lg:w-1/2 space-y-10 flex flex-col max-md:flex-row gap-x-6 ">
          <div className=" leading-[20px]">
            <h4 className="font-[600] text-[16px]">
              {footerData[5].Technologies.title}
            </h4>
            {footerData[5].Technologies.items.map((item, index) => {
              return (
                <div key={index}>
                  <p className="cursor-pointer leading-[40px] text-[14px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[25%] max-lg:w-full space-y-10 flex flex-col max-md:flex-row gap-x-6 ">
          <div className=" leading-[20px]">
            <h4 className="font-[600] text-[16px]">
              {footerData[6].ClientStories.title}
            </h4>
            {footerData[6].ClientStories.items.map((item, index) => {
              return (
                <div key={index}>
                  <p className="cursor-pointer leading-[40px] text-[14px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
          {/* <div className="leading-[20px] ">
            <h4 className="font-[600] text-[16px]">
              {footerData[7].Company.title}
            </h4>
            {footerData[7].Company.items.map((item, index) => {
              return (
                <div key={index}>
                  <p className="cursor-pointer leading-[40px] text-[14px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>

      <section className="  flex flex-row flex-wrap max-md:flex-col   items-start justify-end  px-[5%] bg-black text-white  ">
        <img
          src={"/Logos/e (1).png"}
          className="w-full flex flex-row justify-start "
        />
      </section>

      <section className="  flex flex-row flex-wrap max-md:flex-col  border-t-1 items-start py-4  justify-between  px-[5%] bg-black text-white  ">
        <div>
          © <span id="year"></span> <strong>Programmers Squad</strong>. All
          rights reserved.
          <script>
            document.getElementById('year').textContent = new
            Date().getFullYear();
          </script>
        </div>

        <div className="flex gap-4">
          <Link href="/privacy">
            <p className="cursor-pointer">Privacy Policy</p>
          </Link>
          <Link href="/terms">
            <p className="cursor-pointer">Terms and Conditions</p>
          </Link>
        </div>
      </section>
    </Fragment>
  );
}
