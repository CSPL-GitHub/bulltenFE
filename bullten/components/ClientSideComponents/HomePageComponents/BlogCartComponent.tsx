"use client";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="w-full">
      {blogResponse?.result?.data?.blogs?.length > 0 ? (
        <Slider {...settings}>
          {blogResponse?.result?.data?.blogs?.map((blog: any) => (
            <div key={blog?.id} className="px-2 ">
              <div className="relative w-full h-[450px] overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${blog?.img}`}
                  alt="Cart Image"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute h-[50%] bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-black/50 rounded-b-lg text-white backdrop-blur-sm">
                  <div className="w-full h-[80%]">
                    <h3 className="text-lg font-semibold line-clamp-2">
                      {blog?.subtitle}
                    </h3>
                    <p className="text-base line-clamp-3 mt-2">
                      {blog?.description}
                    </p>
                  </div>
                  <div className="bottom-0 w-full flex justify-end items-end ">
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
