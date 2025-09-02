'use client'

import { capabilities } from "@/app/mock/Navbar/capabilities";
import WSButton from "@/app/UI/WSButton/WSButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight,  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Fragment } from "react";


export default function ServicePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { category, service } = params;
  const index = searchParams.get("index");

  const normalizedCategory = Object.keys(capabilities[0]).find(
    (key) => key.toLowerCase() === category.toLowerCase()
  );

  const selectedCategory = capabilities[0][normalizedCategory];
  const selectedService = selectedCategory?.items[index];

  // Move conditional logic here
  if (!selectedCategory || !selectedService) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[100vh] bg-black text-white px-6"
        style={{
          background: "linear-gradient(135deg, #0f2027 0%, #2c5364 100%)",
        }}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#0f3bbe]">{service} in {category} Not Found</h2>
        <p className="text-lg mb-8 text-gray-300 text-center max-w-md">
          Sorry, the service you are looking for does not exist or is currently unavailable.
        </p>
        <Link href="/">
          <button className="bg-[#0f3bbe] cursor-pointer hover:bg-[#1e4bb8] text-white font-semibold py-2 px-6 rounded transition">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <Fragment>
      <section
        className="relative flex flex-col items-center h-[calc(100vh-70px)] py-10 px-[5%] justify-center gap-10 bg-black bg-cover bg-center bg-no-repeat max-lg:pt-[70px]"
        style={{
          backgroundImage: `url(${selectedService?.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="w-full lg:w-[70%]  z-1">
          <h2 className="text-white text-[60px] text-center max-lg:text-[28px] lg:leading-[70px]">
            {selectedService.title}
          </h2>
        </div>
        <div className="w-full flex flex-col items-center max-lg:text-center  z-1">
          <h4 className="text-[#a5acc0] text-[20px] max-lg:text-[16px] w-[50%] max-lg:w-full text-center pb-10">
            {selectedService.desc}
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
              Our team of experienced designers and developers work closely
              with you to create a website that not only looks great but also
              performs exceptionally well, driving traffic and conversions.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-10 items-center px-[5%] py-20 bg-black max-lg:pt-20">
        {/* Section Items */}
        {selectedCategory.items
          .filter((item) => item.name !== selectedService.name)
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

                <Link href={item.link}>
                  <Button className="bg-[#0f3bbe] flex items-center gap-2 w-full lg:w-1/3 max-lg:p-4 cursor-pointer text-[14px] max-lg:text-[12px]">
                    Learn More
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