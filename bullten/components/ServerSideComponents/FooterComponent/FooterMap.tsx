"use client";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type Props = {};
type MarkerType = {
  name: string;
  coordinates: [number, number];
  flagUrl: string; // URL to the flag image
};

const FooterMap = (footerMapResponse: any) => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  console.log(
    footerMapResponse?.footerMapResponse.heading,
    "footerMapResponsefooterMapResponse"
  );
  return (
    <div className="h-auto lg:h-[700px]">
      <h1 className="text-bullt-primary  text-4xl text-center pt-5">
        {footerMapResponse?.footerMapResponse.heading}
      </h1>
      <ComposableMap className="h-full w-full">
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
      </ComposableMap>
    </div>
  );
};

export default FooterMap;
