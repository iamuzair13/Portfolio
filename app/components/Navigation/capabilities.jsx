import { capabilities } from "@/app/mock/Navbar/capabilities";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";


export default function Capabilities() {
  return (
    <Fragment>
<<<<<<< HEAD
      <div className="flex flex-row max-lg:flex-col    max-lg:px-2">
        <div className="w-45 lg:border-r-1 border-gray-800 mr-4 ">
          <h4 className="font-semibold ">{capabilities[0].Design.title}</h4>
          {capabilities[0].Design.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-row  mt-2 justify-between group "
            >
=======
      <div className="flex flex-row max-lg:flex-col  max-lg:overflow-y-auto  max-lg:px-2">
        <div className="w-45 border-r-1 border-gray-800 mr-4 ">
          <h4 className="font-semibold ">{capabilities[0].Design.title}</h4>
          {capabilities[0].Design.items.map((item, index) => (
            <div key={index} className="flex flex-row  mt-2 justify-between group ">
>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
              <div className="flex flex-row gap-2 align-center  items-center ">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
<<<<<<< HEAD
                  className="block text-sm  ml-2 py-1   border-b-1 border-transparent group-hover:border-blue-600"
=======
                  className="block text-sm  ml-2 py-1   group-hover:border-b-1 border-blue-600"
>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
                >
                  {item.name}
                </Link>
              </div>
              {/* <ArrowRight className="hidden group-hover:block w-[15px] h-[15px] text-gray-500 group-hover:text-blue-600 group-hover:text-blue-600" /> */}
            </div>
          ))}
        </div>
<<<<<<< HEAD
        <div className="w-55 lg:lg:border-r-1 border-gray-800 mr-4 ">
          <h4 className="font-semibold">{capabilities[0].Development.title}</h4>
          {capabilities[0].Development.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-row mt-2 justify-between group w-50 "
            >
=======
        <div className="w-55 border-r-1 border-gray-800 mr-4 ">
          <h4 className="font-semibold">{capabilities[0].Development.title}</h4>
          {capabilities[0].Development.items.map((item, index) => (
            <div key={index} className="flex flex-row mt-2 justify-between group w-50 ">
>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
              <div className="flex flex-row gap-2 align-center  items-center ">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
<<<<<<< HEAD
                  className="block text-sm ml-2 py-1    border-b-1 border-transparent group-hover:border-blue-600"
=======
                  className="block text-sm ml-2 py-1   group-hover:border-b-1 border-blue-600"
>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
                >
                  {item.name}
                </Link>
              </div>
<<<<<<< HEAD
            </div>
          ))}
        </div>
        <div className="w-40  lg:border-r-1 border-gray-800">
=======
             
            </div>
          ))}
        </div>
        <div className="w-40  border-r-1 border-gray-800">
>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
          <h4 className="font-semibold">{capabilities[0].eCommerce.title}</h4>
          {capabilities[0].eCommerce.items.map((item, index) => (
            <div className="flex flex-row mt-2 justify-between group items-center ">
              <div className="flex flex-row gap-2 align-center  items-center ">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
<<<<<<< HEAD
                  className="block text-sm ml-2 py-1    border-b-1 border-transparent group-hover:border-blue-600"
=======
                  className="block text-sm ml-2 py-1   group-hover:border-b-1 border-blue-600"
>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
                >
                  {item.name}
                </Link>
              </div>
<<<<<<< HEAD
            </div>
          ))}
=======
             
            </div>
          ))}

>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
        </div>
        <div className="ml-4">
          <h4 className="font-semibold w-40 ">{capabilities[0].SEO.title}</h4>
          {capabilities[0].SEO.items.map((item, index) => (
            <div className="flex flex-row mt-2 justify-between group items-center ">
              <div className="flex flex-row gap-2 align-center  items-center ">
                {item.icon}

                <Link
                  href={item.link}
                  key={index}
<<<<<<< HEAD
                  className="block text-sm ml-2 py-1    border-b-1 border-transparent group-hover:border-blue-600"
=======
                  className="block text-sm ml-2 py-1   group-hover:border-b-1 border-blue-600"
>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
                >
                  {item.name}
                </Link>
              </div>
<<<<<<< HEAD
            </div>
          ))}
=======
             
            </div>
          ))}

>>>>>>> efbbdb1f069c76e433f2b475fd39b6400fb17163
        </div>
      </div>
    </Fragment>
  );
}
