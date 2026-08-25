import RemedyPage from "@/app/_components/RemedyPage";

export const metadata = { title: "Colds and Flus | Gateway with Kari" };

export default function Page() {
  return (
    <RemedyPage
      badge="gold"
      name="Colds & Flus"
      potency="Aconitum 200 + Bryonia 30"
      blurb="From the first sniffle to the achy, want-to-be-left-alone stage, this remedy pairing covers the classic cold and flu picture."
    />
  );
}
