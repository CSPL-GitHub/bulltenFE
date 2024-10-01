"use client";

import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

interface DataCenter {
  id: string;
  lat: number;
  lng: number;
  name: string;
}

const geoUrl = "/features.json";

export default function MapDataCenters() {
  const [dataCenters, setDataCenters] = useState<DataCenter[]>([]);
  const [newLocation, setNewLocation] = useState({
    lat: "",
    lng: "",
    name: "",
  });
  const [hoveredDataCenter, setHoveredDataCenter] = useState<DataCenter | null>(
    null
  );

  const addDataCenter = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 9);
    setDataCenters([
      ...dataCenters,
      {
        ...newLocation,
        id,
        lat: parseFloat(newLocation.lat),
        lng: parseFloat(newLocation.lng),
      },
    ]);
    setNewLocation({ lat: "", lng: "", name: "" });
  };

  const removeDataCenter = (id: string) => {
    setDataCenters(dataCenters.filter((dc) => dc.id !== id));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <div className="w-full md:w-2/3 h-1/2 md:h-full relative">
        <ComposableMap projection="geoMercator">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>
          {dataCenters.map((dc) => (
            <Marker key={dc.id} coordinates={[dc.lng, dc.lat]}>
              <circle
                r={5}
                fill="#F00"
                stroke="#fff"
                strokeWidth={2}
                onMouseEnter={() => setHoveredDataCenter(dc)}
                onMouseLeave={() => setHoveredDataCenter(null)}
              />
            </Marker>
          ))}
        </ComposableMap>
        {hoveredDataCenter && (
          <div className="absolute top-0 left-0 bg-white p-2 m-2 rounded shadow">
            <p className="font-bold">{hoveredDataCenter.name}</p>
            <p>
              Lat: {hoveredDataCenter.lat}, Lng: {hoveredDataCenter.lng}
            </p>
          </div>
        )}
      </div>
      <div className="w-full md:w-1/3 p-6 bg-white shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Data Centers</h2>
        <form onSubmit={addDataCenter} className="mb-6 space-y-4">
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={newLocation.name}
              onChange={(e) =>
                setNewLocation({ ...newLocation, name: e.target.value })
              }
              placeholder="Data Center Name"
              required
            />
          </div>
          <div>
            <label htmlFor="lat">Latitude</label>
            <input
              id="lat"
              type="number"
              value={newLocation.lat}
              onChange={(e) =>
                setNewLocation({ ...newLocation, lat: e.target.value })
              }
              placeholder="Latitude"
              required
              step="any"
            />
          </div>
          <div>
            <label htmlFor="lng">Longitude</label>
            <input
              id="lng"
              type="number"
              value={newLocation.lng}
              onChange={(e) =>
                setNewLocation({ ...newLocation, lng: e.target.value })
              }
              placeholder="Longitude"
              required
              step="any"
            />
          </div>
          <button type="submit" className="w-full">
            Add Data Center
          </button>
        </form>
        <div className="space-y-4">
          {dataCenters.map((dc) => (
            <div
              key={dc.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded"
            >
              <div>
                <h3 className="font-semibold">{dc.name}</h3>
                <p className="text-sm text-gray-600">
                  Lat: {dc.lat}, Lng: {dc.lng}
                </p>
              </div>
              <button onClick={() => removeDataCenter(dc.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
