"use client";
import { WebsiteSecurityPageApi } from "@/apis/WebsiteSecurityApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { useSelector } from "react-redux";
type Props = { decodedSlug: any };

const OneTimeProtectionStripe = ({ decodedSlug }: Props) => {
  const currencyCode = useSelector((state: any) => state.currency);
  const [OneTimeProtectionProducts, setOneTimeProtectionProducts] =
    useState<any>({});

  useEffect(() => {
    const fetchServerProducts = async () => {
      try {
        const response = await WebsiteSecurityPageApi(
          currencyCode?.code?.slug,
          decodedSlug
        );

        setOneTimeProtectionProducts(response?.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServerProducts();
  }, [currencyCode]);

  return (
    <div className="w-full bg-bullt-quaternary md:h-[150px] h-[200px] flex justify-center items-center ">
      {OneTimeProtectionProducts?.data ? (
        <div className="w-full max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-center gap-4 py-6">
          <div className="flex lg:flex-row flex-col justify-center items-center gap-1">
            {OneTimeProtectionProducts?.data[0]?.One_Time_protection
              ?.heading && (
              <h3 className="md:text-2xl text-xl font-semibold text-white">
                {
                  OneTimeProtectionProducts?.data[0]?.One_Time_protection
                    ?.heading
                }
              </h3>
            )}
            {OneTimeProtectionProducts?.data[0]?.One_Time_protection
              ?.One_Time_Price.length > 0 && (
              <>
                {OneTimeProtectionProducts?.data[0]?.One_Time_protection?.One_Time_Price?.map(
                  (price: any, idx: any) => (
                    <div
                      className="md:text-2xl text-xl font-semibold text-white underline "
                      key={idx}
                    >
                      {price?.icon}
                      {price?.price}
                      {price?.country}
                    </div>
                  )
                )}
              </>
            )}
          </div>
          <div>
            {OneTimeProtectionProducts?.data[0]?.One_Time_protection
              ?.button_text && (
              <div className="w-full flex justify-center ">
                <Link
                  href={
                    OneTimeProtectionProducts?.data[0]?.One_Time_protection
                      ?.button_link
                  }
                  className=" px-6 font-normal bg-bullt-tertiary hover:bg-bullt-secondary hover:text-bullt-tertiary hover:border-bullt-tertiary border border-bullt-tertiary text-white py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="group-hover:scale-100 flex gap-1 text-lg">
                    <BsStars size={20} />

                    {
                      OneTimeProtectionProducts?.data[0]?.One_Time_protection
                        ?.button_text
                    }
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OneTimeProtectionStripe;
