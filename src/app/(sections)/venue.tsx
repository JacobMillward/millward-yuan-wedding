import React from "react";
import { NextSectionLink } from "./next-section-link";
import { PageSection } from "./page-section";

export const VenueSection = () => {
  return (
    <PageSection id="location">
      <h1>Venue</h1>

      <NextSectionLink target="rsvp">RSVP</NextSectionLink>
    </PageSection>
  );
};
