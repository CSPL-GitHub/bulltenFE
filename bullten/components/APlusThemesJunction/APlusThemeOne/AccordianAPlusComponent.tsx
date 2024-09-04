"use client";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface Props {
    AccordionData: any;
}

const AccordianAPlusComponent: React.FC<Props> = ({ AccordionData }) => {
    const [Description, setDescription] = useState<number | null>(0);

    const handleDescription = (index: number) => {
        setDescription(Description === index ? null : index);
    };
    return (
        <div
            className="w-full h-auto grid lg:grid-cols-2 grid-cols-1 py-7 px-3 gap-5 border-[1px] rounded-xl sm:px-5 bg-bullt-quaternary/[0.07]"
            style={{
                marginTop: `${AccordionData?.gap_top / 4}rem`,
                marginBottom: `${AccordionData?.gap_bottom / 4}rem`,
            }}
        >
            <div className="flex items-center">
                {AccordionData?.heading || AccordionData?.description ?
                    <div className="flex flex-col gap-7 items-center lg:w-[80%] w-full">
                        <div
                            className="w-full flex flex-col lg:justify-start justify-center font-semibold lg:text-5xl sm:text-3xl text-2xl px-3 items-center tailwind-unreset"
                            dangerouslySetInnerHTML={{ __html: AccordionData?.heading }}
                        />
                        <div
                            className="w-full flex flex-col items-start tailwind-unreset"
                            dangerouslySetInnerHTML={{ __html: AccordionData?.description }}
                        />
                        <HomePageButtonOne alignmentType={1} buttonText={"Live Chat Now "} route={"#"} />
                    </div>
                    : null}
            </div>

            <div>
                {AccordionData?.content.map((item: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="w-full rounded-md shadow-sm items-center bg-bullt-secondary p-3 my-3 cursor-pointer"
                            onClick={() => handleDescription(index)} >
                            <div className=" flex justify-between p-2">
                                <div className="w-[900px]">
                                    <h1
                                        className={`px-2 text-xl select-none ${index === Description ? "text-bullt-tertiary" : ""}`}
                                        dangerouslySetInnerHTML={{ __html: item?.heading }}
                                    ></h1>
                                </div>
                                <div className="relative w-[100px] flex justify-end items-center px-1">
                                    <FiPlus
                                        className={`text-black text-2xl cursor-pointer transform transition-transform duration-300 ${Description === index ? "rotate-45" : ""
                                            }`}
                                        onClick={() => handleDescription(index)}
                                    />
                                </div>

                            </div>
                            <div >
                                {Description === index && (
                                    <div className="">
                                        <p
                                            className="flex p-3 border-t border-bullt-tertiary select-none"
                                            dangerouslySetInnerHTML={{ __html: item?.description }}
                                        ></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AccordianAPlusComponent;
