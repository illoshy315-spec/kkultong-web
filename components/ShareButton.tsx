"use client";

// X's web intent URL needs no API key, no auth, and no CSP changes — just a link
// that opens X's own compose window with the text/url pre-filled.
export default function ShareButton({ url, text }: { url: string; text: string }) {
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border"
      style={{ borderColor: "#e5e7eb", color: "var(--gray)", textDecoration: "none" }}
    >
      𝕏 Share
    </a>
  );
}
