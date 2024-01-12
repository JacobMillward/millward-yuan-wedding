import React from "react";
import { NextSectionLink } from "./next-section-link";
import { PageSection } from "./page-section";
import Link from "next/link";

export const VenueSection = () => {
  return (
    <PageSection id="location" className="items-center">
      <h1 className="text-4xl font-bold mt-20">Venue & Accomodation</h1>

      <p className="m-5 max-w-[900px] text-lg">
        The enchanting backdrop for our wedding will be the stunning{" "}
        <Link
          className="text-blue-600 visited:text-purple-600 hover:text-blue-800 hover:underline"
          href="https://pepperardenhall.com/"
          referrerPolicy="no-referrer"
          target="_blank"
        >
          Pepper Arden Hall
        </Link>
        , a magnificent 18th-century manor house nestled in the heart of North
        Yorkshire. We are thrilled at the prospect of celebrating our special
        day at this picturesque venue and look forward to sharing the joyous
        occasion with all of you.
      </p>

      <div className="flex mx-auto mt-20">
        <div className="flex flex-col text-center border-r-2 border-burgundy px-5">
          <h2 className="text-2xl font-bold">How to find it</h2>
          <p className="m-5 max-w-[900px] text-lg">
            Pepper Arden Hall is about 20 minutes from Darlington, and 20
            minutes from Northallerton. There is plenty of parking available on
            site.
          </p>
          <Link
            href="geo:54.41084,-1.54330?z=17&q=Pepper+Arden+Hall"
            className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
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
          </Link>

          <iframe
            className="mx-auto mt-5"
            width="425"
            height="350"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-1.553524732589722%2C54.406548985137135%2C-1.5330755710601809%2C54.41512179396099&amp;layer=mapnik"
          ></iframe>
        </div>
        <div className="text-center ml-5">
          <h2 className="text-2xl font-bold">Where to stay</h2>
          <p className="m-5 max-w-[900px] text-lg">
            If you aren&apos;t already staying with us at the venue, there are
            plenty of hotels and B&Bs in the surrounding area. We recommend the
            following:
          </p>
        </div>
      </div>

      <NextSectionLink target="rsvp">RSVP</NextSectionLink>
    </PageSection>
  );
};
