"use client";
import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useSelector } from "react-redux";
import { FilterLoactionApi } from "@/apis/productsApi";

type Props = {
  setSelectedLocation: any;
  setSelectedDisks: any;
  setPriceRange: any;
  setRamRange: any;
  selectedDisks: any;
  filterRange: any;
  ramRange: any;
  selectedLocation: any;
  ProductsDetails: any;
  decodedSlug: string;
  MaxRamRange: any;
  setMaxRamRange: any;
  MinRamRange: any;
  setMinRamRange: any;
  selectedPriceRange: any;
};
const ThemeTwoFilterComponent = ({
  setSelectedLocation,
  setSelectedDisks,
  setPriceRange,
  setRamRange,
  selectedDisks,
  filterRange,
  ramRange,
  selectedLocation,
  ProductsDetails,
  decodedSlug,
  MaxRamRange,
  setMaxRamRange,
  MinRamRange,
  setMinRamRange,
  selectedPriceRange,
}: Props) => {
  const currencyCode = useSelector((state: any) => state.currency);

  const [isOpen, setIsOpen] = useState(false);
  const [loaction, setLoaction] = useState<any>({});
  useEffect(() => {
    const fetchPriceRange = async () => {
      try {
        const response = await FilterLoactionApi(decodedSlug);
        if (response?.result) {
          setLoaction(response.result);
        }
      } catch (err) {
        console.error("Error fetching price range:", err);
      }
    };
    if (currencyCode?.code?.slug) {
      fetchPriceRange();
    }
  }, [decodedSlug]);
  const handleSelect = (location: any) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };
  const handleDiskChange = (disk: any) => {
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
  const handleRamChange = (range: any | any[]) => {
    setMinRamRange(range[0]);
    setMaxRamRange(range[1]);
  };
  return (
    <div className="p-3 lg:p-4 mt-4 shadow-md lg:shadow-sm bg-bullt-secondary rounded-md  sm:grid md:grid-cols-4 sm:grid-cols-2 w-full gap-10 md:gap-4 lg:gap-10 justify-center items-center">
      <div className="mb-4 col-span-1 px-5 lg:border-r-2 h-full">
        <label className="block text-md font-semibold text-gray-700 mb-4">
          Server Location
        </label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Locations</option>
          {loaction?.location_data?.map((location: any) => (
            <option
              key={location}
              className="hover:bg-bullt-tertiary active:bg-bullt-secondary"
            >
              {location?.Location}
            </option>
          ))}
        </select>
      </div>

      <div className="col-span-1 px-5 border-r-2">
        <label className="block text-md font-semibold text-gray-700 mb-4">
          Price Range
        </label>

        <div className="flex justify-between mb-1">
          <span className="bg-bullt-tertiary text-bullt-secondary p-1 rounded text-sm">
            {Number(selectedPriceRange[0])}
          </span>
          <span className="bg-bullt-tertiary text-bullt-secondary p-1 rounded text-sm">
            {Number(selectedPriceRange[1])}
          </span>
        </div>
        {filterRange?.max ? (
          <Slider
            range
            min={filterRange?.min} // Ensure min is a number
            max={filterRange?.max} // Ensure max is a number
            defaultValue={[filterRange?.min, filterRange?.max]}
            step={4}
            onChange={handlePriceChange}
            trackStyle={[{ backgroundColor: "#F69C2C", height: 8 }]}
            handleStyle={[
              { borderColor: "#3b82f6", height: 17, width: 17, marginTop: -4 },
              { borderColor: "#3b82f6", height: 17, width: 17, marginTop: -4 },
            ]}
            railStyle={{ backgroundColor: "#e5e7eb", height: 8 }}
          />
        ) : null}

        <div className="flex justify-between text-gray-500 mt-2">
          <span className="text-md">
            {filterRange?.icon}
            {filterRange?.min}
          </span>
          <span className="text-md">
            {filterRange?.icon}
            {filterRange?.max}
          </span>
        </div>
      </div>

      <div className="col-span-1 px-5 border-r-2">
        <label className="block text-md font-semibold text-gray-700 mb-4">
          RAM
        </label>
        <div className="flex justify-between items-center mb-2">
          <span className="bg-bullt-tertiary text-bullt-secondary p-1 rounded">
            {MinRamRange}GB
          </span>
          <span className="bg-bullt-tertiary text-bullt-secondary p-1 rounded">
            {MaxRamRange}GB
          </span>
        </div>
        <Slider
          range
          min={4}
          max={1500}
          defaultValue={[4, 1500]}
          step={4}
          onChange={handleRamChange}
          trackStyle={[{ backgroundColor: "#F69C2C", height: 8 }]}
          handleStyle={[
            { borderColor: "#3b82f6", height: 17, width: 17, marginTop: -4 },
            { borderColor: "#3b82f6", height: 17, width: 17, marginTop: -4 },
          ]}
          railStyle={{ backgroundColor: "#e5e7eb", height: 8 }}
        />
        <div className="flex justify-between text-gray-500 mt-2">
          <span className=" text-md">4 GB</span>
          <span className=" text-md">1500 GB</span>
        </div>
      </div>

      <div className="px-6 col-span-1 ">
        <label className="block text-md font-semibold text-gray-700">
          Disks
        </label>
        <div className="grid grid-cols-2">
          {loaction?.disk_data?.map((disk: any, index: any) => (
            <div key={index} className="flex flex-row items-center py-2">
              <input
                type="checkbox"
                id={`disk-${index}`}
                checked={selectedDisks.includes(disk?.Disks_all_type)}
                onChange={() => handleDiskChange(disk?.Disks_all_type)}
                className="mr-3 transform scale-150 bg-bullt-tertiary"
              />
              <label className="text-md ">{disk?.Disks_all_type}</label>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ThemeTwoFilterComponent;
