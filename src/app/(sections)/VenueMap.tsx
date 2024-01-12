"use client";
import LeafletMap from "./map";
import React, { type FC } from "react";

const VenueLocation = {
  center: [54.41146719329152, -1.5444748882425097] as [number, number],
  placeId: "ChIJZyNkAqajfkgRuKCBcUqTTPs",
  zoom: 10,
};

export const VenueMap: FC = () => (
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
