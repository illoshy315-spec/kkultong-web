import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 py-24" style={{ backgroundColor: "var(--background)" }}>
        <p className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--amber)" }}>
          Who We Are
        </p>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ color: "var(--gray)" }}>
          For everyone who<br />
          <span style={{ color: "var(--amber)" }}>fell in love</span> with Korea.
        </h1>
        <div className="text-lg md:text-xl max-w-xl space-y-2 mb-12" style={{ color: "var(--gray)" }}>
          <p>Not textbook Korean.</p>
          <p>The Korean from your favorite drama.</p>
          <p>The Korean that works at the market.</p>
          <p>The Korean that saves you in a taxi.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/worksheet"
            className="px-8 py-4 rounded-full font-bold text-white text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--amber)" }}
          >
            Start Learning — Free
          </Link>
          <a
            href="#newsletter"
            className="px-8 py-4 rounded-full font-bold text-lg border-2 transition-colors hover:text-white hover:bg-[var(--gray)]"
            style={{ borderColor: "var(--gray)", color: "var(--gray)" }}
          >
            Get Weekly Updates
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-20 px-6 text-center" style={{ backgroundColor: "var(--teal)" }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">지금 바로. Right now.</h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>Get a new Korean lesson in your inbox every week.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--amber)" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
