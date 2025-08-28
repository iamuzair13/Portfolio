"use client";

import { capabilities } from "@/app/mock/Navbar/capabilities";
import WSButton from "@/app/UI/WSButton/WSButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function BackendDevelopmentPage() {
  return (
    <Fragment>
      <section
        className="relative flex flex-col items-center h-[calc(100vh-70px)] py-10 px-[5%] justify-center gap-10 bg-black bg-cover bg-center bg-no-repeat max-lg:pt-[70px]"
        style={{
          backgroundImage: `url(${capabilities[0].Development.items[2].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="w-full lg:w-[70%]  z-1">
          <h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-[60px] text-center max-lg:text-[28px] lg:leading-[70px]"
          >
            {capabilities[0].Development.items[2].title}
          </h2>
        </div>
        <div className="w-full flex flex-col items-center max-lg:text-center  z-1">
          <h4 className="text-[#a5acc0] text-[20px] max-lg:text-[16px] w-[50%] max-lg:w-full text-center pb-10">
            {capabilities[0].Development.items[2].desc}
          </h4>
        </div>
        <Link href={"/contact/sales"}>
          <WSButton
            value="Book a 15-Min Call"
            icon={
              <ChevronRight className="absolute inset-0 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
            }
            hovericon={
              <ArrowRight className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            }
          />
        </Link>
      </section>

      <section className="flex flex-col items-center px-[5%] py-30 bg-black max-lg:pt-20">
        <div className="flex flex-col space-y-20 justify-center items-center w-full lg:w-[80%]">
          <h2 className="text-white text-[26px] pb-10  border-b-1 border-gray-600 text-center max-lg:text-[22px] lg:leading-[30px] w-full lg:w-[70%]">
            Trusted to design modular, scalable websites for some of the
            fastest-growing companies in the world.
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-full">
            <h4 className="text-white text-[30px] max-lg:text-[18px] lg:w-[50%]">
              Modular web design built for modern business.
            </h4>

            <p className="text-[#a5acc0] text-[20px] max-lg:text-[16px] lg:w-[50%]">
              Our team of experienced designers and developers work closely with
              you to create a website that not only looks great but also
              performs exceptionally well, driving traffic and conversions.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10 items-center px-[5%] py-20 bg-black max-lg:pt-20">
        {/* Section Items */}
        {capabilities[0].Development.items
          .filter((item) => item.name !== "Backend Development")
          .map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse justify-between " : ""
              } gap-6 w-full p-6 rounded-[20px] items-center  justify-between `}
            >
              <div className={`flex flex-col gap-6   w-full`}>
                <h4 className="text-[24px] max-lg:text-[20px] font-bold leading-[30px] text-white">
                  {item.title}
                </h4>
                <p className="font-normal text-white text-[16px] max-lg:text-[16px] w-[400px] max-lg:w-full leading-[25px]">
                  {item.desc}
                </p>
                <Link href={item.link || "#"}>
                  <Button className="bg-[#0f3bbe] flex items-center gap-2 w-full lg:w-1/3 max-lg:p-4 text-[14px] max-lg:text-[12px]">
                    Learn More
                    <ArrowRight className="w-5 h-5 max-lg:w-4 max-lg:h-4 text-white" />
                  </Button>
                </Link>
              </div>
              <div
                className={`overflow-hidden flex ${
                  index % 2 == 0 ? "justify-end" : ""
                } flex  w-full`}
              >
                <Image
                  width={500}
                  height={200}
                  src={item.image}
                  alt="Scrolling image"
                  className="object-contain rounded-[10px]"
                />
              </div>
            </div>
          ))}
      </section>
    </Fragment>
  );
}
