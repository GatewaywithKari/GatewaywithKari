import RemedyPage from "@/app/_components/RemedyPage";

export const metadata = { title: "Infections | Gateway with Kari" };

export default function Page() {
  return (
    <RemedyPage
      badge="gold"
      name="Infections"
      potency="Hypericum 200 + Arsenicum 200"
      blurb="This remedy pairing is often reached for to support the body through infections, especially those involving nerve-rich areas."
    />
  );
}
