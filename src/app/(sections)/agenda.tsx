import React from "react";
import Image from "next/image";
import { PageSection, SectionBackground } from "./page-section";
import { NextSectionLink } from "./next-section-link";

type TimeSlot = {
  time: string;
  title: string;
  icon?: string;
  iconAlt?: string;
};

const times: TimeSlot[] = [
  {
    time: "12:30pm",
    title: "Ceremony",
    icon: "/icons/ceremony.svg",
    iconAlt: "Two heart symbols intertwined",
  },
  {
    time: "TBD",
    title: "Post-ceremony drinks and canapés",
    icon: "/icons/drinks.svg",
    iconAlt: "Champagne bottle",
  },
  {
    time: "TBD",
    title: "Wedding Breakfast",
    icon: "/icons/dinner.svg",
    iconAlt: "Domed presentation plate",
  },
  {
    time: "TBD",
    title: "Speeches",
    icon: "/icons/speeches.svg",
    iconAlt: "Heart symbol with waves radiating from it",
  },
  {
    time: "TBD",
    title: "Small break",
    icon: "/icons/clock.svg",
    iconAlt: "Clock face with hands pointing to 12 and 4",
  },
  {
    time: "TBD",
    icon: "/icons/music.svg",
    iconAlt: "Musical note with hearts around it",
    title: "Evening reception",
  },
  {
    time: "TBD",
    title: "Evening Food",
    icon: "/icons/supper.svg",
    iconAlt: "Mug with a heart symbol on it",
  },
  {
    time: "Late",
    title: "Evening ends",
    icon: "/icons/sleep.svg",
    iconAlt: "Thought bubble with Zzzs in it",
  },
];

const Agenda = ({ times }: { times: TimeSlot[] }) => {
  return (
    <div className="relative m-8">
      <div
        className="border-r-8 border-burgundy absolute h-full top-0"
        style={{ left: "calc(50% - 4px)" }}
      ></div>
      <ul className="relative list-none m-0 p-0 flex flex-col justify-between">
        {times.map((timeSlot, index) => (
          <li
            key={timeSlot.title}
            className="grid grid-cols-3 items-center justify-center peer peer-first:mt-16"
          >
            <div
              className={`font-bold text-2xl sm:text-3xl text-slate-700 ${
                index % 2 === 0 ? "text-right order-1" : "text-left order-3"
              }`}
            >
              {timeSlot.title}
            </div>

            {timeSlot.icon ? (
              <div
                className={`bg-burgundy rounded-full h-20 w-20 flex items-center justify-center mx-auto order-2`}
              >
                <Image
                  src={timeSlot.icon}
                  alt={timeSlot.iconAlt!}
                  width={48}
                  height={48}
                />
              </div>
            ) : (
              <div className="mx-auto order-2"></div>
            )}

            <div
              className={`font-extrabold text-xl sm:text-2xl text-amber-800 ${
                index % 2 === 0 ? "text-left order-3" : "text-right order-1"
              } flex-grow`}
            >
              {timeSlot.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AgendaSection = () => {
  return (
    <PageSection
      background={SectionBackground.Khaki}
      id="agenda"
      className="text-slate-900 items-center"
    >
      <h1 className="text-4xl font-bold mt-20">Agenda</h1>
      <p className="mt-5 mx-20 text-lg lg:text-xl">
        We&apos;re currently still finalising the agenda for the day, but
        here&apos;s a rough idea of what to expect:
      </p>
      <p className="mb-3 mx-20 text-lg lg:text-xl">
        With the ceremony starting at 12:30pm,{" "}
        <span className="font-extrabold">
          please arrive at the venue for no later than 12pm.
        </span>{" "}
        We&apos;ll be serving drinks and canapés after the ceremony, followed by
        the wedding breakfast, speeches, and evening reception.
      </p>

      <Agenda times={times} />

      <NextSectionLink target="location">
        Where&rsquo;s it all happening?
      </NextSectionLink>
    </PageSection>
  );
};
