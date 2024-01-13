import React from "react";
import { PageSection, SectionBackground } from "./page-section";
import { Link } from "../link";

export const RsvpSection = () => {
  return (
    <PageSection
      id="rsvp"
      background={SectionBackground.Khaki}
      className="items-center text-center h-min-content pb-12"
    >
      <h1 className="text-4xl font-bold my-10">RSVP</h1>
      <p className="max-w-[900px] text-lg lg:text-xl">
        One you have received your invitation, please RSVP as soon as possible.
        The quickest way to do this is to hit the button below and fill in the
        form.
      </p>
      <button
        className="m-10 text-lg lg:text-xl bg-slate-900/50 rounded-xl p-5 text-white font-extrabold"
        disabled
      >
        RSVP is not yet open
      </button>
      <p className="max-w-[900px] text-lg lg:text-xl">
        If you have any questions about the wedding, please contact us at{" "}
        <Link
          href="mailto:wedding@millward-yuan.family"
          className="whitespace-nowrap"
        >
          wedding@millward-yuan.family
        </Link>
      </p>
      .
    </PageSection>
  );
};
