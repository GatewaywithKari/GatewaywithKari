import Link from "next/link";

export const metadata = {
  title: "Disclaimer | Gateway with Kari",
};

export default function Disclaimer() {
  return (
    <>
      <header className="site">
        <Link className="brand" href="/">
          Gateway with Kari
        </Link>
      </header>

      <section className="remedy-hero wrap">
        <span className="badge blue">Please read</span>
        <h1>Disclaimer</h1>
        <p className="blurb" style={{ textAlign: "left", maxWidth: 600 }}>
          All information, consultations, courses, and materials provided by
          me are for educational purposes only. Kari Vanhoozer is not a
          licensed medical doctor or healthcare provider, and services do not
          include medical diagnosis, treatment, prescription, or prevention
          of disease. The relationship is that of educator and client. All
          health decisions are your responsibility and should be made in
          consultation with a qualified licensed healthcare provider. If you
          are experiencing a medical emergency, seek immediate medical
          attention or contact emergency services.
        </p>
        <Link className="back-link" href="/">
          &larr; Back to home
        </Link>
      </section>

      <footer className="site">
        <div className="brand-mini">Gateway with Kari</div>
        <p>
          Learn more about homeopathy at{" "}
          <a
            href="https://joettecalabrese.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            joettecalabrese.com
          </a>
        </p>
      </footer>
    </>
  );
}
