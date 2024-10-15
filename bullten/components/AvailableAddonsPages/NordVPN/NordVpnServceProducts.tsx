"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";

import { NordVpnProductsApi } from "@/apis/NordVpnPageAPIs";

type Props = {
  decodedSlug: string;
};

const NordVpnProductsComponent = ({ decodedSlug }: Props) => {
  const currencyCode = useSelector((state: any) => state.currency);
  const [NordVpnProducts, setNordVpnProducts] = useState<any>({});

  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await NordVpnProductsApi(
          currencyCode?.code?.slug,
          decodedSlug
        );

        setNordVpnProducts(response?.result);
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
          {NordVpnProducts?.Active === true && (
            <>
              <div
                className="sm:text-4xl text-3xl mb-2 text-center font-semibold"
                dangerouslySetInnerHTML={{
                  __html: NordVpnProducts?.ProductVpnDetails[0]?.heading,
                }}
              ></div>
              {!NordVpnProducts?.ProductVpnDetails[0]?.description ? null : (
                <div
                  className="text-lg lg:text-lg text-center"
                  dangerouslySetInnerHTML={{
                    __html: NordVpnProducts?.ProductVpnDetails[0]?.description,
                  }}
                ></div>
              )}
            </>
          )}
        </div>

        {NordVpnProducts?.ProductVpnDetails?.length > 0 && (
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse rounded-md">
              <thead className="rounded-md">
                <tr className=" bg-bullt-quaternary/[0.07] text-white ">
                  <th className="p-6 text-left border border-gray-400 font-bold text-lg uppercase tracking-wider text-bullt-primary">
                    Features
                  </th>
                  {NordVpnProducts?.ProductVpnDetails[0]?.nord_vpn_data?.map(
                    (plan: any, index: number) => (
                      <th
                        key={index}
                        className="p-6 text-center border border-gray-400"
                      >
                        <div className="flex flex-col justify-center items-center gap-2">
                          <span className="font-bold text-lg uppercase tracking-wider text-bullt-primary">
                            {plan?.product_Time}
                          </span>
                          <div className="flex gap-1 items-center">
                            {plan?.pricing?.map((price: any, idx: any) => (
                              <div
                                className="text-bullt-primary font-semibold text-lg"
                                key={idx}
                              >
                                {price?.icon}
                                {price?.price}
                                {price?.country}
                              </div>
                            ))}
                            {plan?.product_Time && (
                              <span className="text-sm font-semibold text-bullt-primary">
                                /{plan?.product_Time}
                              </span>
                            )}
                          </div>
                          {plan?.button_text && (
                            <div className="w-full flex justify-center ">
                              <Link
                                href={plan?.button_link}
                                className=" px-6 font-normal bg-bullt-tertiary hover:bg-bullt-secondary hover:text-bullt-tertiary hover:border-bullt-tertiary border border-bullt-tertiary text-white py-1 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                  { feature: "No Restrictions", key: "restrictions" },
                  {
                    feature: "High Speed Network ",
                    key: "speed_network",
                  },
                  { feature: "Unlimited bandwidth", key: "bandwidth" },
                  {
                    feature: "256-bit AES Encryption",
                    key: "encryption",
                  },
                  {
                    feature: "1000+ Servers",
                    key: "servers",
                  },
                  {
                    feature: "24/7 US Based Support",
                    key: "support",
                  },
                  {
                    feature: "OpenVPN, L2TP-IPsec and PPTP protocol",
                    key: "protocols",
                  },
                  {
                    feature: "Simultaneous connections on up to 5 devices",
                    key: "devices",
                  },
                  {
                    feature: "Apps for Windows, Mac, iOS,Android, and Linux",
                    key: "apps",
                  },
                  { feature: "Unlimited Server Switching", key: "switching" },
                  { feature: "40+ Countries", key: "countries" },
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
                    {NordVpnProducts?.ProductVpnDetails[0]?.nord_vpn_data?.map(
                      (plan: any, index: number) => (
                        <td key={index} className="border p-4 text-center">
                          {plan?.[item.key]}
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

export default NordVpnProductsComponent;
