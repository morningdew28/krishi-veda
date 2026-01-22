"use client";

import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import { GeoJSON, MapContainer, TileLayer } from "react-leaflet";
import type { GeoJsonObject } from "geojson";

const fileUrl = "/shapes/farm.geojson";

// 1. Fetcher
const fetchGeoJson = async (url: string): Promise<GeoJsonObject> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network response was not ok");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return res.json();
};

const geoJsonStyle = {
  color: "#FFFF00",
  weight: 3,
  opacity: 1,
  fillColor: "#FFFF00",
  fillOpacity: 0.2,
};

// 3. Main Component
const PrescriptionMap = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["farm-boundary", fileUrl],
    queryFn: () => fetchGeoJson(fileUrl),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          Loading map data...
        </div>
      )}
      <MapContainer
        center={[22.02506, 78.94164]}
        zoom={17}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", zIndex:0 }}
      >
        <TileLayer url="https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" />

        {data && (
          <GeoJSON
            key={JSON.stringify(data)}
            data={data}
            style={geoJsonStyle}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default PrescriptionMap;
