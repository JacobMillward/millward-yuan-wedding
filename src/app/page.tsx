import { PageSection, SectionBackground } from "./page-section";
import { ScrollToTopButton } from "./scroll-to-top-link";
import { NextSectionLink } from "./next-section-link";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar
        navLinks={[
          { title: "Schedule", target: "#schedule" },
          { title: "Location", target: "#location" },
          { title: "RSVP", target: "#rsvp" },
        ]}
      />
      <PageSection id="top" image="/images/1.jpg">
        <div className="flex flex-col bg-slate-900/50 rounded-md p-10 items-center m-auto text-white">
          <h1 className="text-4xl font-bold">Jacob &amp; Jianan</h1>
          <h2 className="text-2xl font-bold">are getting married!</h2>

          <p className="mt-3">
            Saturday, November 16th, 2024 at Pepper Arden Hall
          </p>
        </div>

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
