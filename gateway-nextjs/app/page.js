import Link from "next/link";

const hotspots = [
  {
    label: "Insomnia — Coffea 200",
    href: "https://joettecalabrese.com/blog/put-your-kids-to-bed-sleep/",
    style: { left: "28.18%", top: "28.77%", width: "18.62%", height: "8.51%" },
  },
  {
    label: "Fevers — Belladonna 30",
    href: "https://joettecalabrese.com/blog/handle-fevers-with-homeopathy-not-drugs/",
    style: { left: "66.56%", top: "34.40%", width: "18.14%", height: "8.38%" },
  },
  {
    label: "Teething — Chamomilla 200",
    href: "https://joettecalabrese.com/podcast1/podcast-5-can-homeopathy-baby/",
    style: { left: "11.17%", top: "35.27%", width: "18.46%", height: "8.51%" },
  },
  {
    label: "Tummy Troubles — Nux Vomica 200",
    href: "https://joettecalabrese.com/blog/nip-colic-in-the-gut/",
    style: { left: "69.64%", top: "45.15%", width: "18.30%", height: "8.38%" },
  },
  {
    label: "Infections — Hypericum 200 + Arsenicum 200",
    href: "https://joettecalabrese.com/blog/emergency-remedy-series-bites-makes-me-itchy-you-too/",
    style: { left: "66.56%", top: "55.28%", width: "17.98%", height: "8.51%" },
  },
  {
    label: "Colds and Flus — Aconitum 200 + Bryonia 30",
    href: "https://joettecalabrese.com/blog/the-alphabet-soup-of-viruses-now-its-rsv/",
    style: { left: "14.41%", top: "56.79%", width: "18.46%", height: "8.51%" },
  },
  {
    label: "Insect Bites — Ledum 200",
    href: "https://joettecalabrese.com/blog/my-top-5-sizzling-summer-remedies/",
    style: { left: "72.39%", top: "65.17%", width: "18.30%", height: "8.51%" },
  },
  {
    label: "Injuries — Arnica 200",
    href: "https://joettecalabrese.com/blog/emergency-remedy-series-you-know-arnica-or-do-you/",
    style: { left: "23.00%", top: "66.54%", width: "18.62%", height: "8.51%" },
  },
  {
    label: "Ear Infections — Hepar Sulph 200",
    href: "https://joettecalabrese.com/blog/swimmers-ear-lets-time-it/",
    style: { left: "7.45%", top: "46.40%", width: "18.46%", height: "8.51%" },
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <div className="announcement">
        Next class: <strong>January 7th, 2027!</strong>
      </div>

      <div className="image-page">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image000001.jpeg"
          alt="Gateway with Kari - Introduction to Homeopathy, practical protocols for your family."
        />

        {hotspots.map((spot) => (
          <a
            key={spot.label}
            className="hotspot"
            href={spot.href}
            target="_blank"
            rel="noopener noreferrer"
            style={spot.style}
          >
            <span className="sr-only">{spot.label}</span>
          </a>
        ))}

        <a
          className="hotspot-bar"
          href="mailto:homeopathyispractical@gmail.com?subject=Register%20for%20Introduction%20to%20Homeopathy"
          style={{ left: "20%", top: "86.8%", width: "60%", height: "2.7%" }}
        >
          <span className="sr-only">Email teacher for link to register</span>
        </a>
        <a
          className="hotspot-bar"
          href="https://joettecalabrese.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ left: "26%", top: "90.1%", width: "48%", height: "2.3%" }}
        >
          <span className="sr-only">
            Learn more about homeopathy at joettecalabrese.com
          </span>
        </a>
      </div>

      <div className="buy-books">
        <a
          className="btn btn-buy"
          href="https://discoverpracticalhomeopathy.com/studyguide-mailed/?affiliate=275"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Your Books Here!
        </a>
      </div>

      <div className="disclaimer-link">
        <Link href="/disclaimer">Disclaimer</Link>
      </div>
    </div>
  );
}
