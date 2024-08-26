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
  console.log("blogResponse", blogResponse?.result);
  return (
    <>
      {blogResponse?.result?.Active === true ? (
        <>
          <section className="px-4 pb-10">
            <div className="text-center py-5">
              {blogResponse?.result?.data?.label ? (
                <div className="text-bullt-text-quinary ">
                  <SloganHeadingComponent alignmentType={2} paddingTop={1}>
                    {blogResponse?.result?.data?.label}
                  </SloganHeadingComponent>
                  </div>
              
              ) : null}
              {blogResponse?.result?.data?.heading ? (
                <MainHeadingComponent alignmentType={2} paddingTop={1}>
                  {blogResponse?.result?.data?.heading}
                </MainHeadingComponent>
               
              ) : null}
              {blogResponse?.result?.data?.description ? (
                <>
                  <ParaGraphText alignmentType={2} paddingTop={1}>
                    {blogResponse?.result?.data?.description}
                  </ParaGraphText>
                </>
              ) : null}
            </div>
            <BlogCartComponent blogResponse={blogResponse}/>
          </section>
         
        </>
      ) : null}
    </>
  );
};

export default BlogsComponent;
