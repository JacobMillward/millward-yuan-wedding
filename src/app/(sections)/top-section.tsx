import React from "react";
import { PageSection } from "./page-section";
import { NextSectionLink } from "./next-section-link";

export const TopSection = () => {
  return (
    <PageSection id="top" image="/images/1.jpg">
      <div className="flex flex-col m-auto items-center bg-slate-900/50 rounded-md p-10 text-white">
        <h1 className="text-4xl font-bold">Jacob &amp; Jianan</h1>
        <h2 className="text-2xl font-bold">are getting married!</h2>

        <p className="mt-3">
          Saturday, November 16th, 2024 at Pepper Arden Hall
        </p>
      </div>

      <NextSectionLink target="agenda">What&apos;s the plan?</NextSectionLink>
    </PageSection>
  );
};
