"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";
import { WordpressHostingProductsApi } from "@/apis/WordpressHostingPageAPIs";
import { TiTick } from "react-icons/ti";

import { RxCrossCircled } from "react-icons/rx";
type Props = {
  decodedSlug: string;
};

const WordPressHostingProducts = ({ decodedSlug }: Props) => {
  const currencyCode = useSelector((state: any) => state.currency);
  const [WordPressHostingProducts, setWordPressHostingProducts] = useState<any>(
    {}
  );

  console.log(WordPressHostingProducts, "WordPressHostingProducts");

  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await WordpressHostingProductsApi(
          currencyCode?.code?.slug,
          decodedSlug
        );

        setWordPressHostingProducts(response?.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerProducts();
  }, [currencyCode]);

  return (
    <div className="max-w-7xl mx-auto lg:py-16 py-6 px-4">
      <div className="overflow-x-auto">
        <div className="lg:px-4 px-0 ">
          {WordPressHostingProducts?.Active === true && (
            <>
              <div
                className="sm:text-4xl text-3xl mb-2 text-center font-semibold"
                dangerouslySetInnerHTML={{
                  __html: WordPressHostingProducts?.ProductDetails[0]?.heading,
                }}
              ></div>
              {!WordPressHostingProducts?.ProductDetails[0]
                ?.description ? null : (
                <div
                  className="text-lg lg:text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html:
                      WordPressHostingProducts?.ProductDetails[0]?.description,
                  }}
                ></div>
              )}
            </>
          )}
        </div>

        {WordPressHostingProducts?.ProductDetails?.length > 0 && (
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse">
              <thead className="">
                <tr className=" bg-bullt-quaternary/[0.07] text-white rounded-xl">
                  <th className="p-6 text-left border border-gray-50 font-bold text-lg uppercase tracking-wider text-bullt-primary ">
                    Features
                  </th>
                  {WordPressHostingProducts?.ProductDetails[0]?.wordpress_data?.map(
                    (plan: any, index: number) => (
                      <th
                        key={index}
                        className="p-6 text-center border border-gray-50"
                      >
                        <div className="flex flex-col justify-center items-center gap-2">
                          <span className="font-bold text-lg uppercase tracking-wider text-bullt-primary">
                            {plan?.plan_name}
                          </span>
                          <div className="flex gap-1 items-center">
                            {plan?.pricing.length > 0 ? (
                              <>
                                {plan?.pricing?.map((price: any, idx: any) => (
                                  <div
                                    className="text-bullt-primary flex gap-[2px] font-semibold text-lg"
                                    key={idx}
                                  >
                                    <span>{price?.icon}</span>
                                    <span>{price?.price}</span>
                                    <span>{price?.country}</span>
                                  </div>
                                ))}
                                <span className="text-sm font-semibold text-bullt-primary">
                                  /{plan?.period}
                                </span>
                              </>
                            ) : null}
                          </div>
                          {plan?.button_text && (
                            <div className="w-full flex justify-center ">
                              <Link
                                href={plan?.button_link}
                                className="px-6 font-normal bg-bullt-tertiary hover:bg-bullt-secondary hover:text-bullt-tertiary hover:border-bullt-tertiary border border-bullt-tertiary text-white py-1 rounded-lg transition-all duration-300"
                              >
                                <div className="group-hover:scale-100 flex gap-1">
                                  <BsStars size={20} />

                                  {plan?.button_text}
                                </div>
                              </Link>
                            </div>
                          )}
                        </div>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Websites Hosted",
                    key: "speed_network",
                  },
                  { feature: "CPU (Cores)", key: "cpu_cores_" },
                  {
                    feature: "Memory",
                    key: "memory",
                  },
                  {
                    feature: "Free cPanel/WHM",
                    key: "free_cPanel",
                  },
                  {
                    feature: "Full Management",
                    key: "full_Management",
                  },
                  {
                    feature: "Priority Technical Support",
                    key: "priority_technical_support",
                  },
                  {
                    feature: "7-Days MoneyBack Guarantee",
                    key: "days_moneyBack_guarantee",
                  },
                  {
                    feature: "Multiple Server Locations",
                    key: "multiple_server_locations",
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-bullt-quaternary/[0.04]"
                    } hover:bg-bullt-quaternary/[0.04] transition-colors`}
                  >
                    <td className="border p-4 text-left font-semibold text-gray-800">
                      {item.feature}
                    </td>
                    {WordPressHostingProducts?.ProductDetails[0]?.wordpress_data?.map(
                      (plan: any, index: number) => (
                        <td key={index} className="border p-4 text-center">
                          {plan?.[item.key] === " " ? (
                            <>
                              <RxCrossCircled className="text-red-700 text-lg mx-auto" />
                            </>
                          ) : (
                            <span>
                              {plan?.[item.key] === "Yes" ? (
                                <>
                                  <TiTick className="text-green-700 text-lg mx-auto" />
                                </>
                              ) : (
                                <>{plan?.[item.key]}</>
                              )}
                            </span>
                          )}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordPressHostingProducts;
