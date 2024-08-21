"use client"
import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi"
type Props = {
    FaqSectionApiResponse:any;
}

const FaqQuestionComponent:React.FC<Props> = ({FaqSectionApiResponse}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className="scroll sm:w-1/2 space-y-2 py-6 h-[550px] overflow-y-auto sm:px-10">
                    {FaqSectionApiResponse.map((item:any, index:any) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg shadow-sm ">
                            <button
                                onClick={() => toggleOpen(index)}
                                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center" >
                                <span className="text-lg font-medium text-gray-800">{item.heading}</span>
                                <FiPlus className={`text-bullt-text-quinary text-2xl cursor-pointer transform transition-transform duration-300 ${openIndex === index ? "rotate-45" : "" }`}/>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600">
                                    {item.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
  )
}

export default FaqQuestionComponent