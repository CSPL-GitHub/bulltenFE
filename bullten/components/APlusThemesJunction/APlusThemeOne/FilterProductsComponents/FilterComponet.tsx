"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type Props = {
  setSelectedLocation: any;
  setPriceRange: any;
  setSelectedDisks: any;
  setRamRange: any;
  selectedDisks: any;
  priceRange: any;
  ramRange: any;
  selectedLocation: any;
};
const FilterComponent = ({
  setSelectedLocation,
  setPriceRange,
  setSelectedDisks,
  setRamRange,
  selectedDisks,
  priceRange,
  ramRange,
  selectedLocation,
}: Props) => {
  const disks = ["SATA", "SSD", "SAS", "NVME"];

  // const handleServiceChange = (service: string) => {
  //   if (selectedServices.includes(service)) {
  //     setSelectedServices(selectedServices.filter((s) => s !== service));
  //   } else {
  //     setSelectedServices([...selectedServices, service]);
  //   }
  // };

  const handleDiskChange = (disk: string) => {
    if (selectedDisks.includes(disk)) {
      setSelectedDisks(selectedDisks.filter((d: any) => d !== disk));
    } else {
      setSelectedDisks([...selectedDisks, disk]);
    }
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  const handleRamChange = (range: [number, number]) => {
    setRamRange(range);
  };
  return (
    <div className="p-4 bg-bullt-secondary rounded-md sm:grid sm:grid-cols-12 gap-10 justify-center items-center">
      <div className="mb-4 col-span-3 ">
        <label className="block font-semibold mb-2">Server Location</label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Locations</option>
          <option>India</option>
          <option>Uk</option>
          <option>Germany</option>
          <option>Canada</option>
          <option>France</option>
        </select>
      </div>
      <div className="mb-4 col-span-3 px-5">
        <label className="block text-lg font-semibold text-gray-700 mb-4">
          Price Range ($)
        </label>

        <div className="flex justify-between  mb-2">
          <span className="bg-gray-300 px-2 py-1 rounded">
            ${priceRange[0]}
          </span>
          <span className="bg-gray-300 px-2 py-1 rounded">
            ${priceRange[1]}
          </span>
        </div>

        <Slider
          range
          min={0}
          max={1000}
          value={priceRange}
          onChange={() => handlePriceChange}
          trackStyle={[{ backgroundColor: "#F69C2C", height: 15 }]} // Track customization
          handleStyle={[
            { borderColor: "#3b82f6", height: 28, width: 24, marginTop: -6 }, // Handle customization
            { borderColor: "#3b82f6", height: 28, width: 24, marginTop: -8 },
          ]}
          railStyle={{ backgroundColor: "#e5e7eb", height: 8 }} // Rail customization
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span className="text-lg">$0</span>
          <span className="text-xl">$1000</span>
        </div>
      </div>
      {/* <div className="flex col-span-6"> */}
      <div className="mb-4 col-span-3 px-5">
        <label className="block text-lg font-semibold text-gray-700 mb-4">
          RAM
        </label>
        <div className="flex justify-between items-center mb-2">
          <span className="bg-gray-300 px-2 py-1 rounded">{ramRange[0]}GB</span>
          <span className="bg-gray-300 px-2 py-1 rounded">{ramRange[1]}GB</span>
        </div>
        <Slider
          range
          min={0}
          max={1000}
          value={ramRange}
          onChange={() => handleRamChange}
          trackStyle={[{ backgroundColor: "#F69C2C", height: 15 }]} // Track customization
          handleStyle={[
            { borderColor: "#3b82f6", height: 28, width: 24, marginTop: -6 }, // Handle customization
            { borderColor: "#3b82f6", height: 28, width: 24, marginTop: -6 },
          ]}
          railStyle={{ backgroundColor: "#e5e7eb", height: 8 }} // Rail customization
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span className="text-lg">4Gb</span>
          <span className="text-lg">1536Gb</span>
        </div>
      </div>
      <div className="px-6 mb-4 col-span-3">
        <label className="block font-semibold mb-2">Disks</label>
        <div className="grid grid-cols-2">
          {disks.map((disk, index) => (
            <div key={index} className="flex flex-row mb-1 items-center py-3">
              <input
                type="checkbox"
                id={`disk-${index}`}
                checked={selectedDisks.includes(disk)}
                onChange={() => handleDiskChange(disk)}
                className="mr-3 transform scale-150"
              />
              <label htmlFor={`disk-${index}`} className="text-xl">
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
