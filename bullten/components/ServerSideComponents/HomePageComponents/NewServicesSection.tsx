import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import Image from "next/image";
import React from "react";

type Service = {
  image: string;
  alt_text?: string;
  heading: string;
  description: string;
  price?: string;
  buttonText?: string;
  buttonLink?: string;
  currency?: string;
};

type Props = {
  services: Service[];
};

const NewServicesSection = ({ services }: Props) => {
  console.log("serviceOurSection", services);

  return (
    <section className=" py-3">
      <div className="container mx-auto px-6">
        {/* First Row: 3 Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-2 justify-center py-3 ">
          {services?.slice?.(0, 3)?.map?.((service, index) => (
            <div
              key={service.heading || index}
              className="relative flex flex-col items-start justify-start gap-3 bg-white p-6 rounded-lg shadow-lg overflow-hidden hover:before:h-full before:absolute before:top-0 before:right-0 before:w-[4px] before:h-0 before:bg-bullt-tertiary before:transition-all before:duration-500 hover:shadow-xl "
            >
              <h3 className="text-xl font-bold  text-gray-900 mb-2 px-5 line-clamp-2">
                {service?.heading}
              </h3>
              <div className="grid grid-cols-3 items-start justify-start mt-1">
                <div className="w-auto h-[70px] relative col-span-1">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${service?.image}`}
                    alt={service?.alt_text || "Service Image"}
                    fill
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full col-span-2">
                  <p className="text-gray-700 text-[14px] line-clamp-5 ">
                    {service?.description}
                  </p>
                  {service?.price && (
                    <p className=" text-[14px] font-semibold mt-4">
                      Starting at:
                      <span className="text-bullt-tertiary text-[16px] font-normal px-2 ">
                        {service?.price}
                      </span>
                      <span className="text-[14px] font-semibold">
                        {service?.currency}
                      </span>
                    </p>
                  )}
                  {service?.buttonText && (
                    <a href={service?.buttonLink} className="mt-2">
                      <HomePageButtonOne
                        alignmentType={1}
                        buttonText={`${service?.buttonText}`}
                        route={""}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 justify-center md:mt-0 -mt-1 ">
          {services?.slice(3, 5)?.map?.((service, index) => (
            <div
              key={service.heading || index}
              className="relative flex flex-col items-start justify-start gap-3 bg-white p-6 rounded-lg shadow-lg overflow-hidden hover:before:h-full before:absolute before:top-0 before:right-0 before:w-[4px] before:h-0 before:bg-bullt-tertiary before:transition-all before:duration-500 hover:shadow-xl "
            >
              <h3 className="text-xl font-bold  text-gray-900 mb-2 px-5 line-clamp-2">
                {service?.heading}
              </h3>
              <div className="grid grid-cols-3 items-start justify-start mt-1">
                <div className="w-auto h-[70px] relative col-span-1">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${service?.image}`}
                    alt={service?.alt_text || "Service Image"}
                    fill
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div className="w-full col-span-2">
                  <p className="text-gray-700 text-[14px] sm:line-clamp-6 line-clamp-5 ">
                    {service?.description}
                  </p>
                  {service?.price && (
                    <p className=" text-[14px] font-semibold mt-4">
                      Starting at:
                      <span className="text-bullt-tertiary text-[16px] font-normal px-2 ">
                        {service?.price}
                      </span>
                      <span className="text-[14px] font-semibold">
                        {service?.currency}
                      </span>
                    </p>
                  )}
                  {service?.buttonText && (
                    <a href={service?.buttonLink} className="mt-2">
                      <HomePageButtonOne
                        alignmentType={1}
                        buttonText={`${service?.buttonText}`}
                        route={""}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServicesSection;
