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

const venueLocation = {
  center: [54.41147, -1.5445] as [number, number],
  zoom: 10,
};

export const VenueMap: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <MapContainer
      className={`h-[500px] w-[500px] relative ${className}`}
      maxZoom={18}
      zoom={venueLocation.zoom}
      center={venueLocation.center}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <MapMarker position={venueLocation.center} />
    </MapContainer>
  );
};
