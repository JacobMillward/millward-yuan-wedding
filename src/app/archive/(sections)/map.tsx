"use client";
import type { FC } from "react";
import { Marker, icon } from "leaflet";
import { MapContainer, Marker as MapMarker, TileLayer } from "react-leaflet";

Marker.prototype.options.icon = icon({
  iconUrl: "/icons/marker-icon-2x.png",
  iconRetinaUrl: "/icons/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  shadowUrl: "/icons/marker-shadow.png",
  shadowRetinaUrl: "/icons/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

export const LeafletMap: FC<{
  className?: string;
  center: [number, number];
  zoom?: number;
}> = ({ className, center, zoom = 1 }) => {
  return (
    <MapContainer
      className={`h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] relative ${className}`}
      maxZoom={18}
      zoom={zoom}
      center={center}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <MapMarker position={center} />
    </MapContainer>
  );
};

export default LeafletMap;
