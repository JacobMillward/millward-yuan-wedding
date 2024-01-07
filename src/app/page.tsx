import Image from "next/image";
import { PageSection, SectionBackground } from "./page-section";
import { ScrollToTopButton } from "./scroll-to-top-link";
import { NextSectionLink } from "./next-section-link";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <PageSection id="top">
        <h1>Jacob + Jianan</h1>

        <NextSectionLink target="schedule">
          What&apos;s the plan?
        </NextSectionLink>
      </PageSection>
      <PageSection background={SectionBackground.Blue} id="schedule">
        <h1>Schedule</h1>
        <NextSectionLink target="location">
          Where is it happening?
        </NextSectionLink>
      </PageSection>
      <PageSection id="location">
        <h1>Venue</h1>
        <NextSectionLink target="rsvp">RSVP</NextSectionLink>
      </PageSection>
      <PageSection background={SectionBackground.Blue} id="rsvp">
        <h1>RSVP</h1>
      </PageSection>

      <ScrollToTopButton />
    </main>
  );
}
