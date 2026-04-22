import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { RecognitionStrip } from "@/components/site/RecognitionStrip";

import { News } from "@/components/site/News";
import { Events } from "@/components/site/Events";
import { Resources } from "@/components/site/Resources";
import { HisiconBanner } from "@/components/site/HisiconBanner";
import { Chapters } from "@/components/site/Chapters";
import { JournalSpotlight } from "@/components/site/JournalSpotlight";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Hospital Infection Society – India (HISI) | Infection Prevention & AMR",
      },
      {
        name: "description",
        content:
          "HISI is India's premier academic society for healthcare-associated infection prevention, control and antimicrobial stewardship. Recognised by WHO and the Government of India. 1,500+ members across 20+ city chapters since 1991.",
      },
      { property: "og:title", content: "Hospital Infection Society – India (HISI)" },
      {
        property: "og:description",
        content:
          "India's premier society for infection prevention & control — serving healthcare professionals since 1991.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <RecognitionStrip />
        <AboutStrip />
        <News />
        <Events />
        <Resources />
        <HisiconBanner />
        <Chapters />
        <JournalSpotlight />
      </main>
      <Footer />
    </div>
  );
}
