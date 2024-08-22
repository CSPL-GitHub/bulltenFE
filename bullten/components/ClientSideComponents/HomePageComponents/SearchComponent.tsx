"use client";
import HomePageButtonOne from "@/components/CommonComponents/ButtonsComponent/HomePageButton";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const DomainSearchComponent = () => {
  const [selectedDomain, setSelectedDomain] = useState(".net");

  const domainOptions = [
    { extension: ".com", price: "$12.95/Year", color: "text-blue-500" },
    { extension: ".net", price: "$8.75/Year", color: "text-red-500" },
    { extension: ".org", price: "$2.32/Year", color: "text-yellow-500" },
    { extension: ".online", price: "$7.57/Year", color: "text-green-500" },
    { extension: ".biz", price: "$7.57/Year", color: "text-purple-500" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-2xl max-w-3xl mx-auto mt-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Find the Right Plan & Register a Domain Now!
      </h1>
      <div className="flex items-center justify-center w-full mb-8 border-[1px]  border-gray-300">
        <input
          type="text"
          placeholder="Domain.com"
          className="flex-1 px-6 py-3  focus:outline-none"
        />
        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="px-6 py-4"
        >
          {domainOptions.map((option, index) => (
            <option key={index} value={option.extension}>
              {option.extension}
            </option>
          ))}
        </select>
        <button className="px-8 py-5 bg-black text-white font-semibold rounded-r-md  transition ">
          <FaSearch />
        </button>
          
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {domainOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center border p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <span className={`${option.color} font-semibold text-xl`}>
              {option.extension}
            </span>
            <span className="text-gray-600">{option.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomainSearchComponent;
