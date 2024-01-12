import React from "react";
import { PageSection, SectionBackground } from "./page-section";
import { Link } from "../link";

export const RsvpSection = () => {
  return (
    <PageSection
      id="rsvp"
      background={SectionBackground.Khaki}
      className="items-center text-center h-min-content pb-10"
    >
      <h1 className="text-4xl font-bold mt-20">RSVP</h1>
      <p className="mt-5 mx-20 text-lg lg:text-xl">
        One you have received your invitation, please RSVP as soon as possible.
        <br />
        The quickest way to do this is to hit the button below and fill in the
        form.
      </p>
      <button
        className="mt-5 mx-20 text-lg lg:text-xl bg-slate-900/50 rounded-xl p-5 text-white font-extrabold"
        disabled
      >
        RSVP is not yet open
      </button>
      <p className="mt-4 max-w-[400px] text-lg lg:text-xl">
        If you have any questions about the wedding, please contact us at{" "}
        <Link
          href="mailto:wedding@millward-yuan.family"
          className="whitespace-nowrap text-nowrap"
        >
          wedding@millward-yuan.family
        </Link>
      </p>
      .
    </PageSection>
  );
};
