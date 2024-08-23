import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BlogSectionApi } from "@/apis/HomePageApis";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";

const BlogsComponent = async () => {
  const blogResponse = await BlogSectionApi();
  console.log("blogResponse", blogResponse?.result);
  return (
    <>
      {blogResponse?.result?.Active === true ? (
        <>
          <div className="flex flex-col justify-center items-center gap-2 px-4  bg-gradient-to-r from-blue-50 to-blue-50">
            <div className="text-center py-2">
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
            {blogResponse?.result?.data?.blogs?.length > 0 ? (
              <>
                {" "}
                <div className="w-full grid grid-cols-12 py-2 sm:px-4 px-2 gap-5 sm:mb-7">
                  {blogResponse?.result?.data?.blogs?.map((blog: any) => (
                    <div
                      className="lg:col-span-4 sm:col-span-4 col-span-12 w-full  flex flex-col justify-center items-center border rounded-xl p-4 gap-3"
                      key={blog?.id}
                    >
                      <div className="w-full h-[250px] relative">
                        {blog?.title ? (
                          <label className="bg-black text-white text-xs absolute px-4 py-1 rounded  flex justify-start z-[9]">
                            {blog?.title}
                          </label>
                        ) : null}
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${blog?.img}`}
                          alt={blog?.alt_text}
                          style={{
                            position: "absolute",
                            objectFit: "cover",
                            inset: 0,
                            borderRadius: "0.25rem 0.25rem 0 0",
                          }}
                          fill={true}
                        />
                      </div>
                      <div className="w-full h-[200px] flex flex-col justify-between items-center">
                        <div className="w-full">
                          <h3 className="w-full sm:text-xl text-lg font-semibold line-clamp-2">
                            {blog?.subtitle}
                          </h3>
                          <p className="w-full text-tgh-secondary text-sm line-clamp-4">
                            {blog?.description}
                          </p>
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <div className="w-full flex justify-center items-center gap-2 px-2 py-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-white text-white hover:text-black  border-[1px] rounded group cursor-pointer">
                            <p className="text-semibold transition-transform duration-500">
                              Read Blog
                            </p>
                            <div className="sm:opacity-0 opacity-100 sm:group-hover:opacity-100 transform transition-opacity duration-500">
                              <div className="sm:hidden sm:group-hover:block block">
                                <AiOutlineArrowRight size={20} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
};

export default BlogsComponent;
