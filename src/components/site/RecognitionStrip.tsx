import { Landmark, BookOpen, Award } from "lucide-react";

const items = [
  {
    icon: Landmark,
    text: "Recognised by Government of India & WHO",
  },
  {
    icon: BookOpen,
    text: "Peer-reviewed Journal — JPSIC, published by Wolters Kluwer",
  },
  {
    icon: Award,
    text: "Annual National Conference — HISICON since 1994",
  },
];

export function RecognitionStrip() {
  return (
    <section
      className="border-b border-border"
      style={{ backgroundColor: "#F5F5F5", paddingTop: "60px", paddingBottom: "60px" }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <Icon className="h-6 w-6 shrink-0 text-primary" strokeWidth={2} />
              <p className="text-sm font-semibold leading-snug text-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
