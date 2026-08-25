import RemedyPage from "@/app/_components/RemedyPage";

export const metadata = { title: "Tummy Troubles | Gateway with Kari" };

export default function Page() {
  return (
    <RemedyPage
      badge="blue"
      name="Tummy Troubles"
      potency="Nux Vomica 200"
      blurb="Overindulgence, tummy aches, and general digestive upset are Nux Vomica's specialty."
    />
  );
}
