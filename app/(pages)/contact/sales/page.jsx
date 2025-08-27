import { Fragment } from "react";
import { TbBoxAlignBottomLeft } from "react-icons/tb";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoQrCodeOutline } from "react-icons/io5";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Form from "@/app/components/Form";

const salesList = [
  {
    icon: <TbBoxAlignBottomLeft className="w-6 h-6 text-gray-600" />,
    span: "Websites Built to Scale",
    text: " See how Webstacks delivers websites that grow with your business—designed to handle increasing traffic, adapt to new features, and evolve with your needs effortlessly.",
  },

  {
    icon: <FaRegPlayCircle className="w-6 h-6 text-gray-600" />,
    span: "Personalized Demo ",
    text: "Get a walkthrough of our proven process for strategy, design, and development.",
  },
  {
    icon: <IoQrCodeOutline className="w-6 h-6 text-gray-600" />,
    span: "Leverage industry leading tech",
    text: " Learn how we use modern web frameworks, headless CMS platforms, and custom integrations to future-proof your digital presence.",
  },
];

const logos = [
  { logo: "/Logos/s-logo-1.svg" },
  { logo: "/Logos/s-logo-2.svg" },
  { logo: "/Logos/s-logo-3.svg" },
  { logo: "/Logos/s-logo-4.svg" },
  { logo: "/Logos/s-logo-5.png" },
  { logo: "/Logos/s-logo-6.svg" },
  { logo: "/Logos/s-logo-7.svg" },
  { logo: "/Logos/s-logo-8.svg" },
];

export default function Sales() {
  return (
    <Fragment>
      <section className="  flex flex-row max-lg:flex-col items-center    px-[5%] justify-start  text-black bg-white  items-start ">
        {/* <Breadcrumb /> */}
      </section>

      <section className="  flex flex-row gap-10 max-lg:flex-col  items-center lg:pt-[50px] px-[5%] justify-center  bg-white  items-center">
        <div className="left lg:w-1/2 flex flex-col gap-y-8 justify-between h-full">
          <p className="text-[16px] leading-[24px] text-[#08090c] ">
            A b2b technology web agency
          </p>
          <h2 className="text-[36px] leading-[54px] text-[#08090c] font-[500]">
            Ready to chat?
          </h2>
          <p className="text-[20px] leading-[30px] text-[#515a76]">
            Find out how Webstacks can help your company improve its web
            presence and achieve your business's website objectives.
          </p>
          <div className="space-y-6">
            {salesList.map((item, index) => {
              return (
                <div key={index} className="flex gap-2">
                  <span>{item.icon}</span>
                  <p className="text-[20px] leading-[30px] text-[#515a76] ">
                    <span className="text-[20px] leading-[30px] text-[#08090c]">
                      {item.span}
                    </span>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-[20px] leading-[30px] text-[#515a76]">
            Trusted by
          </p>

          {/* logos */}
          <div className="flex flex-wrap justify-between gap-x-8">
            {logos.map((item, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-[100px] h-[100px] flex items-center justify-center "
                >
                  <Avatar className="w-full h-full grayscale">
                    <AvatarImage
                      src={item.logo}
                      className="w-full h-full object-contain rounded-none"
                    />
                    <AvatarFallback>Logo</AvatarFallback>
                  </Avatar>
                </div>
              );
            })}
          </div>
        </div>

        {/* form */}
        <div className="right lg:w-1/2 max-lg:w-full bg-[#f2f2f2] p-4 rounded-[20px]">
          <Form />
        </div>
      </section>
    </Fragment>
  );
}
