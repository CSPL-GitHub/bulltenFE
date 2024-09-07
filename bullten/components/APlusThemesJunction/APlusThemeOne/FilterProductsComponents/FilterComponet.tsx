"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {
  setSelectedLocation: any;
  setSelectedDisks: any;
  setPriceRange: any;
  setRamRange: any;
  selectedDisks: any;
  priceRange: any;
  ramRange: any;
  selectedLocation: any;
  ProductsDetails: any;
};
const FilterComponent = ({
  setSelectedLocation,
  setSelectedDisks,
  setPriceRange,
  setRamRange,
  selectedDisks,
  priceRange,
  ramRange,
  selectedLocation,
  ProductsDetails,
}: Props) => {
  const disks = ["SATA", "SSD", "NVME"];

  console.log(ProductsDetails, "details for Filtering");

  const handleDiskChange = (disk: string) => {
    if (selectedDisks.includes(disk)) {
      setSelectedDisks(selectedDisks.filter((d: any) => d !== disk));
    } else {
      setSelectedDisks([...selectedDisks, disk]);
    }
  };

  const handlePriceChange = (range: number | number[]) => {
    if (Array.isArray(range)) {
      setPriceRange(range);
    }
  };

  const handleRamChange = (range: number | number[]) => {
    if (Array.isArray(range)) {
      setRamRange(range);
    }
  };

  return (
    <div className="p-3 lg:p-4 mt-4 shadow-md lg:shadow-sm bg-bullt-secondary rounded-md  sm:grid md:grid-cols-4 sm:grid-cols-2 w-full gap-10 md:gap-4 lg:gap-10 justify-center items-center">
      <div className="mb-4 col-span-1 px-5  lg:border-r-2 h-full">
        <label className="block text-md font-semibold text-gray-700 mb-4">
          Server Location
        </label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Locations</option>
          <option>India</option>
          <option>UK</option>
          <option>Germany</option>
          <option>Canada</option>
          <option>France</option>
        </select>
      </div>
      <div className="col-span-1 px-5 border-r-2">
        <label className="block text-md font-semibold text-gray-700 mb-4">
          Price Range ($)
        </label>

        <div className="flex justify-between mb-1">
          <span className="bg-gray-300 p-1 rounded text-sm">
            ${priceRange[0]}
          </span>
          <span className="bg-gray-300 p-1 rounded text-sm">
            ${priceRange[1]}
          </span>
        </div>

        <Slider
          range
          min={0}
          max={1000}
          value={priceRange}
          onChange={handlePriceChange}
          trackStyle={[{ backgroundColor: "#F69C2C", height: 8 }]}
          handleStyle={[
            { borderColor: "#3b82f6", height: 17, width: 17, marginTop: -4 },
            { borderColor: "#3b82f6", height: 17, width: 17, marginTop: -4 },
          ]}
          railStyle={{ backgroundColor: "#e5e7eb", height: 8 }}
        />
        <div className="flex justify-between  text-gray-500 mt-2">
          <span className="text-md"> $0</span>
          <span className="text-md"> $1000</span>
        </div>
      </div>

      <div className="col-span-1 px-5 border-r-2">
        <label className="block text-md font-semibold text-gray-700 mb-4">
          RAM
        </label>
        <div className="flex justify-between items-center mb-2">
          <span className="bg-gray-300 p-1 rounded">{ramRange[0]}GB</span>
          <span className="bg-gray-300 p-1 rounded">{ramRange[1]}GB</span>
        </div>
        <Slider
          range
          min={0}
          max={1000}
          value={ramRange}
          onChange={handleRamChange}
          trackStyle={[{ backgroundColor: "#F69C2C", height: 8 }]}
          handleStyle={[
            { borderColor: "#3b82f6", height: 17, width: 17, marginTop: -4 },
            { borderColor: "#3b82f6", height: 17, width: 17, marginTop: -4 },
          ]}
          railStyle={{ backgroundColor: "#e5e7eb", height: 8 }}
        />
        <div className="flex justify-between text-gray-500 mt-2">
          <span className=" text-md">4Gb</span>
          <span className=" text-md">1536Gb</span>
        </div>
      </div>
      <div className="px-6 col-span-1 ">
        <label className="block text-md font-semibold text-gray-700">
          Disks
        </label>
        <div className="grid grid-cols-2">
          {disks.map((disk, index) => (
            <div key={index} className="flex flex-row items-center py-2">
              <input
                type="checkbox"
                id={`disk-${index}`}
                checked={selectedDisks.includes(disk)}
                onChange={() => handleDiskChange(disk)}
                className="mr-3 transform scale-150"
              />
              <label htmlFor={`disk-${index}`} className="text-md">
                {disk}
              </label>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
