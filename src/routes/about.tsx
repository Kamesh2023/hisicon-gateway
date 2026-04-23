import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HISI — Hospital Infection Society – India" },
      {
        name: "description",
        content:
          "Three decades of advancing infection prevention and control across India.",
      },
      { property: "og:title", content: "About HISI" },
      {
        property: "og:description",
        content:
          "Three decades of advancing infection prevention and control across India.",
      },
    ],
  }),
  component: () => (
    <PageShell
      title="About HISI"
      subtitle="Three decades of advancing infection prevention and control across India."
    />
  ),
});
