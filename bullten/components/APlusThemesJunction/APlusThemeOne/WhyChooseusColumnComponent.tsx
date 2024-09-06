import React from "react";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/whychoose.jpg";

interface Props {
  columnData: any;
}

const WhyChooseusColumnComponent: React.FC<Props> = ({ columnData }) => {
  return (
    <div
      className="relative py-4 lg:py-8 px-2 lg:px-8 border shadow-sm"
      style={{
        marginTop: `${columnData?.gap_top / 4}rem`,
        marginBottom: `${columnData?.gap_bottom / 4}rem`,
      }}
    >
      <div className="container mx-auto flex flex-col gap-4 md:flex-row">
        <div
          className="md:w-[40%] w-full flex flex-col justify-center items-center px-4 sm:px-10 sm:h-[510px] sm:py-0 py-7 h-full"
          style={{
            // backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          <div
            className="w-full items-start font-semibold lg:text-5xl sm:text-3xl text-2xl tailwind-unreset"
            dangerouslySetInnerHTML={{ __html: columnData?.heading }}
          ></div>
          <div
            className="items-start tailwind-unrested py-3 sm:text-xl"
            dangerouslySetInnerHTML={{ __html: columnData?.description }}
          ></div>
        </div>
        {columnData?.content?.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-2 md:w-[60%] w-full">
            {columnData?.content?.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-col p-4 border-[1px] rounded-md bg-bullt-secondary/[0.9]"
              >
                {item?.image && (
                  <div className="h-[80px] w-[80px] relative mb-4 bg-bullt-quaternary/[0.07] rounded-full transition-transform duration-300 ease-in-out hover:scale-x-[-1]">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                      alt={item?.heading}
                      style={{
                        position: "absolute",
                        objectFit: "cover",
                        inset: 0,
                      }}
                      fill={true}
                      className="w-full h-full p-4 "
                    />
                  </div>
                )}
                <div
                  className="text-xl font-semibold mb-2"
                  dangerouslySetInnerHTML={{ __html: item?.heading }}
                ></div>
                <div
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>
                {item?.button_text && (
                  <Link href={item?.button_link} passHref>
                    <a className="mt-auto  font-semibold">
                      {item?.button_text}
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyChooseusColumnComponent;
