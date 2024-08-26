import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BlogSectionApi } from "@/apis/HomePageApis";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import BlogCartComponent from "@/components/ClientSideComponents/HomePageComponents/BlogCartComponent";

const BlogsComponent = async () => {
  const blogResponse = await BlogSectionApi();
  console.log("blogResponse", blogResponse?.result);
  return (
    <>
      {blogResponse?.result?.Active === true ? (
        <>
          <div className="flex flex-col justify-center items-center gap-2 px-4 py-2">
            <div className="text-center">
              {blogResponse?.result?.data?.label ? (
                <>
                  <SloganHeadingComponent alignmentType={2} paddingTop={1}>
                    {blogResponse?.result?.data?.label}
                  </SloganHeadingComponent>
                </>
              ) : null}
              {blogResponse?.result?.data?.heading ? (
                <h1 className="text-4xl font-bold text-gray-800">
                  {blogResponse?.result?.data?.heading}
                </h1>
              ) : null}
              {blogResponse?.result?.data?.description ? (
                <>
                  <ParaGraphText alignmentType={2} paddingTop={1}>
                    {blogResponse?.result?.data?.description}
                  </ParaGraphText>
                </>
              ) : null}
            </div>
          
          </div>
          <BlogCartComponent blogResponse={blogResponse}/>
        </>
      ) : null}
    </>
  );
};

export default BlogsComponent;
