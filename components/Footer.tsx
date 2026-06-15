import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--gray)", color: "rgba(255,255,255,0.5)" }} className="text-sm">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 Kkultong. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <a href="mailto:kkultongkorea@gmail.com" className="hover:text-white transition-colors">kkultongkorea@gmail.com</a>
          <a href="https://kkultongkorea.com" className="hover:text-white transition-colors">kkultongkorea.com</a>
        </div>
      </div>
    </footer>
  );
}
