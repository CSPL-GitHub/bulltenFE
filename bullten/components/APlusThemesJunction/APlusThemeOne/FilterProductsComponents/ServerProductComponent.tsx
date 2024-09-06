"use client";
import { ProductDataApi } from "@/apis/productsApi";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
    <div className="container mx-auto py-4">
      <div className="lg:max-w-5xl w-full py-6 mx-auto ">
        <div
          className="text-center lg:text-4xl 2xl font-semibold "
          dangerouslySetInnerHTML={{
            __html: ProductsData?.heading,
          }}
        />
        <div
          className="text-center text-xl py-3"
          dangerouslySetInnerHTML={{
            __html: ProductsData?.description,
          }}
        />
      </div>
      <div className="px-4">
        {ProductsData?.server_products?.map((plan: any, index: any) => (
          <div key={index} className="border  rounded-md ">
            <div
              className="flex justify-between items-center p-4 bg-white rounded-t-md cursor-pointer h-[100px] transition "
              onClick={() => toggleExpanded(plan.name)}
            >
              <div className="flex w-4/5 justify-between items-center">
                <div
                  className="text-bullt-quaternary font-semibold text-lg col-span-2"
                  dangerouslySetInnerHTML={{
                    __html: plan.name,
                  }}
                />

                <div className="flex flex-col items-center col-span-2 gap-1">
                  <span className="text-md font-semibold">CPU </span>

                  <div
                    className="text-sm text-bullt-primary/[0.7]"
                    dangerouslySetInnerHTML={{
                      __html: plan?.Processor,
                    }}
                  />
                </div>

                <div className="flex flex-col items-center col-span-2 gap-1">
                  <span className="text-md font-semibold"> RAM </span>
                  <div
                    className="text-sm text-bullt-primary/[0.7]"
                    dangerouslySetInnerHTML={{
                      __html: plan.Memory,
                    }}
                  />
                </div>

                <div className="flex flex-col items-center col-span-2 gap-1">
                  <span className="text-md font-semibold"> Disks </span>

                  <ul className="grid md:grid-cols-3 grid-cols-2 gap-1 ">
                    {plan.disk_type.map((disk: any, i: number) => (
                      <div
                        className="flex items-center text-sm rounded-md font-normal"
                        dangerouslySetInnerHTML={{
                          __html: disk?.disk_type,
                        }}
                      />
                    ))}
                  </ul>
                </div>

                <span className="text-bullt-quaternary font-bold text-xl">
                  {plan.price}
                </span>
              </div>
              <div className="grid grid-cols-1 items-center">
                {plan?.buttonText ? (
                  <div>
                    <Link
                      href={plan?.buttonLink}
                      className="flex justify-start items-center gap-2 px-2 py-2 text-bullt-secondary bg-bullt-tertiary rounded cursor-pointer font-semibold text-xl"
                    >
                      <p
                        className="text-semibold transition-transform duration-500 "
                        onClick={() => handleAddToCart(plan.name)}
                      >
                        {plan?.buttonText}
                      </p>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>

            {expandedPlan === plan.name && (
              <div className="sm:flex bg-bullt-secondary p-2 gap-3 rounded-b-lg">
                <ul className="w-4/5 grid md:grid-cols-4 grid-cols-2 gap-4 list-inside border border-dashed p-4">
                  {plan.server_benifits.map((benefit: any, i: number) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="flex justify-center items-center bg-green-500 p-2 rounded-full h-4 w-4">
                        <span className="text-bullt-secondary text-xs font-thin">
                          ✔
                        </span>
                      </div>
                      <li className="flex items-center text-md font-normal">
                        {benefit.title}
                      </li>
                    </div>
                  ))}
                </ul>
                <div className="w-1/5 flex flex-col justify-start list-inside border border-dashed p-4">
                  <span className="font-semibold text-gray-700 mb-2 text-sm">
                    Server Locations:
                  </span>
                  <div className="flex space-x-2">
                    {plan.server_locations.map((location: any, i: number) => (
                      <span key={i} className="">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${location?.location_flag}`}
                          alt={location.alt_text || "Flag"}
                          className="w-6 h-4"
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">Selected Plan</h3>
          <p className="text-md">
            You have selected: <strong>{selectedPlan}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ServerProductsComponent;
