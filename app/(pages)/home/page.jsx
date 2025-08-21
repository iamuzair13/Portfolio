"use client";

import WSButton from "@/app/UI/WSButton/WSButton";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ArrowRight, ChevronRight } from "lucide-react";

import { Fragment, useEffect, useState } from "react";
import ServiceCard from "@/app/components/homeComps/ServiceCard";
import Experts from "@/app/components/homeComps/Experts";

import { teamData } from "@/app/mock/TeamCard";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import BlogCard from "@/app/components/homeComps/BlogCard";
import HeroSection from "@/app/components/homeComps/Hero";
import { motion } from "framer-motion";

export default function Hero() {
  // Teams
  const [teamIndex, setTeamIndex] = useState(0);
  // backgrounds

  const [animateMobile, setAnimateMobile] = useState("");
  useEffect(() => {
    const handleResize = () => {
      setAnimateMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.2, ease: "easeInOut" }}
      >
        <section
          className={`relative overflow-hidden max-md:h-[80vh]  bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-10  px-[5%] lg:px-12 py-10`}
        >
          {/* Background Image */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="/videos/5818973-uhd_3840_2160_24fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Light Black Overlay */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          <HeroSection />
        </section>
      </motion.div>

      {/* Services */}
      <section className="  flex flex-col items-center justify-center   bg-black ">
        <div className="container  flex justify-center max-lg:p-4 lg:pt-[110px]">
          <div className="upper text-center lg:w-[72%]  space-y-8">
            <h2 className="text-[60px]  max-lg:text-[24px] text-center font-bold leading-tight text-white">
              Websites aren’t just part of what we do. They’re everything we do.
            </h2>
            <p className="text-[#a5acc0] text-center max-lg:text-[14px] text-[20px] leading-[30px]">
              We help B2B marketing teams turn outdated, underperforming
              websites into scalable, high-converting products that engage
              audiences, generate pipeline, and accelerate growth.
            </p>
          </div>
          <div className="lower">{/* <RobotSection/> */}</div>
        </div>

        <div className="w-full lg:pt-[200px]">
          <ServiceCard />
        </div>
      </section>
      {/* Stories */}
      <section className="  flex flex-row max-lg:flex-col items-center h-[80vh] max-lg:h-[60vh] px-[5%] justify-evenly  bg-black   ">
        <div className="lg:left lg:w-1/2">
          <h2 className="text-white text-[60px] max-lg:text-[24px] lg:leading-[70px] ">
            Brands you know.
            <br /> Results you’ll love.
          </h2>
        </div>
        <div className="right flex flex-col max-lg:justify-center max-lg:text-center max-lg:items-center ">
          <h4 className="text-[#a5acc0] text-[20px] max-lg:text-[16px]  pb-10">
            Real stories from companies that wanted more—and got it.
          </h4>
          <div>
            <WSButton
              value="View Client Stories"
              icon={
                <ChevronRight className="absolute inset-0 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
              }
              hovericon={
                <ArrowRight className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              }
            />
          </div>
        </div>
      </section>
      {/* Brands */}
      <section className=" px-[5%] bg-black   ">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          {/* Left Column */}
          <div className="w-full lg:w-[75%] space-y-4">
            {/* Top Grid */}
            <div className="flex flex-col lg:flex-row gap-4 ">
              {/* Top Left */}

              <div className="w-full lg:w-[350px]  flex flex-col gap-4 max-lg:h-[320px]">
                <div className="bg-[url('/images/Masonary/m-1.webp')] bg-cover bg-center h-full w-full rounded-xl flex flex-col justify-end shadow-md transition-transform duration-300 ease-in-out hover:scale-105 p-4">
                  <Avatar>
                    <AvatarImage
                      src="/Logos/logo-2.svg"
                      className="invert brightness-0"
                    />
                    <AvatarFallback>logo</AvatarFallback>
                  </Avatar>
                  <h2 className="text-white text-[16px] font-[500] leading-[30px]">
                    SevenRooms Serving Buyers A Modern Web Experience with
                    SevenRooms
                  </h2>
                </div>
              </div>

              {/* Top Right */}
              <div className="w-full flex flex-col justify-between gap-4">
                {/* Two Small Cards */}
                <div className="flex flex-col sm:flex-row w-full justify-between gap-4">
                  <div className="bg-[url('/images/Masonary/m-6.webp')] bg-cover bg-center h-[320px] w-full sm:w-[50%] rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col justify-end p-4">
                    <Avatar>
                      <AvatarImage
                        src="/Logos/logo-2.svg"
                        className="invert brightness-0"
                      />
                      <AvatarFallback>logo</AvatarFallback>
                    </Avatar>
                    <h2 className="text-white text-[16px] font-[500] leading-[30px]">
                      How Mutiny Achieves Leaner Marketing Website Operations
                      with Webstacks Subscription
                    </h2>
                  </div>
                  <div className="bg-[url('/images/Masonary/m-2.webp')] bg-cover bg-center h-[320px] w-full sm:w-[50%] rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col justify-end p-4">
                    <Avatar>
                      <AvatarImage
                        src="/Logos/logo-2.svg"
                        className="invert brightness-0"
                      />
                      <AvatarFallback>logo</AvatarFallback>
                    </Avatar>

                    <h2 className="text-white text-[16px] font-[500] leading-[30px]">
                      Circle's HubSpot Website Increases Product Demos by 500%
                    </h2>
                  </div>
                </div>

                {/* Logo Card */}
                <div className="hidden lg:flex h-[320px] w-full rounded-xl shadow-md px-5 justify-center items-center border border-blue-600 ">
                  <Avatar className="rounded-none w-[650px] text-center items-center">
                    <AvatarImage
                      className="w-[full]"
                      src="/Logos/ProgrammersSQUAD-final-logof.png"
                      alt="Logo"
                    />
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Bottom Full Width Image */}
            <div className="bg-[url('/images/Masonary/m-5.webp')] h-[350px] rounded-xl w-full bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-101 flex flex-col justify-end p-4">
              <Avatar>
                <AvatarImage
                  src="/Logos/logo-2.svg"
                  className="invert brightness-0"
                />
                <AvatarFallback>logo</AvatarFallback>
              </Avatar>
              <h2 className="text-white text-[16px] font-[500] leading-[30px]">
                ServiceTitan Fostering the Evolution of a SaaS Marketing Website
                with ServiceTitan
              </h2>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[25%] space-y-4">
            <div className="bg-[url('/images/Masonary/m-3.webp')] h-[400px] sm:h-[450px] lg:h-[500px] bg-cover rounded-xl bg-center transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col justify-end p-4">
              <Avatar>
                <AvatarImage src="/Logos/logo-2.svg" className="grayscale" />
                <AvatarFallback>logo</AvatarFallback>
              </Avatar>
              <h2 className="text-black text-[16px] font-[500] leading-[30px]">
                Redesigning Snowflake’s University and Educational Services
                Microsite
              </h2>
            </div>
            <div className="bg-[url('/images/Masonary/m-4.webp')] h-[400px] sm:h-[450px] lg:h-[500px] bg-cover rounded-xl bg-center transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col justify-end p-4">
              <Avatar>
                <AvatarImage
                  src="/Logos/logo-2.svg"
                  className="invert brightness-0"
                />
                <AvatarFallback>logo</AvatarFallback>
              </Avatar>
              <h2 className="text-white text-[16px] font-[500] leading-[24px]">
                Calendly’s Up-Market Website Strategy to Target Enterprise
                Customers
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* Experts */}
      <section className="  flex flex-row max-lg:flex-col items-center h-[30vh] max-lg:h-[50vh] px-[5%] justify-evenly bg-black   ">
        <Experts />
      </section>
      {/* industries */}

      {/* Team */}
      <section className="  flex flex-row  max-lg:flex-col items-center h-[80vh] max-lg:h-[50vh] px-[5%] justify-evenly bg-black  max-lg:pt-50 ">
        {teamData.map((item, index) => {
          if (teamIndex === index) {
            return (
              <div className="left lg:w-1/2 space-y-6 " key={index}>
                <div className="upper flex lg:flex-row gap-x-3">
                  <div>
                    <Avatar>
                      <AvatarImage
                        src={item.image}
                        className="rounded-[20px] w-10 h-10"
                      />
                      <AvatarFallback>Team Membor</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-white">
                    <h4>{item.name}</h4>
                    <h4>{item.role}</h4>
                  </div>
                </div>
                <div className="lower h-[120px] text-white">
                  <p>{item.description}</p>
                </div>
                <div className="text-white space-x-3">
                  <button
                    className="cursor-pointer"
                    onClick={() => setTeamIndex(2)}
                  >
                    <FaRegArrowAltCircleLeft className=" w-8 h-8" />
                  </button>
                  <button onClick={() => setTeamIndex(3)}>
                    <FaRegArrowAltCircleRight className=" w-8 h-8" />
                  </button>
                </div>
              </div>
            );
          }
        })}
        ,
        <div className="right lg:w-1/2   flex flex-row  justify-center flex-wrap   ">
          {teamData.map((item, index) => {
            return (
              <div
                key={index}
                className={`border   transition-colors duration-300 ease-in-out rounded-[5px] ${
                  teamIndex === index ? "border-[#1663ff]" : "border-[#08090c]"
                }   lg:p-10 max-lg:p-5`}
                onClick={() => setTeamIndex(index)}
              >
                <Avatar>
                  <AvatarImage
                    src={item.icon}
                    className="w-25 h-10 grayscale"
                  />
                  <AvatarFallback>Team Member</AvatarFallback>
                </Avatar>
              </div>
            );
          })}
        </div>
      </section>
      {/* Blog */}
      <section className="  flex flex-col max-lg:flex-col items-center lg:h-[30vh] max-lg:h-[100vh] max-lg:pt-70 px-[5%] justify-evenly bg-black   ">
        <div className="lg:left space-y-10">
          <h2 className="text-white text-[60px] text-center max-lg:text-[24px] lg:leading-[70px] ">
            Check out our latest blog insights
          </h2>
          <h4 className="text-[#a5acc0] text-[20px] max-lg:text-[16px]  pb-10 text-center">
            Stay ahead with expert strategies, trends, and actionable tactics
            from the Webstacks team.
          </h4>
        </div>
      </section>
      {/* Blog Cards */}
      <section className="  flex flex-row  items-center justify-center bg-black ">
        <BlogCard />
      </section>
    </Fragment>
  );
}
