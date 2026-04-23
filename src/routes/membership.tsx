import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Join HISI — Membership" },
      {
        name: "description",
        content:
          "Become part of India's leading infection prevention society.",
      },
      { property: "og:title", content: "Join HISI" },
      {
        property: "og:description",
        content:
          "Become part of India's leading infection prevention society.",
      },
    ],
  }),
  component: () => (
    <PageShell
      title="Join HISI"
      subtitle="Become part of India's leading infection prevention society."
    />
  ),
});
