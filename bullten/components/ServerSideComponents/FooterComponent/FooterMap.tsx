"use client";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import SloganHeadingComponent from "@/components/CommonComponents/HeadingComponents/SloganHeadingComponent";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const FooterMap = ({ footerMapResponse }: any) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (marker: any) => {
    setSelectedLocation(marker);
  };

  return (
    <div className="relative h-auto w-full bg-[#080F2C] px-4 lg:px-8 pb-9 py-8 lg:py-0">
      <div
        className="absolute z-0 inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-shap1.png')`,
          filter: "brightness(0.4)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto flex lg:flex-row items-center justify-center flex-col">
        {/* Left Section with Text */}
        <div className="lg:w-1/3 w-full text-white mt-0 lg:-mt-20">
          <SloganHeadingComponent
            alignmentType={1}
            paddingTop={1}
            hoverEffect="text-bullt-secondary"
          >
            {footerMapResponse?.slogan}
          </SloganHeadingComponent>
          <MainHeadingComponent paddingTop={1} alignmentType={2}>
            {footerMapResponse?.heading}
          </MainHeadingComponent>
          <ParaGraphText alignmentType={2}>
            {footerMapResponse?.description}
          </ParaGraphText>

          {/* Location List */}
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 max-h-[20vh] overflow-auto relative">
            {footerMapResponse?.locationMarkers?.map(
              (marker: any, index: number) => (
                <button
                  key={index}
                  onClick={() => handleLocationClick(marker)}
                  className={`w-full text-left bg-bullt-quaternary/[0.1] text-gray-200 hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md transition ${
                    selectedLocation === marker ? "bg-gray-700 text-white" : ""
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${marker.flagUrl}`}
                      alt={marker.name}
                      className="w-5 h-5 mr-2"
                    />
                    <span className=" font-semibold">{marker.name}</span>
                  </div>
                </button>
              )
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="lg:w-2/3 w-full lg:mt-0 relative overflow-visible">
          <div className="absolute inset-0 opacity-60" />
          <ComposableMap
            className="relative"
            projectionConfig={{ scale: 200 }}
            width={900}
            height={650}
          >
            <Geographies
              geography="/features.json"
              fill="#263b59"
              stroke="#0e1e52"
              strokeWidth={0.1}
            >
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>

            {footerMapResponse?.locationMarkers?.map(
              (marker: any, index: number) => (
                <Marker
                  key={index}
                  coordinates={marker.coordinates}
                  onMouseEnter={() => setHoveredMarker(marker)}
                  onMouseLeave={() => setHoveredMarker(null)}
                  onClick={() => handleLocationClick(marker)}
                  className="cursor-pointer"
                >
                  {/* Main circle */}
                  <circle
                    cx={0}
                    cy={0}
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

                  {/* Show Tooltip for Selected Location or Hovered Marker */}
                  {(selectedLocation === marker ||
                    hoveredMarker === marker) && (
                    <g className="transition-opacity duration-300">
                      {/* Bent Line */}
                      <path
                        d={`M 0,0 L -10,-40 L -50,-45`}
                        stroke="#007aff"
                        strokeWidth={2}
                        fill="none"
                      />

                      {/* Tooltip Rectangle */}
                      <rect
                        x={-170}
                        y={-65}
                        width={120}
                        height={35}
                        fill="#E5E7EB"
                        rx={3}
                        ry={3}
                        className="shadow-md"
                      />

                      {/* Tooltip Content */}
                      <foreignObject x={-160} y={-60} width={100} height={30}>
                        {" "}
                        {/* Adjusted position to the left */}
                        <div className="flex items-center justify-center">
                          <img
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${marker.flagUrl}`}
                            alt={marker.name}
                            className="w-5 h-5 mr-2"
                          />
                          <span className="text-gray-800 font-semibold">
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
};

export default FooterMap;
