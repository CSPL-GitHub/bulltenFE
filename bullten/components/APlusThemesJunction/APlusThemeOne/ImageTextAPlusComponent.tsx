"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  imageTextData: any;
}

const ImageTextAPlusComponent: React.FC<Props> = ({ imageTextData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log("imageTextData?.is_downloadable", imageTextData?.is_downloadable);
  return (
    <div
      className="w-full h-auto grid grid-cols-12 sm:gap-[50px] sm:px-0 px-4"
      style={{
        marginTop: `${imageTextData?.gap_top / 4}rem`,
        marginBottom: `${imageTextData?.gap_bottom / 4}rem`,
      }}
    >
      {imageTextData?.align_element === "left" && imageTextData?.image ? (
        <div
          className={`${
            imageTextData?.heading || imageTextData?.description
              ? imageTextData.image_size === 12
                ? "lg:col-span-12 h-[400px]"
                : imageTextData.image_size === 6
                ? "lg:col-span-6 sm:h-[400px] h-[200px] sm:mb-0 mb-4"
                : "lg:col-span-3"
              : "lg:col-span-12 h-[400px]"
          } col-span-12 flex items-center justify-center relative `}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
            alt={imageTextData?.heading}
            style={{
              position: "absolute",
              objectFit: "cover",
              inset: 0,
            }}
            fill={true}
            className="rounded-md h-full"
          />
        </div>
      ) : null}
      {imageTextData?.heading || imageTextData?.description ? (
        <div
          className={`${
            imageTextData?.image
              ? imageTextData.image_size === 12
                ? "lg:col-span-12"
                : imageTextData.image_size === 6
                ? "lg:col-span-6"
                : "lg:col-span-9"
              : "lg:col-span-12"
          } col-span-12 flex gap-2 flex-col items-start justify-center `}
        >
          {imageTextData?.heading ? (
            <div
              className="w-full text-tgh-text-primary text-start sm:text-4xl text-2xl"
              dangerouslySetInnerHTML={{ __html: imageTextData?.heading }}
            />
          ) : null}
          {imageTextData?.description ? (
            <div
              className="text-justify text-tgh-secondary tailwind-unreset "
              dangerouslySetInnerHTML={{ __html: imageTextData?.description }}
            />
          ) : null}
          {imageTextData?.button_text ? (
            <div>
              {imageTextData?.button_text && imageTextData?.is_downloadable ? (
                <div>
                  {/* <APlusButtonComponents ButtonName={imageTextData} /> */}
                </div>
              ) : (
                <Link
                  href={imageTextData?.button_link}
                  className="w-[300px] flex justify-center m-auto mt-4 items-center gap-2 px-2 py-2 bg-tgh-primary hover:bg-white text-white hover:text-tgh-primary border border-tgh-primary rounded group cursor-pointer"
                >
                  <p className="text-semibold transition-transform duration-500">
                    {imageTextData?.button_text}
                  </p>
                  <div className="sm:opacity-0 opacity-100 sm:group-hover:opacity-100 transform transition-opacity duration-500">
                    <div className="sm:hidden sm:group-hover:block block">
                      <AiOutlineArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ) : null}
        </div>
      ) : null}
      {imageTextData?.align_element === "right" && imageTextData?.image ? (
        <div
          className={`${
            imageTextData?.heading || imageTextData?.description
              ? imageTextData.image_size === 12
                ? "lg:col-span-12 h-[400px] "
                : imageTextData.image_size === 6
                ? "lg:col-span-6  h-[400px] my-2"
                : "lg:col-span-3"
              : "lg:col-span-12 h-[400px]"
          }  col-span-12 sm:flex hidden items-center justify-center relative `}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${imageTextData?.image}`}
            alt={imageTextData?.heading}
            style={{
              position: "absolute",
              objectFit: "cover",
              inset: 0,
            }}
            fill={true}
            className="rounded-md"
          />
        </div>
      ) : null}
    </div>
  );
};

export default ImageTextAPlusComponent;
