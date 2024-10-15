"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  ProductsData: any;
};
const ServerProductsComponent = ({ ProductsData }: Props) => {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const toggleExpanded = (planName: string) => {
    setExpandedPlan(expandedPlan === planName ? null : planName);
  };

  const handleAddToCart = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-3 lg:gap-6">
        {ProductsData?.server_products?.map((plan: any, index: any) => (
          <div key={index} className="rounded-md">
            <div className="w-full flex lg:flex-row flex-col items-center gap-2 bg-white shadow-md lg:shadow-sm py-4 border rounded-md">
              <div
                className="lg:w-[85%] w-full grid grid-cols-2 md:grid-cols-6 gap-3 lg:gap-4 px-4 cursor-pointer transition"
                onClick={() => toggleExpanded(plan.name)}
              >
                {/* Plan Name */}
                <div className="flex justify-between col-span-2 md:col-span-1 text-bullt-quaternary font-semibold text-xl md:text-lg">
                  <div dangerouslySetInnerHTML={{ __html: plan.name }} />
                  <span className="font-semibold">
                    <IoIosArrowDown
                      size={25}
                      className={`text-bullt-tertiary text-2xl  cursor-pointer transform transition-transform duration-300 ${
                        expandedPlan === plan.name ? "rotate-180" : ""
                      }`}
                      onClick={() => toggleExpanded(plan.name)}
                    />
                  </span>
                </div>

                {/* CPU */}
                <div className="flex flex-col items-start gap-1">
                  <span className="text-md font-semibold">CPU</span>
                  <div
                    className="text-bullt-primary/[0.7] text-sm"
                    dangerouslySetInnerHTML={{ __html: plan?.Processor }}
                  />
                </div>

                {/* RAM */}
                <div className="flex flex-col items-start gap-1">
                  <span className="text-md font-semibold">RAM</span>
                  <div
                    className="text-bullt-primary/[0.7] text-sm"
                    dangerouslySetInnerHTML={{
                      __html: `${plan?.Memory}GB`,
                    }}
                  />
                </div>

                {/* Disks */}
                <div className="flex flex-col items-start gap-1">
                  <span className="text-md font-semibold">Disks</span>
                  <ul className="w-full grid grid-cols-2 gap-1">
                    {plan?.disk_type?.map((disk: any, i: number) => (
                      <li
                        key={i}
                        className="text-sm font-normal"
                        dangerouslySetInnerHTML={{
                          __html: disk?.disk_type,
                        }}
                      />
                    ))}
                  </ul>
                </div>

                {/* Delivered In */}
                <div className="flex flex-col items-start gap-1">
                  <span className="text-md font-semibold">Delivered in</span>
                  <div
                    className="text-bullt-primary/[0.7] text-sm"
                    dangerouslySetInnerHTML={{
                      __html: plan?.deliverytime,
                    }}
                  />
                </div>

                {/* Price */}
                <div className="flex flex-col items-start gap-1">
                  <span className="text-md font-semibold">Starting at</span>
                  <div className="flex gap-1 items-center">
                    <div
                      className="text-bullt-quaternary font-semibold text-md"
                      dangerouslySetInnerHTML={{
                        __html: `$ ${plan?.price}`,
                      }}
                    />
                    <span className="text-sm font-semibold">/Monthly</span>
                  </div>
                </div>
              </div>

              {plan?.buttonText && (
                <div className="w-full flex justify-center lg:w-[15%] lg:h-[40px] h-[50px]">
                  <Link
                    href={plan?.buttonLink}
                    className="flex justify-start items-center gap-2 px-6   text-bullt-secondary bg-bullt-tertiary hover:bg-bullt-secondary hover:border-bullt-tertiary border-[1px] hover:text-bullt-tertiary rounded cursor-pointer text-lg"
                  >
                    <p
                      className="transition-transform duration-500"
                      onClick={() => handleAddToCart(plan.name)}
                    >
                      {plan?.buttonText}
                    </p>
                  </Link>
                </div>
              )}
            </div>

            {expandedPlan === plan.name && (
              <div className="sm:flex bg-[#F0EFF9] p-2 gap-3 rounded-b-lg">
                <ul className="lg:w-4/5 w-full grid md:grid-cols-4 grid-cols-2 gap-4 list-inside border border-dashed p-4">
                  {plan.server_benifits.map((benefit: any, i: number) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="flex justify-center items-center bg-green-500 p-2 rounded-full h-4 w-4">
                        <span className="text-bullt-secondary text-xs font-thin">
                          ✔
                        </span>
                      </div>
                      <li className="flex items-center text-sm font-normal">
                        {benefit.title}
                      </li>
                    </div>
                  ))}
                </ul>
                <div className="lg:w-1/5 w-full flex flex-col justify-start list-inside border border-dashed p-4">
                  <span className="font-semibold text-gray-700 mb-2 text-lg">
                    Server Locations:
                  </span>
                  <div className="flex space-x-2">
                    {plan.server_locations.map((location: any, i: number) => (
                      <span key={i}>
                        {location?.location_flag && (
                          <div className="w-6 h-4 relative">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}${location?.location_flag}`}
                              alt={location.alt_text}
                              className=""
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* {selectedPlan && (
        <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">Selected Plan</h3>
          <p className="text-lg">
            You have selected: <strong>{selectedPlan}</strong>
          </p>
        </div>
      )} */}
    </div>
  );
};

export default ServerProductsComponent;
