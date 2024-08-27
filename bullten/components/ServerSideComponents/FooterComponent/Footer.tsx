// import Newsletter from "@/components/ClientSideComponents/NewsletterComponents/Newsletter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import FooterMap from "./FooterMap";
import { footerApi, footerMapApi } from "@/apis/HomePageApis";
import FooterMobileMenu from "./FooterMobileMenu";
import CounterComponent from "../HomePageComponents/CounterComponent";

const Footer: React.FC = async () => {
  const footerResponse = await footerApi();
  const footerMapResponse = await footerMapApi();
  console.log("footerMapResponse", footerMapResponse);

  return (
    <>
      {footerResponse?.result ? (
        <footer className="container mx-auto w-full pt-10 px-6 rounded-md">
          <FooterMap footerMapResponse={footerMapResponse?.result?.map_data} />{" "}
          <div className="w-full rounded-lg lg:rounded-none relative ">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/map.png')`,
                filter: "brightness(0.5)", // Reduces the brightness of the background image
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="relative mb-3 pt-8 shadow-sm rounded-lg container mx-auto gap-3 bg-[#122358]  bg-opacity-90">
              <div className="w-full lg:col-span-9 col-span-12 flex lg:flex-row flex-col py-8 lg:gap-3 gap-1 px-4 lg:px-6">
                <div className="flex flex-col items-center">
                  <div className="flex justify-between flex-col items-center w-full">
                    <div className="">
                      {footerResponse?.result?.Discription?.map(
                        (content: any, index: number) => (
                          <div key={index}>
                            <h5 className="font-bold text-xl text-bullt-text-secondary">
                              {content?.footerHeading}
                            </h5>
                            <h5 className="text-base text-justify text-bullt-text-secondary pt-4">
                              {content?.footerDescription}
                            </h5>
                          </div>
                        )
                      )}
                    </div>
                    <div className="w-full flex items-center justify-start py-3 gap-2 lg:gap-4">
                      {footerResponse?.result?.socialMediaLinks?.map(
                        (socialMedia: any, index: number) => (
                          <div
                            className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] p-1 relative rounded-full"
                            key={index}
                          >
                            <a href={socialMedia.link}>
                              <Image
                                className="rounded-full"
                                src={`${process.env.NEXT_PUBLIC_BASE_URL}${socialMedia?.icon}`}
                                alt={socialMedia?.alt_txt}
                                style={{
                                  position: "absolute",
                                  objectFit: "contain",
                                }}
                                fill={true}
                              />
                            </a>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                {footerResponse?.result?.FooterLinks?.map(
                  (menu: any, index: number) => (
                    <div
                      className="w-full col-span-5 text-center lg:text-left ml-0 lg:ml-6"
                      key={index}
                    >
                      <div className="w-full hidden lg:flex flex-col justify-center item-center gap-2 mt-6 lg:mt-0">
                        <h5 className="font-bold text-2xl lg:text-xl text-bullt-secondary">
                          {menu?.menuHeading}
                        </h5>
                        {menu?.menuPages?.map(
                          (menus: any, pageIndex: number) => (
                            <Link href={menus?.path} key={pageIndex}>
                              <h6 className="py-2 text-base lg:text-sm font-normal text-bullt-secondary hover:font-semibold hover:text-gray-400 ">
                                {menus?.title}
                              </h6>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
                <div className="lg:hidden block">
                  <FooterMobileMenu
                    Menus={footerResponse?.result?.FooterLinks}
                  />
                </div>
              </div>

              <div className="relative w-full container mx-auto flex justify-center lg:justify-between flex-wrap gap-2 py-4 border-t-[1px] px-4 lg:px-6">
                <div>
                  <h6 className="break-words text-center text-sm text-bullt-secondary">
                    {footerResponse?.result?.copyRightText}{" "}
                    {footerResponse?.result?.policyText}
                  </h6>
                </div>
                <div className="flex gap-2">
                  {footerResponse?.result?.legalinformation.map(
                    (info: any, index: number) => (
                      <Link key={index} href={info?.link}>
                        <h6 className="break-words text-sm text-bullt-secondary">
                          {info?.heading}
                        </h6>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
