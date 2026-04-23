import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Conferences — HISI" },
      {
        name: "description",
        content:
          "HISICON, CMEs, workshops and chapter meetings across India.",
      },
      { property: "og:title", content: "Events & Conferences — HISI" },
      {
        property: "og:description",
        content:
          "HISICON, CMEs, workshops and chapter meetings across India.",
      },
    ],
  }),
  component: () => (
    <PageShell
      title="Events & Conferences"
      subtitle="HISICON, CMEs, workshops and chapter meetings across India."
    />
  ),
});
