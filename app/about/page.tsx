import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kkultong — Free Korean Learning for K-Drama Fans",
  description: "Kkultong (꿀통, \"honey jar\") makes free Korean learning content for K-pop and K-drama fans who want to go beyond \"annyeonghaseyo.\" Real Korean, the way it's actually spoken.",
  alternates: {
    canonical: "https://kkultongkorea.com/about",
  },
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
        <p>
          <strong>Kkultong (꿀통) means <em>honey jar</em> in Korean</strong> — sweet, useful, and something you keep coming back to.
        </p>
        <p>
          We make free Korean learning content for K-pop and K-drama fans who want to go beyond &quot;annyeonghaseyo&quot; — real Korean, the way it&apos;s actually spoken.
        </p>
        <hr className="my-8 opacity-20" />
        <p>
          Kkultong is run by a native Korean speaker who spent years wondering why Korean was so hard to teach — and decided to find a better way.
        </p>
        <p>
          Textbook Korean is stiff, formal, and oddly detached from the Korean that actually lives in dramas, streets, and group chats. The gap between what learners study and what Koreans actually say has always bothered me — so I decided to do something about it.
        </p>
        <p>
          This site is my attempt to teach Korean the way it deserves to be taught: with the logic explained, the history included, and the real-life usage front and center.
        </p>
        <hr className="my-8 opacity-20" />
        <p className="font-semibold">Everything here is free. No signup. No upsell. Just Korean.</p>
        <p className="text-base" style={{ color: "rgba(44,44,42,0.6)" }}>
          꿀통 | kkultongkorea@gmail.com
        </p>
      </div>
    </section>
  );
}
