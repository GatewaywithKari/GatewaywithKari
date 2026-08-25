import RemedyPage from "@/app/_components/RemedyPage";

export const metadata = { title: "Fevers | Gateway with Kari" };

export default function Page() {
  return (
    <RemedyPage
      badge="gold"
      name="Fevers"
      potency="Belladonna 30"
      blurb="For the sudden, hot, flushed fever, Belladonna is one of the most well-known acute remedies in homeopathy."
    />
  );
}
