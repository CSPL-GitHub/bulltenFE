"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight, FaTags, FaUser } from "react-icons/fa";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineComment,
} from "react-icons/ai";

type Props = {
  blogResponse: any;
};

const BlogCartComponent: React.FC<Props> = ({ blogResponse }) => {
  // Custom Arrow Component for Next Arrow
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute sm:bottom-[22px] -bottom-12 sm:-left-[50%] left-[55%] flex justify-end items-center cursor-pointer rounded-full  p-2"
        onClick={onClick}
      >
        <p className="bg-gray-300 rounded-full p-2 border border-gray-600">
          <AiOutlineArrowRight className="text-black sm:text-[28px] text-[18px] hover:text-gray-700" />
        </p>
      </div>
    );
  };

  // Custom Arrow Component for Previous Arrow
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute sm:bottom-[22px] -bottom-12 sm:-left-[60%] right-[55%] flex justify-start items-center cursor-pointer rounded-full p-2 sm:z-0 z-10"
        onClick={onClick}
      >
        <p className="bg-gray-300 rounded-full p-2 border border-gray-600">
          <AiOutlineArrowLeft className="text-black sm:text-[28px] text-[18px] hover:text-gray-700" />
        </p>
      </div>
    );
  };

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom previous arrow
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
    <div className="relative w-full bg-transparent">
      {blogResponse?.result?.data?.blogs?.length > 0 ? (
        <Slider {...settings}>
          {blogResponse?.result?.data?.blogs?.map((blog: any) => (
            <div key={blog?.id} className="px-2">
              <div className="relative flex flex-col w-full h-[340px] overflow-hidden rounded-lg shadow-lg group ">
                <div className="h-[50%] ">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${blog?.img}`}
                    alt="Blog Image"
                    className="w-full h-[200px] object-cover transition-transform duration-500 "
                  />{" "}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                  {blog?.date && (
                    <div className="absolute top-0 right-0 p-2  bg-bullt-tertiary text-white rounded-bl-lg">
                      <span className="text-xs font-bold">{blog?.date}</span>
                    </div>
                  )}
                </div>
                <div className="px-3 py-1 h-full bg-white rounded-b-lg text-black">
                  <div className="flex items-center mb-2">
                    {blog?.author && (
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <FaUser size={10} className=" text-bullt-tertiary" />
                        <span>{blog?.author?.slice?.(0, 8)} </span>
                      </div>
                    )}
                    {blog?.tag && (
                      <>
                        <span className="mx-2 text-xs text-gray-500">|</span>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <FaTags size={10} className=" text-bullt-tertiary" />
                          <span>{blog?.tag?.slice?.(0, 8)} </span>
                        </div>{" "}
                      </>
                    )}
                  </div>
                  {blog?.title && (
                    <div className="text-[18px] text-black hover:text-bullt-tertiary font-semibold">
                      <span className="line-clamp-1">{blog?.title}</span>
                    </div>
                  )}

                  {blog?.description && (
                    <div className="text-[14px] text-gray-600 font-semibold">
                      <span className="line-clamp-2">{blog?.description}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center mt-2">
                    <a
                      href="#"
                      className="text-[16px] text-gray-600 hover:underline flex items-center"
                    >
                      Read More
                      <FaLongArrowAltRight
                        size={15}
                        className="ml-1 -mt-[1px]"
                      />
                    </a>
                    {/* {blog?.comment && (
                      <div className="flex items-center text-[12px] text-gray-600">
                        <AiOutlineComment size={15} className="mr-1" />
                        <span>{blog?.comment} Comment</span>
                      </div>
                    )} */}
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
