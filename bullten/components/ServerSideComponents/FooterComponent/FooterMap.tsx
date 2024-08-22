"use client";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

type Props = {};
type MarkerType = {
  name: string;
  coordinates: [number, number];
  flagUrl: string; // URL to the flag image
};

const FooterMap = (footerMapResponse: any) => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  return (
    <div className="px-4 lg:px-0 h-auto lg:h-[700px] bg-bullt-secondary/[0.8] shadow-md my-2">
      <MainHeadingComponent paddingTop={3} alignmentType={2}>
        {footerMapResponse?.footerMapResponse?.heading}
      </MainHeadingComponent>
      <ParaGraphText alignmentType={2}>
        {footerMapResponse?.footerMapResponse?.description}
      </ParaGraphText>
      <ComposableMap className="h-full w-full">
        <ZoomableGroup center={[0, 0]} zoom={1}>
          <defs>
            <clipPath id="circleClip">
              <circle cx="3" cy="3" r="10" />
            </clipPath>
          </defs>
          <Geographies
            geography="/features.json"
            fill="#bfbfbf"
            stroke="#bfbfbf"
            strokeWidth={0.9}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>

          {footerMapResponse?.footerMapResponse?.locationMarkers?.map(
            (markers: MarkerType, index: number) => (
              <Marker
                key={index}
                coordinates={markers?.coordinates}
                onMouseEnter={() => setHoveredMarker(markers?.name)}
                onMouseLeave={() => setHoveredMarker(null)}
              >
                <image
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}${markers?.flagUrl}`}
                  x={-15}
                  y={-15}
                  width={35}
                  height={35}
                  clipPath="url(#circleClip)"
                  preserveAspectRatio="xMidYMid meet"
                />
                {hoveredMarker === markers?.name && (
                  <g>
                    <line
                      x1="0"
                      y1="-15"
                      x2="0"
                      y2="-90"
                      stroke="#f69b00"
                      strokeWidth="2"
                    />
                    <rect
                      x={-50}
                      y={-90}
                      width={100}
                      height={30}
                      fill="#f69b00"
                      rx={5}
                      ry={5}
                    />
                    <text
                      textAnchor="middle"
                      y={-70}
                      style={{
                        fill: "#fff",
                      }}
                    >
                      {markers?.name}
                    </text>
                  </g>
                )}
              </Marker>
            )
          )}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default FooterMap;
