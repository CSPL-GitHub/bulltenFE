import React from "react";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/whychoose.jpg";

interface Props {
  columnData: any;
}

const WhyChooseUsManagedHoistingComponent: React.FC<Props> = ({
  columnData,
}) => {
  return (
    <div
      className=" relative lg:py-8 px-2 lg:px-8 shadow-sm py-4 bg-[#F1F5F9]"
      style={{
        marginTop: `${columnData?.gap_top / 4}rem`,
        marginBottom: `${columnData?.gap_bottom / 4}rem`,
      }}
    >
      <div className="relative container mx-auto flex flex-col sm:gap-4 md:flex-row">
        <div className="absolute ">
          <Image
            src="/icon-lines-6.81833a8f.png"
            alt="Heading Image"
            width={500}
            height={500}
            className="custom-bounce "
          />
        </div>
        <div
          className="md:w-[40%] w-full flex flex-col justify-center items-center px-4 sm:px-10 md:h-[510px] h-full sm:py-0 py-4 text-center sm:text-start"
          style={{}}
        >
          {columnData?.heading ? (
            <>
              <div
                className="w-full items-start  font-semibold sm:text-4xl text-2xl tailwind-unreset"
                dangerouslySetInnerHTML={{ __html: columnData?.heading }}
              ></div>
            </>
          ) : null}
          {columnData?.description ? (
            <>
              <div
                className="items-start tailwind-unrested py-3 sm:text-xl text-bullt-primary/[0.8]"
                dangerouslySetInnerHTML={{ __html: columnData?.description }}
              ></div>
            </>
          ) : null}
        </div>
        {columnData?.content?.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-2 md:w-[60%] w-full px-4 py-2">
            {columnData?.content?.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-col p-4 border-[1px] rounded-md  hover:shadow-sm bg-bullt-secondary"
              >
                <div className="relative rounded-2xl flex items-center justify-center w-24 h-24 p-4 overflow-hidden  transition-transform duration-100 ease-in-out hover:scale-x-[-1]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.image}`}
                    alt={item?.heading}
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      inset: 0,
                    }}
                    fill={true}
                    className="w-full h-full p-3"
                  />
                </div>
                <div
                  className="text-xl font-semibold w-full"
                  dangerouslySetInnerHTML={{ __html: item?.heading }}
                ></div>

                <div
                  className="w-full text-lg text-bullt-primary/[0.8]"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></div>
                {item?.button_text && (
                  <Link href={item?.button_link} passHref>
                    <div className="mt-auto  font-semibold">
                      {item?.button_text}
                    </div>
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

export default WhyChooseUsManagedHoistingComponent;
