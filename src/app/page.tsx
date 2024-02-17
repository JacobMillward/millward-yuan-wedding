import { ScrollToTopButton } from "./scroll-to-top-link";
import Navbar from "./navbar";
import { TopSection } from "./(sections)/top-section";
import { AgendaSection } from "./(sections)/agenda";
import { RsvpSection } from "./(sections)/rsvp";
import { VenueSection } from "./(sections)/venue";
import { Satisfy } from "next/font/google";

export const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-satisfy",
});

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

      <TopSection />
      <AgendaSection />
      <VenueSection />
      <RsvpSection />

      <ScrollToTopButton />
    </main>
  );
}
