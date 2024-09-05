import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BlogSectionApi } from "@/apis/HomePageApis";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import BlogCartComponent from "@/components/ClientSideComponents/HomePageComponents/BlogCartComponent";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";

const BlogsComponent = async () => {
  const blogResponse = await BlogSectionApi();
  return (
    <>
      {/* bg-[url('https://wp2022.kodesolution.com/oitech/wp-content/uploads/2022/10/dvblog.jpg')] */}
      {blogResponse?.result?.Active === true ? (
        <div className="relative w-full  bg-cover bg-center bg-no-repeat">
          <section className="flex lg:flex-row flex-col items-center justify-center w-full sm:py-4 py-2 rounded-md backdrop-blur-md pb-16 lg:pb-0">
            <div
              className="flex flex-col items-start justify-start lg:w-[50%] w-full lg:h-[530px] h-full  mx-1 bg-fill bg-center lg:p-20 sm:p-5 px-4 py-2"
              style={{
                backgroundImage: `url('https://wp2022.kodesolution.com/oitech/wp-content/uploads/2022/10/dvblog.jpg')`,
              }}
            >
              {blogResponse?.result?.data?.label && (
                <div className="text-bullt-text-quinary">
                  <SloganHeadingComponent alignmentType={2} paddingTop={1}>
                    {blogResponse?.result?.data?.label}
                  </SloganHeadingComponent>
                </div>
              )}
              {blogResponse?.result?.data?.heading && (
                <MainHeadingComponent alignmentType={2} paddingTop={1}>
                  {blogResponse?.result?.data?.heading}
                </MainHeadingComponent>
              )}
              {blogResponse?.result?.data?.description && (
                <div className="lg:w-[90%] w-full">
                  <ParaGraphText alignmentType={2} paddingTop={1}>
                    {blogResponse?.result?.data?.description}
                  </ParaGraphText>
                </div>
              )}
            </div>

            <div className="lg:w-[60%] w-full z-10 lg:-ml-32 ml-0 ">
              <BlogCartComponent blogResponse={blogResponse} />
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default BlogsComponent;
