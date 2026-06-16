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
        </div>
      </section>

    </>
  );
}
