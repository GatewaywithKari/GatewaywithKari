import RemedyPage from "@/app/_components/RemedyPage";

export const metadata = { title: "Injuries | Gateway with Kari" };

export default function Page() {
  return (
    <RemedyPage
      badge="blue"
      name="Injuries"
      potency="Arnica 200"
      blurb="Bumps, bruises, and falls are a given with active kids — Arnica is the first remedy most homeopathic households reach for."
    />
  );
}
