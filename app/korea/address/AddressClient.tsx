"use client";

import { useState } from "react";

const EXAMPLES = [
  "서울특별시 용산구 한강대로 101",
  "서울 종로구 수표로28길 17-1",
  "서귀포시 성산읍 일출로 284-12",
  "강원도 강릉시 주문진읍 교항리 81-32",
];

export default function AddressClient() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ translated: string; lat?: number; lng?: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const translate = async (text?: string) => {
    const query = text ?? input;
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: query }),
      });
      const data = await res.json();
      if (data.translated) {
        setResult(data);
        if (text) setInput(text);
      } else {
        setError(data.error ?? "Address not found.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result?.translated) {
      navigator.clipboard.writeText(result.translated);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm mb-6" style={{ color: "var(--gray)", opacity: 0.5 }}>
        <a href="/korea" style={{ textDecoration: "underline" }}>Korea Guide</a> → Address Translator
      </p>

      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--teal)" }}>
          📍 Address Translator
        </p>
        <h1 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "var(--gray)" }}>
          Korean Address<br />
          <span style={{ color: "var(--teal)" }}>→ English</span>
        </h1>
        <p className="text-base" style={{ color: "var(--gray)", opacity: 0.7 }}>
          Paste a Korean address — show it to your taxi driver, hotel, or use it for delivery.
        </p>
      </div>

      {/* Input */}
      <div className="rounded-2xl border-2 p-6 mb-6" style={{ borderColor: "var(--teal)", backgroundColor: "#f0faf6" }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), translate())}
          placeholder="서울특별시 중구 명동길 74"
          rows={3}
          className="w-full rounded-xl px-4 py-3 border text-sm mb-4 resize-none"
          style={{ borderColor: "#cce8e0", outline: "none", backgroundColor: "white" }}
        />
        <button
          onClick={() => translate()}
          disabled={loading || !input.trim()}
          className="px-6 py-2.5 rounded-xl font-semibold text-white text-sm disabled:opacity-40 transition-opacity"
          style={{ backgroundColor: "var(--teal)" }}
        >
          {loading ? "Looking up…" : "Translate"}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="rounded-2xl border-2 p-6 mb-6" style={{ borderColor: "#e5e7eb", backgroundColor: "white" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--teal)" }}>
            English Address
          </p>
          <p className="text-lg font-bold mb-4" style={{ color: "var(--gray)" }}>{result.translated}</p>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-all hover:bg-gray-50"
              style={{ borderColor: "#e5e7eb", color: "var(--gray)" }}
            >
              Copy
            </button>
            {result.lat && result.lng && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${result.lat},${result.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--teal)", textDecoration: "none" }}
              >
                Open in Google Maps →
              </a>
            )}
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-xl p-4 mb-6" style={{ backgroundColor: "#fef2f2", color: "var(--red)" }}>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Examples */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gray)", opacity: 0.5 }}>
          Try an example
        </p>
        <div className="space-y-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              onClick={() => translate(ex)}
              className="w-full text-left px-4 py-3 rounded-xl border text-sm hover:bg-gray-50 transition-colors font-mono"
              style={{ borderColor: "#e5e7eb", color: "var(--gray)" }}
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-8 border-t" style={{ borderColor: "#e5e7eb" }}>
        <a href="/korea" className="text-sm font-semibold" style={{ color: "var(--red)" }}>
          ← Back to Korea Guide
        </a>
      </div>
    </div>
  );
}
