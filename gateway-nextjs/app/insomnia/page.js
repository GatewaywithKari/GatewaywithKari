import RemedyPage from "@/app/_components/RemedyPage";

export const metadata = { title: "Insomnia | Gateway with Kari" };

export default function Page() {
  return (
    <RemedyPage
      badge="blue"
      name="Insomnia"
      potency="Coffea 200"
      blurb="Racing thoughts at bedtime? Coffea is the classic go-to remedy families reach for restless nights and trouble settling down."
    />
  );
}
