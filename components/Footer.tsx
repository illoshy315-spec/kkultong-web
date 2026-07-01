import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--gray)", color: "rgba(255,255,255,0.5)" }} className="text-sm">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2026 Kkultong</p>
        <div className="flex flex-wrap gap-6 justify-center">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <a href="mailto:kkultongkorea@gmail.com" className="hover:text-white transition-colors">kkultongkorea@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
