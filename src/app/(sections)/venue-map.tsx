"use client";
import React, { type FC } from "react";
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

const LeafletMap: FC<{
  className?: string;
  center: [number, number];
  zoom?: number;
}> = ({ className, center, zoom = 1 }) => {
  return (
    <MapContainer
      className={`h-[300px] w-[300px]  md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] relative ${className}`}
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

const VenueLocation = {
  center: [54.41146719329152, -1.5444748882425097] as [number, number],
  placeId: "ChIJZyNkAqajfkgRuKCBcUqTTPs",
  zoom: 10,
};

const VenueMap: FC = () => (
  <>
    <p
      onClick={mapsSelector}
      role="link"
      aria-label="Venue address: Pepper Arden Hall, Pepper Arden, Northallerton, North Yorkshire, DL7 0JF"
      className="text-blue-600 hover:text-blue-800 text-xl cursor-pointer"
    >
      Pepper Arden Hall
      <br />
      Pepper Arden
      <br />
      Northallerton
      <br />
      North Yorkshire
      <br />
      DL7 0JF
    </p>

    <LeafletMap center={VenueLocation.center} zoom={VenueLocation.zoom} />
  </>
);

function mapsSelector() {
  if (
    /* if we're on iOS, open in Apple Maps */
    navigator.platform.indexOf("iPhone") != -1 ||
    navigator.platform.indexOf("iPad") != -1 ||
    navigator.platform.indexOf("iPod") != -1
  )
    window.open(
      `maps://maps.google.com/maps/search/?api=1&query=${VenueLocation.center.join(
        "%2C"
      )}&query_place_id=${VenueLocation.placeId}`
    );
  /* else use Google */ else
    window.open(
      `https://maps.google.com/maps/search/?api=1&query=${VenueLocation.center.join(
        "%2C"
      )}&query_place_id=${VenueLocation.placeId}`
    );
}

export default VenueMap;
