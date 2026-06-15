export default function Privacy() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-black mb-10" style={{ color: "var(--gray)" }}>
        Privacy Policy
      </h1>
      <div className="space-y-6 leading-relaxed" style={{ color: "var(--gray)" }}>
        <p className="text-sm opacity-60">Last updated: June 2026</p>

        <h2 className="text-xl font-bold mt-8">1. Information We Collect</h2>
        <p>We collect your email address when you subscribe to our newsletter. We do not collect any other personal data.</p>

        <h2 className="text-xl font-bold mt-8">2. How We Use Your Information</h2>
        <p>Your email is used solely to send you Korean learning content and updates from Kkultong. We will never sell or share your email with third parties.</p>

        <h2 className="text-xl font-bold mt-8">3. Cookies</h2>
        <p>This site does not use tracking cookies.</p>

        <h2 className="text-xl font-bold mt-8">4. Your Rights</h2>
        <p>You can unsubscribe at any time by clicking the unsubscribe link in any email, or by contacting us at <a href="mailto:kkultongkorea@gmail.com" className="underline" style={{ color: "var(--amber)" }}>kkultongkorea@gmail.com</a>.</p>

        <h2 className="text-xl font-bold mt-8">5. Contact</h2>
        <p>For any privacy-related questions, email us at <a href="mailto:kkultongkorea@gmail.com" className="underline" style={{ color: "var(--amber)" }}>kkultongkorea@gmail.com</a>.</p>
      </div>
    </section>
  );
}
