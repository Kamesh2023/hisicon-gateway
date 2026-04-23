import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      {
        title:
          "JPSIC — Journal of Patient Safety and Infection Control | HISI",
      },
      {
        name: "description",
        content:
          "HISI's official peer-reviewed journal, published by Wolters Kluwer.",
      },
      {
        property: "og:title",
        content: "JPSIC — Journal of Patient Safety and Infection Control",
      },
      {
        property: "og:description",
        content:
          "HISI's official peer-reviewed journal, published by Wolters Kluwer.",
      },
    ],
  }),
  component: () => (
    <PageShell
      title="JPSIC — Journal of Patient Safety and Infection Control"
      subtitle="HISI's official peer-reviewed journal, published by Wolters Kluwer."
    />
  ),
});
