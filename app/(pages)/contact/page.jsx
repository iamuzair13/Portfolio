import { Fragment } from "react";
import { LuRocket } from "react-icons/lu";
import { IoBagOutline, IoBookOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import MyMap from "@/app/components/Map";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cardData = [
  {
    icon: <LuRocket />,
    heading: "Sales",
    text: "Contact our sales team to discuss your needs and how we can help.",
  },
  {
    icon: <IoBagOutline />,
    heading: "Collaborations & Partnerships",
    text: "Contact our partnerships team to explore how we can work together.",
  },
  {
    icon: <IoBookOutline />,
    heading: "Media Inquiries",
    text: "For media inquiries, interviews, or press materials, reach out to our press team.",
  },
];

export default function Contact() {
  return (
    <Fragment>
      <section className=" sticky flex flex-row bg-gray-200  items-center  px-[5%] justify-start text-white bg-black  items-start ">

      </section>

      {/* Get in touch */}
      <section className="  flex flex-row max-lg:flex-col items-center lg:py-[50px] px-[5%] justify-evenly text-white bg-black  lg:items-start ">
        
        <div className="right lg:w-3/4 text-center ">
          <h2 className="text-[48px] max-lg:text-[32px] leading-[60px]">Get in touch</h2>
          <h4 className="text-[#a5acc0] text-[24px] max-lg:text-[16px] leading-[36px] max-lg:leading-[24px]">

            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us.
          </h4>
        </div>
      </section>

      {/* card */}
      <section className="  flex flex-row max-lg:flex-col gap-6 items-center  max-lg:py-4 px-[5%] justify-evenly text-white bg-black  items-start ">

        {cardData.map((item, index) => {
          return (
            <div
              key={index}
              className=" border border-[#2f3030ff] flex flex-col justify-between md:h-[250px] transition-colors duration-300 ease-in-out hover:border-[#0a49eb] rounded-[10px] lg:w-1/3 p-8 cursor-pointer "
            >
              <span className="text-[#0a49eb] text-[24px] ">{item.icon}</span>
              <h4 className="font-medium text-[20px] leading[30px]">
                {item.heading}
              </h4>

              <p className="w-full text[20px] leading[30px]">{item.text}</p>
              <div className="flex justify-end w-full ">
                <FaArrowRightLong />
              </div>
            </div>
          );
        })}
      </section>

      <section className="  flex flex-col max-lg:flex-col gap-6 items-center py-4  px-[5%] justify-center text-white bg-black  items-center">
=======

        <div className=" text-center space-y-8">
          <h2 className="text-[48px] max-lg:text-[32px] max-lg:leading-[42px]  leading-[60px] max-lg:text-center">
            Find us in the Heart of San Diego.
          </h2>
          <h4 className="text-[#a5acc0] text-[24px] max-lg:text-[16px] max-lg:leading-[24px] leading-[36px] max-lg:text-center">
            We’re in the Gaslamp Quarter, surrounded by good food, good vibes,
            and great work.
          </h4>
        </div>
      </section>

      {/* Map */}
      <section className="  flex flex-row max-lg:flex-col gap-6 items-center lg:h-[100vh]  px-[5%] justify-between text-white bg-black ">
        <div className="w-2/4 max-lg:w-full">

          <MyMap />
        </div>

        <div className="right lg:space-y-8 lg:w-1/4">
          <h4 className="text-[20px] max-lg:text-[16px] leading-[30px]">
            San Diego Headquarters
          </h4>
          <p className="text-[#a5acc0] text-[18px] max-lg:text-[12px] leading-[27px]">
            225 Broadway Suite 700 San Diego, CA 92101 United States
          </p>
          <h4 className="text-[20px] max-lg:text-[16px]  leading-[30px]">Phone</h4>
          <p className="text-[#a5acc0] text-[18px] max-lg:text-[12px] leading-[27px]">
            +1 (619) 594-5220
          </p>
        </div>
      </section>

      <section className="  flex flex-row  max-lg:flex-col gap-6 items-center lg:h-[100vh]  px-[5%] justify-center text-white bg-black  items-center">
        <Accordion
          type="single"
          collapsible
          className="w-full lg:w-[50%] "
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" className={'cursor-pointer hover:bg-[#08090c] p-4'}>
            <AccordionTrigger className={'hover:text-blue-600 text-[20px] max-lg:text-[16px] leading-[30px] cursor-pointer'}>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance  text-[18px] max-lg:text-[14px] leading-[27px] text-[#a5acc0]">

              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className={'cursor-pointer hover:bg-[#08090c] p-4'}>
            <AccordionTrigger  className={'hover:text-blue-600 text-[20px] max-lg:text-[16px] leading-[30px] cursor-pointer'}>Shipping Details</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance  text-[18px] max-lg:text-[14px] leading-[27px] text-[#a5acc0]">

              <p>
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days.
              </p>
              <p>
                All orders are carefully packaged and fully insured. Track your
                shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </Fragment>
  );
}
