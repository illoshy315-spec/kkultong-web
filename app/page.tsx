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

      {/* Features */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--gray)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-white text-center">
          {[
            { emoji: "🎵", title: "K-pop & K-drama", desc: "Learn from the content you already love" },
            { emoji: "📖", title: "Free Worksheets", desc: "7-week Hangul curriculum, no signup needed" },
            { emoji: "🗺️", title: "Real-world Korean", desc: "Phrases that actually work in Korea" },
          ].map((f) => (
            <div key={f.title} className="p-8 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)" }}>{f.desc}</p>
            </div>
          ))}
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
