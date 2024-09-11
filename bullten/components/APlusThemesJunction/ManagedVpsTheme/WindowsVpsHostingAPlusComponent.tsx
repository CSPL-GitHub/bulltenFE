import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const AccordionData = {
  gap_top: 16,
  gap_bottom: 16,
  heading: "Windows VPS Hosting with Plesk",
  description:
    "Control and more resources or for when you no longer want to be limited by the restrictions of a shared hosting account.",
  image:
    "https://hostingard.themetags.com/wp-content/uploads/2024/04/img-38-1.png",
  content: [
    {
      heading: "High Performance",
      description:
        "Our Windows VPS hosting offers high performance with dedicated resources and fast network connectivity.",
    },
    {
      heading: "Full Control",
      description:
        "Get full control of your virtual server environment with administrative access.",
    },
    {
      heading: "24/7 Support",
      description:
        "Enjoy 24/7 customer support with expert assistance whenever you need it.",
    },
  ],
};

const WindowsVpsHostingAPlusComponent = () => {
  const [Description, setDescription] = useState<number | null>(0);

  const handleDescription = (index: number) => {
    setDescription(Description === index ? null : index);
  };

  return (
    <div
      className="container  mx-auto w-full  border-[1px] py-4 lg:py-8 px-2 lg:px-8"
      style={{
        marginTop: `${AccordionData?.gap_top / 4}rem`,
        marginBottom: `${AccordionData?.gap_bottom / 4}rem`,
      }}
    >
      <div className="px-4">
        {AccordionData?.heading || AccordionData?.description ? (
          <>
            <div
              className="w-full  font-semibold lg:text-4xl text-2xl items-center sm:text-start text-center tailwind-unreset"
              dangerouslySetInnerHTML={{ __html: AccordionData?.heading }}
            />
            <div
              className="w-full  tailwind-unreset md:text-start text-center text-lg text-bullt-primary/[0.8]"
              dangerouslySetInnerHTML={{ __html: AccordionData?.description }}
            />
          </>
        ) : null}
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-5 h-auto">
        <div>
          {AccordionData?.content.map((item, index) => (
            <div
              key={index}
              className="w-full rounded-md shadow-sm items-center bg-bullt-quaternary/[0.03] p-3 my-3 cursor-pointer"
              onClick={() => handleDescription(index)}
            >
              <div className="flex justify-between p-2">
                <div className="w-[900px]">
                  <h1
                    className={`px-2 text-xl select-none ${
                      index === Description ? "text-bullt-tertiary" : ""
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.heading }}
                  ></h1>
                </div>
                <div className="relative w-[100px] flex justify-end items-center px-1">
                  <FiPlus
                    className={`text-bullt-tertiary text-2xl cursor-pointer transform transition-transform duration-300 ${
                      Description === index ? "rotate-45" : ""
                    }`}
                    onClick={() => handleDescription(index)}
                  />
                </div>
              </div>
              <div>
                {Description === index && (
                  <div
                    className="flex p-3 border-t border-bullt-tertiary select-none text-lg text-bullt-primary/[0.8]"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center px-4">
          <img
            //   src={`${process.env.NEXT_PUBLIC_BASE_URL}${section?.image}`}
            src={`${AccordionData?.image}`}
            alt="Accordion"
            className="w-full h-[300px] lg:h-[400px] object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WindowsVpsHostingAPlusComponent;
