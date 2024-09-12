// import { WhyUsSectionApi } from "@/apis/HomePageApis";
// import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
// import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
// import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
// import Image from "next/image";
// import React from "react";
// const WhyBulletinComponent = async () => {
//   const WhyUsSection = await WhyUsSectionApi();
//   const WhyUsSectionApiResponse = WhyUsSection?.result;
//   return (
//     <> {WhyUsSectionApiResponse?.Active === true ? (
//       <> <div className="container relative sm:py-6 py-2">
//         <div className="">
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             <div className="relative">
//               <div className="hidden lg:block">
//                 <div className="h-[500px] w-full ">
//                   <Image
//                     src={`${process.env.NEXT_PUBLIC_BASE_URL}${WhyUsSectionApiResponse?.data?.img}`}
//                     alt="Flipping Image"
//                     className="flip-image backface-hidden z-10 mt-50"
//                     style={{
//                       position: "absolute",
//                       objectFit: "cover",
//                       inset: 0,
//                     }}
//                     fill={true}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="w-full">
//               <div className="">
//                 <div className="py-14 lg:py-4 sm:px-12 px-4">
//                   {WhyUsSectionApiResponse?.data?.label ? (
//                     <>
//                       <SloganHeadingComponent
//                         alignmentType={1}
//                         paddingTop={1}
//                         hoverEffect="bullt-primary">
//                         {WhyUsSectionApiResponse?.data?.label}
//                       </SloganHeadingComponent>
//                     </>
//                   ) : null}
//                   {WhyUsSectionApiResponse?.data?.heading ? (
//                     <>
//                       <MainHeadingComponent alignmentType={1} paddingTop={1} hoverEffect="bullt-primary">
//                         {WhyUsSectionApiResponse?.data?.heading}
//                       </MainHeadingComponent>
//                     </>
//                   ) : null}
//                   {WhyUsSectionApiResponse?.data?.description ? (
//                     <>
//                       <ParaGraphText paddingTop={1} hoverEffect="bullt-primary">
//                         {WhyUsSectionApiResponse?.data?.description}
//                       </ParaGraphText>
//                     </>
//                   ) : null}
//                   <div className="overflow-style-none mt-4 space-y-6 lg:overflow-y-scroll lg:h-[550px]">
//                     {WhyUsSectionApiResponse?.data?.Feature?.length > 0 ? (
//                       <><div className="">
//                         {WhyUsSectionApiResponse?.data?.Feature?.map(
//                           (data: any, index: any) => (
//                             <div key={index} className="group flex items-center gap-4 py-8 border-b-[1px] border-gray-400 lg:h-[170px]">
//                               {data?.image ? <><div className="h-[80px] w-[100px] relative">
//                                 <Image
//                                   src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.image}`}
//                                   alt="Flipping Image"
//                                   className="p-3 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-x-[-1] bg-bullt-tertiary"
//                                   style={{
//                                     position: "absolute",
//                                     objectFit: "contain",
//                                     inset: 0,
//                                   }}
//                                   fill={true}
//                                 />
//                               </div></> : null}
//                               <div className="sm:w-[100%] w-full">
//                                 <p className="text-2xl font-semibold">
//                                   {data?.name}
//                                 </p>
//                                 <p className="text-sm lg:text-lg py-1 line-clamp-3"> {data?.description}</p>
//                               </div>
//                             </div>)
//                         )}
//                       </div>
//                       </>
//                     ) : null}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//     ) : null}
//     </>
//   );
// };

// export default WhyBulletinComponent;

import { WhyUsSectionApi } from "@/apis/HomePageApis";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import BulletPointTextComponent from "@/components/CommonComponents/HeadingComponents/BulletPointTextComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import Image from "next/image";
import React from "react";

const WhyBulletinComponent = async () => {
  const WhyUsSection = await WhyUsSectionApi();
  const WhyUsSectionApiResponse = WhyUsSection?.result;

  return (
    <>
      {WhyUsSectionApiResponse?.Active === true ? (
        <section className="flex flex-col md:flex-row py-6 w-full px-4 md:-mb-5 mb-0">
          <div className="w-full md:w-1/2 md:py-4">
            {WhyUsSectionApiResponse?.data?.img ? (
              <>
                <div className="h-[350px] md:h-[450px] w-full md:w-full relative my-auto">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${WhyUsSectionApiResponse?.data?.img}`}
                    alt={WhyUsSectionApiResponse?.data?.img_alt_text}
                    style={{
                      position: "absolute",
                      objectFit: "contain",
                      objectPosition: "center",
                      inset: 0,
                    }}
                    fill={true}
                    className="rounded-lg"
                  />
                </div>
              </>
            ) : null}
          </div>
          <div className="md:w-1/2 w-full px-4 ">
            <div className="">
              {WhyUsSectionApiResponse?.data?.label ? (
                <>
                  <h2 className="text-bullt-quaternary font-semibold">
                    {WhyUsSectionApiResponse?.data?.label}
                  </h2>
                </>
              ) : null}
              {WhyUsSectionApiResponse?.data?.heading ? (
                <>
                  <MainHeadingComponent alignmentType={1} paddingTop={1}>
                    {WhyUsSectionApiResponse?.data?.heading}
                  </MainHeadingComponent>
                </>
              ) : null}
              {WhyUsSectionApiResponse?.data?.description ? (
                <>
                  <ParaGraphText paddingTop={1}>
                    {WhyUsSectionApiResponse?.data?.description}
                  </ParaGraphText>
                </>
              ) : null}
              {WhyUsSectionApiResponse?.data?.Feature?.length > 0 ? (
                <>
                  <div className="sm:grid sm:grid-cols-2 gap-2 text-gray-700">
                    {WhyUsSectionApiResponse?.data?.Feature?.map(
                      (data: any, index: any) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-bullt-tertiary text-2xl font-semibold flex justify-center items-center rounded-full">
                            &#10003;
                          </span>
                          <h1 className="text-lg py-2">{data?.name}</h1>
                        </div>
                      )
                    )}
                  </div>
                </>
              ) : null}
            </div>
            <div className="md:mt-4 mt-2">
              <button className="bg-bullt-tertiary text-white text-xl px-5 py-2 rounded-md hover:bg-bullt-secondary hover:text-bullt-tertiary  border-[2px] border-bullt-tertiary transition-all">
                {WhyUsSectionApiResponse?.data?.button_txt}
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default WhyBulletinComponent;
