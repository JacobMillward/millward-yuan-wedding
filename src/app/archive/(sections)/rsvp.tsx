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
        The wedding is over! Thank you to everyone who attended and celebrated
      </p>
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
