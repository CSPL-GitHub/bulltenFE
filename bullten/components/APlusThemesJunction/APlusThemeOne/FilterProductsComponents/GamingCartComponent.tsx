"use client";
import Link from "next/link";
import React, { useState } from "react";


type Props = {
  ProductsData: any;
};

const GamingCartComponent = ({ ProductsData }: Props) => {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const toggleExpanded = (planName: string) => {
    setExpandedPlan(expandedPlan === planName ? null : planName);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-5 px-4 ">
        {ProductsData?.server_products?.map((plan: any, index: any) => (
          <div
            key={index}
            className="relative bg-[#1c1c28] border-[#323233] border-[2px] rounded-lg shadow-lg duration-300 rounded-br-lg mb-10 p-4"

          >
            <div className="px-4">
              <div className="relative w-full z-10 -mt-10 h-70 bg-gray-900 rounded-t-lg overflow-hidden shadow-md">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${plan?.image_for_gaming_server}`}
                  alt={plan?.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {plan?.isTrending && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                    Trending
                  </span>
                )}
              </div>

              <div className="py-4 flex flex-col gap-2">
                <h3 className="text-white font-semibold text-lg">{plan?.name}</h3>
                <p className="text-yellow-400 font-semibold">
                  Starting at {plan?.price}/month
                </p>
              </div>

              {plan?.buttonText && (
                <div className="mb-2">
                  <Link
                    href={plan?.buttonLink}
                    className="w-[60%] inline-block text-center py-2 text-lg text-white bg-bullt-tertiary hover:bg-bullt-secondary hover:text-bullt-tertiary rounded-md transition-colors duration-300"
                  >
                    {plan?.buttonText}
                  </Link>
                </div>
              )}
            </div>

            {expandedPlan === plan.name && (
              <div className="p-4 bg-[#2c2c3c] rounded-b-lg text-white border-t border-[#323233]">
                <ul className="list-disc ml-4 space-y-1">
                  {plan?.server_benifits.map((benefit: any, i: number) => (
                    <li key={i} className="text-sm">
                      {benefit?.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamingCartComponent;
