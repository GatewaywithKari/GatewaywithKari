import RemedyPage from "@/app/_components/RemedyPage";

export const metadata = { title: "Insect Bites | Gateway with Kari" };

export default function Page() {
  return (
    <RemedyPage
      badge="blue"
      name="Insect Bites"
      potency="Ledum 200"
      blurb="Bee stings, mosquito bites, and puncture wounds are the classic picture for Ledum."
    />
  );
}
