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

type Props = {};
type MarkerType = {
  flagUrl: any;
  name: string;
  coordinates: [number, number];
};

const FooterMap = ({ footerMapResponse }: any) => {
  const [hoveredMarker, setHoveredMarker] = useState<any | null>(null);

  return (
    <div className=" bg-bullt-primary/[0.01] h-auto w-full container mx-auto flex lg:flex-row  items-start justify-center flex-col px-4 lg:px-8">
      {/* <div
        className="absolute z-0 inset-0 bg-cover bg-center opacity-50 custom-bounce"
        style={{ backgroundImage: "url('/bg-shap1.png')" }}
      ></div> */}
      <div className="lg:w-2/5 w-full sm:py-10 py-0">
        <SloganHeadingComponent alignmentType={1} paddingTop={1}>
          Global Hosting, Unmatched Performance
        </SloganHeadingComponent>
        <MainHeadingComponent paddingTop={1} alignmentType={2}>
          {footerMapResponse?.heading}
        </MainHeadingComponent>
        <ParaGraphText alignmentType={2}>
          {footerMapResponse?.description}
        </ParaGraphText>
      </div>
      <div className="lg:w-3/5 w-full">
        <ComposableMap className="h-full w-full">
          <Geographies
            geography="/features.json"
            fill="#1E3A8A"
            stroke="#1E3A8A"
          >
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
                <circle cx={0} cy={0} r={7} fill="#FF8C00" />{" "}
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
                        width={45}
                        height={45}
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
    </div>
  );
};

export default FooterMap;
