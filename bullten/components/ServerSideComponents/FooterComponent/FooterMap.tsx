"use client";
import MainHeadingComponent from "@/components/CommonComponents/HeadingComponents/MainHeadingComponent";
import ParaGraphText from "@/components/CommonComponents/HeadingComponents/ParaGraphText";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type Props = {};
type MarkerType = {
  flagUrl: any;
  name: string;
  coordinates: [number, number];
};

const FooterMap = ({ footerMapResponse }: any) => {
  const [hoveredMarker, setHoveredMarker] = useState<any | null>(null);

  return (
    <div className="px-4 lg:px-0 h-auto lg:h-[700px]  shadow-md my-2">
      <MainHeadingComponent paddingTop={3} alignmentType={2}>
        {footerMapResponse?.heading}
      </MainHeadingComponent>
      <ParaGraphText alignmentType={2}>
        {footerMapResponse?.description}
      </ParaGraphText>
      <ComposableMap className="h-full w-full">
        <Geographies geography="/features.json" fill="#1E3A8A" stroke="#1E3A8A">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>

        {footerMapResponse?.locationMarkers?.map(
          (marker: MarkerType, index: number) => (
            <Marker
              key={index}
              coordinates={marker.coordinates}
              onMouseEnter={() => setHoveredMarker(marker)}
              onMouseLeave={() => setHoveredMarker(null)}
            >
              <circle cx={0} cy={0} r={4} fill="#FF8C00" />{" "}
              {hoveredMarker === marker && (
                <g>
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="-60"
                    stroke="#FF8C00"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                  <rect
                    x={-50}
                    y={-90}
                    width={100}
                    height={30}
                    fill="#FF8C00"
                    rx={8}
                    ry={8}
                    style={{ opacity: 0.9 }}
                  />
                  <text
                    x="0"
                    y="-70"
                    textAnchor="middle"
                    style={{
                      fill: "#fff",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    <image
                      href={`${process.env.NEXT_PUBLIC_BASE_URL}${marker?.flagUrl}`}
                      x={-15}
                      y={-15}
                      width={35}
                      height={35}
                      clipPath="url(#circleClip)"
                      preserveAspectRatio="xMidYMid meet"
                    />
                    {marker?.name}
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