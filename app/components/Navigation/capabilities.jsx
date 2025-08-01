import { capabilities } from "@/app/mock/Navbar/capabilities";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";


export default function Capabilities() {
  return (
    <Fragment>
      <div className="flex flex-row max-md:flex-col max-md:overflow-y-auto max-md:h-100 max-md:px-2">
        <div className="w-40  ">
          <h4 className="font-semibold">{capabilities[0].Design.title}</h4>
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
        <div>
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
        <div>
          <h4 className="font-semibold">{capabilities[0].SEO.title}</h4>
          {capabilities[0].SEO.items.map((item, index) => (
            <div className="flex flex-row mt-2 justify-between group ">
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
