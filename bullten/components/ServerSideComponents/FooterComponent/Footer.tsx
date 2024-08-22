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

const Footer: React.FC = async () => {
  const footerResponse = await footerApi();
  const footerMapResponse = await footerMapApi();
  console.log("footerMapResponse", footerMapResponse);

  return (
    <>
      {footerResponse?.result ? (
        <footer className="bg-bullt-background/[0.9]">
          <FooterMap footerMapResponse={footerMapResponse?.result?.map_data} />

          <div className="w-full rounded-lg lg:rounded-none px-3 lg:px-8 bg-bullt-text-primary">
            <div className=" mb-3 pt-8 shadow-sm rounded-lg container mx-auto gap-3 ">
              <div className="flex justify-between border-b border-bullt-primary px-4 py-2 bg-bullt-secondary rounded-md">
                <div className="w-[300px] h-[70px] relative">
                  <Link href="/">
                    <Image
                      className="object-contain"
                      src="/logo-bullten.png"
                      alt=""
                      fill={true}
                    />
                  </Link>
                </div>

                <div className="w-full flex items-center justify-end py-3 gap-2 lg:gap-4">
                  {footerResponse?.result?.socialMediaLinks?.map(
                    (socialMedia: any, index: number) => (
                      <div
                        className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] p-1 relative rounded-full "
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
              <div className="w-full lg:col-span-9 col-span-12 flex lg:flex-row flex-col py-8 lg:gap-3 gap-1 px-4 lg:px-6 ">
                <div className=" flex flex-col items-center ">
                  <div className=" flex justify-between flex-col items-center w-full">
                    <div className="">
                      {footerResponse?.result?.Discription?.map(
                        (content: any, index: number) => (
                          <div key={index}>
                            <h5 className="font-bold text-xl  text-bullt-text-secondary">
                              {content?.footerHeading}
                            </h5>
                            <h5 className="text-base text-justify text-bullt-text-secondary pt-4">
                              {content?.footerDescription}
                            </h5>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                {footerResponse?.result?.FooterLinks?.map(
                  (menu: any, index: number) => (
                    <div
                      className="w-full col-span-5 text-center lg:text-left ml-0 lg:ml-6 "
                      key={index}
                    >
                      <div className="w-full hidden lg:flex flex-col justify-center item-center gap-2 mt-6 lg:mt-0 ">
                        <h5 className="font-bold text-2xl lg:text-xl text-bullt-secondary">
                          {menu?.menuHeading}
                        </h5>
                        {menu?.menuPages?.map(
                          (menus: any, pageIndex: number) => (
                            <Link href={menus?.path} key={pageIndex}>
                              <h6 className="py-2 text-base lg:text-sm font-semibold text-bullt-secondary hover:font-bold hover:text-gray-400">
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
            </div>
            <div className="w-full container mx-auto flex justify-center lg:justify-between flex-wrap gap-2 py-4 border-t-[1px] border-tgh-primary/[0.2] ">
              <div>
                <h6 className="break-words text-center  text-sm text-bullt-secondary">
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
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
