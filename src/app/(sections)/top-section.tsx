import React from "react";
import { PageSection } from "./page-section";
import { NextSectionLink } from "./next-section-link";
import BackgroundImage from "../../../public/images/1.jpg";

export const TopSection = () => {
  return (
    <PageSection id="top" image={BackgroundImage} className="min-h-screen">
      <div className="m-auto">
        <div className="flex flex-col m-auto items-center bg-slate-900/70 rounded-tl-3xl rounded-br-3xl p-10 text-white text-center">
          <h1 className="text-gold text-4xl font-bold">Jacob &amp; Jianan</h1>
          <h2 className="text-gold text-2xl font-bold">are getting married!</h2>

          <p className="mt-3 text-lg font-bold">
            Saturday, November 16th, 2024 · 12:30pm
            <br />
            Pepper Arden Hall, Northallerton
          </p>
        </div>
      </div>

      <NextSectionLink target="agenda">What&apos;s the plan?</NextSectionLink>
    </PageSection>
  );
};
