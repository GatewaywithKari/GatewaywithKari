import Link from "next/link";

export default function RemedyPage({ badge, name, potency, blurb }) {
  return (
    <>
      <header className="site">
        <Link className="brand" href="/">
          Gateway with Kari
        </Link>
      </header>
      <div className="announcement">
        Next class: <strong>January 7th, 2027!</strong>
      </div>

      <section className="remedy-hero wrap">
        <span className={`badge ${badge}`}>Introduction to Homeopathy</span>
        <h1>{name}</h1>
        <p className="potency">{potency}</p>
        <p className="blurb">{blurb}</p>
        <p className="note">
          This is general education, not a diagnosis or treatment plan. Join
          the class to learn how and when to use each remedy safely.
        </p>
        <a
          className="btn btn-primary"
          href="mailto:homeopathyispractical@gmail.com?subject=Register%20for%20Introduction%20to%20Homeopathy"
        >
          Email to register
        </a>
        <br />
        <Link className="back-link" href="/">
          &larr; Back to all remedies
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
