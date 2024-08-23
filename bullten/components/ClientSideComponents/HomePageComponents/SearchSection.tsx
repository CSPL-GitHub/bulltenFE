"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  data: any;
};

const SearchSection: React.FC<Props> = ({ data }) => {
  const [selectedDomain, setSelectedDomain] = useState(".net");
  const [input, setInput] = useState("");
  const [domainNam, setDomainName] = useState<string>("");
  const handleDomainClick = (domain: string) => {
    setSelectedDomain(domain);
  };

  return (
    <div>
      <div className="flex  items-center justify-center w-full mb-8 border-[1px] rounded-md border-gray-300">
        <input
          type="text"
          placeholder="Domain.com"
          onChange={(e) => setDomainName(e.target.value)}
          className="flex-1 px-6 py-3 focus:outline-none bg-transparent"
        />
        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="py-4 text-xl font-semibold focus:outline-none bg-transparent sm:mr-5"
        >
          {data?.domain_search?.map((option: any, index: any) => (
            <option className="text-md" key={index} value={option?.extension}>
              {option?.Name}
            </option>
          ))}
        </select>
        <Link href={`${data?.link}/${domainNam}`}>
          <button className="px-8 py-5 bg-black text-white font-semibold rounded-r-md transition">
            <FaSearch />
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {data?.domain_search?.map((option: any, index: any) => (
          <div
            key={index}
            className="flex flex-col items-center border px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
            onClick={() => handleDomainClick(option.Name)}
          >
            <span className="font-semibold text-xl text-bullt-tertiary">
              {option?.Name}
            </span>
            <div className="flex">
              <span className="text-gray-600">{option?.duration}/</span>
              <span className="text-gray-600">{option?.Price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
