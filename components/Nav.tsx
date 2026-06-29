"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/worksheet", label: "Worksheets" },
  { href: "/korea", label: "Korea Guide" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { user, signInWithGoogle, signOut, loading } = useAuth();

  return (
    <header style={{ backgroundColor: "var(--gray)" }} className="sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight" style={{ color: "var(--amber)" }}>
          꿀통 <span className="text-white font-light">kkultong</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}

          {!loading && (
            user ? (
              <div className="flex items-center gap-3">
                <Link href="/profile" className="text-sm text-white/80 hover:text-white transition-colors">
                  {user.user_metadata?.avatar_url ? (
                    <img src={user.user_metadata.avatar_url} alt="profile" className="w-7 h-7 rounded-full" />
                  ) : (
                    <span>👤</span>
                  )}
                </Link>
                <button
                  onClick={signOut}
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="text-sm font-semibold px-4 py-1.5 rounded-full transition-all"
                style={{ backgroundColor: "var(--amber)", color: "white" }}
              >
                Sign in
              </button>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: "var(--gray)" }} className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          {!loading && (
            user ? (
              <button onClick={signOut} className="text-left text-white/50 text-sm">
                Sign out ({user.email})
              </button>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="text-left font-semibold text-sm"
                style={{ color: "var(--amber)" }}
              >
                Sign in with Google
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}
