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
  console.log("blogResponse", blogResponse);
  return (
    <>
      {/* bg-[url('https://wp2022.kodesolution.com/oitech/wp-content/uploads/2022/10/dvblog.jpg')] */}
      {blogResponse?.result?.Active === true ? (
        <div className="relative w-full  bg-cover bg-center bg-no-repeat">
          <section className="flex sm:flex-row flex-col items-center justify-center w-full py-16 sm:px-6 px-3  rounded-md backdrop-blur-md">
            <div
              className="flex flex-col items-start justify-start sm:w-[40%] w-full sm:h-[530px] h-full sm:mx-10 mx-1 bg-fill bg-center sm:p-20 p-2"
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
                <div className="w-[90%]">
                  <ParaGraphText alignmentType={2} paddingTop={1}>
                    {blogResponse?.result?.data?.description}
                  </ParaGraphText>
                </div>
              )}
            </div>

            <div className="sm:w-[60%] w-full z-10 sm:-ml-32 ml-0 ">
              <BlogCartComponent blogResponse={blogResponse} />
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default BlogsComponent;
