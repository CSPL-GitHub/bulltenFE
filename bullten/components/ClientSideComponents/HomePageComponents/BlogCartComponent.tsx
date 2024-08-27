"use client";
import React, { useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type Props = {
  blogResponse: any;
};

const BlogCartComponent: React.FC<Props> = ({ blogResponse }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
      {blogResponse?.result?.data?.blogs?.length > 0 ? (
        <Slider {...settings}>
          {blogResponse?.result?.data?.blogs?.map((blog: any) => (
            <div key={blog?.id} className="px-1">
              <div className="w-full flex flex-col justify-center items-center border rounded-xl p-3 gap-3">
                <div className="w-full h-[180px] relative">
                  {blog?.title ? (
                    <label className="bg-black text-white text-xs absolute bottom-1  px-4 py-1 rounded flex justify-end items-end z-[9]">
                      {blog?.title}
                    </label>
                  ) : null}
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${blog?.img}`}
                    alt={blog?.alt_text}
                    style={{
                      position: "absolute",
                      objectFit: "contain",
                      inset: 0,
                      borderRadius: "0.25rem 0.25rem 0 0 ",
                    }}
                    fill={true}
                  />
                </div>
                <div className="w-full h-[175px] flex flex-col justify-between items-center">
                  <div className="w-full">
                    <h3 className="w-full sm:text-lg text-lg font-semibold line-clamp-2">
                      {blog?.subtitle}
                    </h3>
                    <p className="w-full text-sm line-clamp-3">
                      {blog?.description}
                    </p>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <div className="w-full flex justify-center items-center gap-2 px-2 py-2 border-bullt-text-quinary bg-bullt-text-quinary hover:bg-white text-white hover:text-black border-[1px] rounded group cursor-pointer">
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
            </div>
          ))}
        </Slider>
      ) : null}
    </div>
  );
};

export default BlogCartComponent;
