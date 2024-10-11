"use client";

import { NordVpnCountryLocationsApi } from "@/apis/NordVpnPageAPIs";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";
import LoaderComponent from "@/components/CommonComponents/LoaderComponent/LoaderComponent";

export default function MapDataCenters() {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [coordinates, setCoordinates] = useState<any>(null);

  useEffect(() => {
    const fetchMapDataCenterLocations = async () => {
      try {
        const response = await NordVpnCountryLocationsApi();
        setCoordinates(response?.result);
      } catch (error) {
        console.error("Failed to fetch map data:", error);
      }
    };
    fetchMapDataCenterLocations();
  }, []);

  const handleLocationClick = (marker: any) => {
    setSelectedLocation(marker);
  };

  if (!coordinates)
    return (
      <div>
        <LoaderComponent />
      </div>
    );

  return (
    <div className="relative w-full px-4 lg:px-8 py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-8">
        <div className="lg:w-2/5 w-full space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center lg:text-left text-gray-800">
            {coordinates.map_data.heading}
          </h2>
          <p className="text-lg text-center lg:text-left text-gray-600">
            {coordinates.map_data.description}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {coordinates.map_data.button_1 && (
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                {coordinates.map_data.button_1.button_1_txt}
              </button>
            )}
            {coordinates.map_data.button_2 && (
              <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105">
                {coordinates.map_data.button_2.button_2_txt}
              </button>
            )}
          </div>
          <div className="bg-gray-50 rounded-lg ">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Available Locations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[40vh] overflow-y-auto pr-2">
              {coordinates.map_data.locationMarkers.map(
                (marker: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleLocationClick(marker)}
                    className={`flex items-center justify-start p-2 rounded-md transition duration-300 ease-in-out ${
                      selectedLocation === marker
                        ? "bg-blue-100 text-blue-800"
                        : "hover:bg-gray-100 border-gray-200 border-[1px] "
                    }`}
                  >
                    {marker.flagUrl && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${marker.flagUrl}`}
                        alt={marker.name}
                        width={24}
                        height={24}
                        className="rounded-full mr-2"
                      />
                    )}

                    <span className="text-sm font-medium">{marker.name}</span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 w-fullrounded-lg  p-4">
          <ComposableMap
            className="relative outline-none focus:outline-none"
            focusable={false}
            projectionConfig={{
              scale: 190,
            }}
          >
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    focusable={false}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                    tabIndex={-1}
                    fill="#E5E4E2"
                    stroke="#E5E4E2"
                    strokeWidth={0.1}
                    key={geo.rsmKey}
                    geography={geo}
                  />
                ))
              }
            </Geographies>

            {coordinates.map_data.locationMarkers.map(
              (marker: any, index: number) => (
                <Marker
                  key={index}
                  coordinates={marker.coordinates}
                  onMouseEnter={() => setHoveredMarker(marker)}
                  onMouseLeave={() => setHoveredMarker(null)}
                  onClick={() => handleLocationClick(marker)}
                  className="cursor-pointer"
                >
                  <motion.circle
                    r={5}
                    fill={selectedLocation === marker ? "#FF5722" : "#3B82F6"}
                    stroke="#ffffff"
                    strokeWidth={0}
                    className={`transition-transform duration-100 transform hover:scale-125 shadow-md ${
                      selectedLocation !== marker ? "custom-ping" : ""
                    }`}
                  />
                  <circle
                    cx={0}
                    cy={0}
                    r={5}
                    fill={selectedLocation === marker ? "#FF5722" : "#3B82F6"}
                    stroke="#ffffff"
                    strokeWidth={0}
                  />
                  {selectedLocation === marker && (
                    <g>
                      <path
                        d={`M 0,0 L -10,-40 L -50,-45`}
                        stroke="#007aff"
                        strokeWidth={1}
                        fill="none"
                      />

                      {/* Tooltip Rectangle */}
                      <rect
                        x={-140}
                        y={-65}
                        width={100}
                        height={35}
                        fill="#f69b00"
                        rx={20}
                        ry={20}
                        className="shadow-md"
                      />
                      <foreignObject x={-140} y={-55} width={100} height={45}>
                        <div className="flex items-center justify-center space-x-2">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${marker.flagUrl}`}
                            alt={marker.name}
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                          <span className="text-xs font-medium text-bullt-secondary">
                            {marker.name}
                          </span>
                        </div>
                      </foreignObject>
                    </g>
                  )}
                </Marker>
              )
            )}
          </ComposableMap>
        </div>
      </div>
    </div>
  );
}
