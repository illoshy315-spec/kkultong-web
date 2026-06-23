import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kkultong",
  description: "Get in touch with the Kkultong team.",
  alternates: {
    canonical: "https://kkultongkorea.com/contact",
  },
};

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--amber)" }}>
        Get in Touch
      </p>
      <h1 className="text-4xl font-black mb-10" style={{ color: "var(--gray)" }}>
        Contact
      </h1>
      <div className="space-y-4 text-lg" style={{ color: "var(--gray)" }}>
        <p>Have a question, suggestion, or just want to say 안녕?</p>
        <p>
          Email us at{" "}
          <a
            href="mailto:kkultongkorea@gmail.com"
            className="font-bold underline"
            style={{ color: "var(--amber)" }}
          >
            kkultongkorea@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
