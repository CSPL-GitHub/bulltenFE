// import Newsletter from "@/components/ClientSideComponents/NewsletterComponents/Newsletter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import FooterMap from "./FooterMap";
import { footerApi } from "@/apis/HomePageApis";

const Footer: React.FC = async () => {
  const footerResponse = await footerApi();
  if (footerResponse?.result?.hasOwnProperty("error")) {
    console.log("error in Footer API");
  }
  console.log("footer", footerResponse);
  return (
    <>
      {footerResponse?.result ? (
        <footer>
          <FooterMap />

          <div className="w-full mt-16 rounded-lg lg:rounded-none pt-6 lg:pt-16 pb-7 px-3 lg:px-10 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
            <div className="container mx-auto grid grid-cols-12 gap-3 ">
              <div className="lg:col-span-3 col-span-12 md:col-span-12 flex flex-col items-center">
                <div className=" bg-gray-200 shadow-sm rounded-lg p-3 ">
                  <Link href="/">
                    <div className="w-full h-[70px] relative">
                      {/* <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${footerResponse?.result?.logo}`}
                    alt={footerResponse?.result?.logo_alternate_text}
                    className="sm:rounded-[20%] rounded-[20%]"
                    fill={true}
                  /> */}
                      <Image
                        className="rounded-[20%] object-contain"
                        src="/logo-bullten.png"
                        alt=""
                        fill={true}
                      />
                    </div>
                  </Link>
                  <span className="">
                    {/* <h5 className="font-bold  text-xl">
                    {footerResponse?.result?.title}
                    About Us
                  </h5> */}
                    <h6 className="py-4 text-sm text-justify">
                      {/* {footerResponse?.result?.description} */}
                      About Us We are bounded to provide all time customer
                      support to our customers, at any time they are needed. You
                      can contact us anytime. We will be there with you for any
                      help needed from your side and will try our best to
                      provide you with the solutions to overcome your problems.
                    </h6>
                  </span>
                  <div className="w-full flex items-center justify-center py-3  gap-8">
                    {footerResponse?.result?.socialMediaLinks?.map(
                      (socialMedia: any, index: number) => (
                        <div
                          className="w-[40px] h-[40px] p-1 relative"
                          key={index}
                        >
                          <a href={socialMedia.link}>
                            <Image
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
              <div className="w-full lg:col-span-9 col-span-12 flex lg:flex-row flex-col gap-3 lg:ml-6 ml-0">
                {footerResponse?.result?.FooterLinks?.map(
                  (menu: any, index: number) => (
                    <div
                      className="w-full col-span-5 text-center lg:text-left"
                      key={index}
                    >
                      <div className="w-full flex flex-col justify-center item-center gap-2 mt-6 lg:mt-0">
                        <h5 className="font-bold text-xl lg:text-md  text-bullt-secondary">
                          {menu?.menuHeading}
                        </h5>
                        {menu?.menuPages?.map(
                          (menus: any, pageIndex: number) => (
                            <Link href={menus?.path} key={pageIndex}>
                              <h6 className="py-2 text-base lg:text-sm font-normal text-bullt-secondary hover:font-semibold hover:text-gray-400">
                                {menus?.title}
                              </h6>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="w-full lg:col-span-4 col-span-12 flex flex-col items-center justify-start sm:p-1 p-0">
                <div className="lg:block hidden">{/* <Newsletter /> */}</div>
              </div>
            </div>
            <div className="w-full flex justify-center flex-wrap gap-2 py-2 border-t-[1px] border-tgh-primary/[0.2] ">
              <h6 className="text-tgh-secondary break-words text-sm">
                {/* {footerResponse?.result?.copyright} */}
              </h6>
              <h6 className="text-tgh-secondary break-words text-sm">
                {/* {footerResponse?.result?.policy} */}
              </h6>
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
