import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kkultong — Free Korean Learning for K-Drama Fans",
  description: "Kkultong (꿀통, \"honey jar\") makes free Korean learning content for K-pop and K-drama fans who want to go beyond \"annyeonghaseyo.\" Real Korean, the way it's actually spoken.",
};

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--amber)" }}>
        Who We Are
      </p>
      <h1 className="text-4xl md:text-5xl font-black mb-10" style={{ color: "var(--gray)" }}>
        For everyone who fell in love with Korea.
      </h1>
      <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--gray)" }}>
        <p>Not textbook Korean.</p>
        <p>The Korean from your favorite drama.</p>
        <p>The Korean that works at the market.</p>
        <p>The Korean that saves you in a taxi.</p>
        <hr className="my-8 opacity-20" />
        <p>
          Kkultong (꿀통) means <strong>honey jar</strong> in Korean — sweet, useful, and something you keep coming back to.
        </p>
        <p>
          We make free Korean learning content for K-pop and K-drama fans who want to go beyond "annyeonghaseyo" —
          real Korean, the way it&apos;s actually spoken.
        </p>
        <hr className="my-8 opacity-20" />
        <p className="text-base" style={{ color: "rgba(44,44,42,0.6)" }}>
          Kkultong is run by a Korean culture enthusiast who got tired of textbook Korean —
          and decided to do something about it.
        </p>
      </div>
    </section>
  );
}
