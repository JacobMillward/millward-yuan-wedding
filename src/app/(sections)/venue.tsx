import React from "react";
import { NextSectionLink } from "./next-section-link";
import { PageSection } from "./page-section";
import { Link } from "../link";

import dynamic from "next/dynamic";
export const VenueMap = dynamic(() => import("./venue-map"), { ssr: false });

export const VenueSection = () => {
  return (
    <PageSection id="location" className="items-center text-center">
      <h1 className="text-4xl font-bold my-10">Venue & Accomodation</h1>

      <p className="max-w-[900px] text-lg lg:text-xl">
        The enchanting backdrop for our wedding will be the stunning{" "}
        <Link href="https://pepperardenhall.com/">Pepper Arden Hall</Link>, a
        magnificent 18th-century manor house nestled in the heart of North
        Yorkshire. We are thrilled at the prospect of celebrating our special
        day at this picturesque venue and look forward to sharing the joyous
        occasion with all of you.
      </p>

      <div className="flex flex-col gap-5 lg:flex-row pt-10 lg:pt-0 lg:mt-20">
        <div className="flex flex-col border-burgundy border-b-2 lg:border-r-2 lg:border-b-0 lg:pr-5 pb-5 lg:pb-0">
          <h2 className="text-2xl font-bold mb-10">How to find it</h2>
          <p className="max-w-[900px] text-lg lg:text-xl mb-5 lg:mb-0">
            Pepper Arden Hall is about 20 minutes from Darlington, and 20
            minutes from Northallerton. There is plenty of parking available on
            site.
          </p>
          <div className="flex flex-col lg:flex-row mt-5 mx-auto items-center gap-10">
            <VenueMap />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-10">Where to stay</h2>
          <p className="max-w-[900px] text-lg lg:text-xl">
            If you aren&apos;t already staying with us at the venue, there are
            plenty of hotels and B&Bs in the surrounding area. The following
            accommodation options are all nearby, at a range of price points:
          </p>

          <ul className="list-disc list-inside text-xl my-auto space-y-2">
            <li>
              <Link href="https://www.sykescottages.co.uk/cottage/North-York-Moors-Coast-Northallerton/The-Byre-924364.html#duration=2&calendar=2024-11&changeover=5">
                <span className="font-bold">The Byre, East Cowton</span>{" "}
                (Cottage, 2 People)
              </Link>
            </li>
            <li>
              <Link href="https://www.sykescottages.co.uk/cottage/North-York-Moors-Coast-Great-Langton/Carvin-Tor-927696.html#duration=2&calendar=2024-11&changeover=5">
                <span className="font-bold">Carvin-Tor, Great Langton</span>{" "}
                (Cottage, 6 People)
              </Link>
            </li>
            <li>
              <Link href="https://www.booking.com/hotel/gb/the-black-horse-inn-northallerton.en-gb.html">
                <span className="font-bold">
                  Black Horse Inn, Northallerton
                </span>{" "}
                (Hotel)
              </Link>
            </li>
            <li>
              <Link href="https://www.porchhousenorthallerton.com/">
                <span className="font-bold">Porch House, Northallerton</span>{" "}
                (Hotel)
              </Link>
            </li>
            <li>
              <Link href="https://www.croft-hotel.com/stay-with-us/">
                <span className="font-bold">The Croft Hotel, Darlington</span>{" "}
                (Hotel)
              </Link>
            </li>
            <li>
              <Link href="https://www.inncollectiongroup.com/northallerton-inn/">
                <span className="font-bold">
                  Northallerton Inn, Northallerton
                </span>{" "}
                (Hotel)
              </Link>
            </li>
            <li>
              <Link href="https://www.blackwellgrangehotel.com/">
                <span className="font-bold">
                  Blackwell Grange Hotel, Darlington
                </span>{" "}
                (Hotel)
              </Link>
            </li>
            <li>
              <Link href="https://www.rockliffehall.com/">
                <span className="font-bold">Rockliffe Hall, Darlington</span>{" "}
                (Hotel)
              </Link>
            </li>
            <li>
              <Link href="https://www.holidayathome.co.uk/collection/brompton-lakes/">
                <span className="font-bold">Brompton Lakes, Richmond</span>{" "}
                (Multiple Lodges, Each 6 People)
              </Link>
            </li>
            <li>
              <Link href="https://www.premierinn.com/gb/en/hotels/england/county-durham/darlington/darlington-town-centre.html">
                <span className="font-bold">
                  Premier Inn, Darlington Town Centre
                </span>{" "}
                (Hotel)
              </Link>
            </li>
            <li>
              <Link href="https://www.holidaycottage.com/cottage/ross-cottage-scorton%2C-richmond-north-yorkshire-S12RAVLX.html">
                <span className="font-bold">Ross Cottage, Richmond</span>{" "}
                (Cottage, 4 People)
              </Link>
            </li>
            <li>
              <Link href="https://www.holidaycottages.co.uk/cottage/88588-brewery-barn">
                <span className="font-bold">Brewery Barn, Richmond</span>{" "}
                (Cottage, 2 people)
              </Link>
            </li>
            <li>
              <Link href="https://www.hillhousefarmcottages.com/">
                <span className="font-bold">
                  Hill House Farm Cottages, Northallerton
                </span>{" "}
                (Multiple Cottages, Various)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <NextSectionLink target="rsvp">RSVP</NextSectionLink>
    </PageSection>
  );
};
