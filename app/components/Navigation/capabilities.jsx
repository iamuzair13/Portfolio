import { capabilities } from "@/app/mock/Navbar/capabilities";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";


export default function Capabilities() {
  return (
    <Fragment>
      <div className="flex flex-row max-lg:flex-col  max-lg:overflow-y-auto  max-lg:px-2">
        <div className="w-45 border-r-1 mr-4 ">
          <h4 className="font-semibold ">{capabilities[0].Design.title}</h4>
          {capabilities[0].Design.items.map((item, index) => (
            <div key={index} className="flex flex-row  mt-2 justify-between group ">
              <div className="flex flex-row gap-2 align-center group-hover:text-blue-600">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
                  className="block text-sm group-hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </div>
              <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" />
            </div>
          ))}
        </div>
        <div className="w-55 border-r-1 mr-4 ">
          <h4 className="font-semibold">{capabilities[0].Development.title}</h4>
          {capabilities[0].Development.items.map((item, index) => (
            <div className="flex flex-row mt-2 justify-between group w-50 ">
              <div className="flex flex-row gap-2 align-center group-hover:text-blue-600">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
                  className="block text-sm group-hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </div>
              <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" />
            </div>
          ))}
        </div>
        <div className="border-r-1">
          <h4 className="font-semibold w-40 ">{capabilities[0].SEO.title}</h4>
          {capabilities[0].SEO.items.map((item, index) => (
            <div className="flex flex-row mt-2 justify-between group items-center ">
              <div className="flex flex-row gap-2 align-center group-hover:text-blue-600">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
                  className="block text-sm group-hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </div>
              <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" />
            </div>
          ))}

        </div>
        <div className="w-40 ml-4">
          <h4 className="font-semibold">{capabilities[0].eCommerce.title}</h4>
          {capabilities[0].eCommerce.items.map((item, index) => (
            <div className="flex flex-row mt-2 justify-between group items-center ">
              <div className="flex flex-row gap-2 align-center group-hover:text-blue-600">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
                  className="block text-sm group-hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </div>
              <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" />
            </div>
          ))}

        </div>
      </div>
    </Fragment>
  );
}
