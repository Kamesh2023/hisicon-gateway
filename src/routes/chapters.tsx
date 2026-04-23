import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/chapters")({
  head: () => ({
    meta: [
      { title: "City Chapters — HISI" },
      {
        name: "description",
        content: "HISI's regional network across 20+ cities in India.",
      },
      { property: "og:title", content: "City Chapters — HISI" },
      {
        property: "og:description",
        content: "HISI's regional network across 20+ cities in India.",
      },
    ],
  }),
  component: () => (
    <PageShell
      title="City Chapters"
      subtitle="HISI's regional network across 20+ cities in India."
    />
  ),
});
