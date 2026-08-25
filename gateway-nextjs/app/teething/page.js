import RemedyPage from "@/app/_components/RemedyPage";

export const metadata = { title: "Teething | Gateway with Kari" };

export default function Page() {
  return (
    <RemedyPage
      badge="gold"
      name="Teething"
      potency="Chamomilla 200"
      blurb="For the fussiest teething days, Chamomilla is a homeopathic staple parents keep in their diaper bag."
    />
  );
}
