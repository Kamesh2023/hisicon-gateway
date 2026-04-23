import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — HISI" },
      {
        name: "description",
        content:
          "Get in touch with the HISI Secretariat or your local chapter.",
      },
      { property: "og:title", content: "Contact Us — HISI" },
      {
        property: "og:description",
        content:
          "Get in touch with the HISI Secretariat or your local chapter.",
      },
    ],
  }),
  component: () => (
    <PageShell
      title="Contact Us"
      subtitle="Get in touch with the HISI Secretariat or your local chapter."
    />
  ),
});
