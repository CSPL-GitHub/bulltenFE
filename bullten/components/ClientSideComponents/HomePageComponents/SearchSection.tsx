"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  data: any;
};

const SearchSection: React.FC<Props> = ({ data }) => {
  const [domainNam, setDomainName] = useState<string>("");
 
  return (
    <div className="">
      <div className="flex items-center justify-center w-full mb-8 border-[1px] bg-white rounded-md border-gray-300">
        <input
          type="text"
          placeholder="Domain.com"
          onChange={(e) => setDomainName(e.target.value)}
          className="flex-1 sm:w-auto w-[100px] sm:px-1 px-4 py-3 focus:outline-none bg-transparent"
        />
        {/* <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="py-4 text-xl font-semibold focus:outline-none bg-transparent sm:mr-5"
        >
          {data?.domain_search?.map((option: any, index: any) => (
            <option className="text-md" key={index} value={option?.extension}>
              {option?.Name}
            </option>
          ))}
        </select> */}
        <Link href={`${data?.link}/${domainNam}`}>
          <button className="sm:px-8 px-4 py-5 bg-bullt-tertiary text-white font-semibold rounded-r-md transition">
            <FaSearch />
          </button>
        </Link>
      </div>
      {/* <div className="flex flex-wrap justify-center gap-3">
        {data?.domain_search?.map((option: any, index: any) => (
          <div
            key={index}
            className="flex flex-col items-center border px-5 py-1 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"

          >
            <span className="font-semibold text-xl text-black">
              {option?.Name}
            </span>
            <div className="flex">
              <span className="text-gray-600">{option?.duration}/</span>
              <span className="text-gray-600">{option?.Price}</span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SearchSection;
