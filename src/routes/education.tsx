import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Resources — HISI" },
      {
        name: "description",
        content: "Evidence-based learning resources for IPC professionals.",
      },
      { property: "og:title", content: "Education & Resources — HISI" },
      {
        property: "og:description",
        content: "Evidence-based learning resources for IPC professionals.",
      },
    ],
  }),
  component: () => (
    <PageShell
      title="Education & Resources"
      subtitle="Evidence-based learning resources for IPC professionals."
    />
  ),
});
