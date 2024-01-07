import { PageSection, SectionBackground } from "./page-section";
import { ScrollToTopButton } from "./scroll-to-top-link";
import { NextSectionLink } from "./next-section-link";
import Navbar from "./navbar";
import { TopSection } from "./(sections)/top-section";
import { AgendaSection } from "./(sections)/agenda";
import { RsvpSection } from "./(sections)/rsvp";
import { VenueSection } from "./(sections)/venue";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Navbar
        navLinks={[
          { title: "Agenda", target: "#agenda" },
          { title: "Location", target: "#location" },
          { title: "RSVP", target: "#rsvp" },
        ]}
      />
      <PageSection id="top" image="/images/1.jpg">
        <TopSection />

        <NextSectionLink target="agenda">What&apos;s the plan?</NextSectionLink>
      </PageSection>
      <PageSection background={SectionBackground.Blue} id="agenda">
        <AgendaSection />
        <NextSectionLink target="location">
          Where is it happening?
        </NextSectionLink>
      </PageSection>
      <PageSection id="location">
        <VenueSection />
        <NextSectionLink target="rsvp">RSVP</NextSectionLink>
      </PageSection>
      <PageSection background={SectionBackground.Blue} id="rsvp">
        <RsvpSection />
      </PageSection>

      <ScrollToTopButton />
    </main>
  );
}
