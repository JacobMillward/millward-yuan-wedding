import React from "react";
import { PageSection, SectionBackground } from "./page-section";
import NextLink from "next/link";
import { Link } from "../link";
export const RsvpSection = () => {
  return (
    <PageSection
      id="rsvp"
      background={SectionBackground.PaleGreen}
      className="items-center text-center h-min-content pb-12"
    >
      <h1 className="text-4xl font-bold my-10">RSVP</h1>
      <p className="max-w-[900px] text-lg lg:text-xl">
        One you have received your invitation, please RSVP as soon as possible.
        We will stop taking RSVPs after 16th June 2024. The quickest way to
        respond is to hit the button below and fill in the form.
      </p>
      <NextLink
        href="https://forms.gle/rjQtB6FFyAM86odu8"
        target="_blank"
        rel="noopener noreferrer"
        className="m-10 text-lg lg:text-xl bg-burgundy rounded-xl p-5 text-white font-extrabold hover:bg-burgundy/80 hover:text-gold transition-colors duration-300"
      >
        Click here to RSVP
      </NextLink>
      <p className="max-w-[900px] text-lg lg:text-xl mb-5">
        If you have any questions about the wedding, please contact us at{" "}
        <Link
          href="mailto:wedding@millward-yuan.family"
          className="whitespace-nowrap"
        >
          wedding@millward-yuan.family
        </Link>
      </p>
    </PageSection>
  );
};
