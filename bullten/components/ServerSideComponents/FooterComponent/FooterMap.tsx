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

const markers: MarkerType[] = [
  {
    name: "Paris",
    coordinates: [2.3522, 48.8566],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "London",
    coordinates: [-0.1276, 51.5074],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Berlin",
    coordinates: [13.405, 52.52],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Baku",
    coordinates: [49.8671, 40.4093],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "New York",
    coordinates: [-74.006, 40.7128],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Tokyo",
    coordinates: [139.6917, 35.6895],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Sydney",
    coordinates: [151.2093, -33.8688],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Rio de Janeiro",
    coordinates: [-43.1729, -22.9068],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Moscow",
    coordinates: [37.6173, 55.7558],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Cape Town",
    coordinates: [18.4241, -33.9249],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Dubai",
    coordinates: [55.2708, 25.2048],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Istanbul",
    coordinates: [28.9784, 41.0082],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Bangkok",
    coordinates: [100.5167, 13.75],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Mumbai",
    coordinates: [72.8777, 19.076],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Delhi",
    coordinates: [77.209, 28.6139],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Toronto",
    coordinates: [-79.3832, 43.6532],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
  {
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
    flagUrl:
      "https://img.icons8.com/?size=100&id=15534&format=png&color=000000",
  },
];

const FooterMap = (props: Props) => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  return (
    <div className="h-auto lg:h-[90vh]">
      <h1 className="text-bullt-secondary text-4xl text-center pt-5">
        Data Center Available in Countries
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
          stroke="#002D62"
          strokeWidth={0.9}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates, flagUrl }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            onMouseEnter={() => setHoveredMarker(name)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <image
              href={flagUrl}
              x={-15}
              y={-15}
              width={35}
              height={35}
              clipPath="url(#circleClip)"
              preserveAspectRatio="xMidYMid meet"
            />
            {hoveredMarker === name && (
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
                  {name}
                </text>
              </g>
            )}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default FooterMap;
