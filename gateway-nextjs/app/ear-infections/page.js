import RemedyPage from "@/app/_components/RemedyPage";

export const metadata = { title: "Ear Infections | Gateway with Kari" };

export default function Page() {
  return (
    <RemedyPage
      badge="blue"
      name="Ear Infections"
      potency="Hepar Sulph 200"
      blurb="When little ears ache, Hepar Sulph is one of the most commonly reached-for remedies in a homeopathic first-aid kit."
    />
  );
}
