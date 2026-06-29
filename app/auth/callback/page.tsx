"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(() => {
      router.replace("/korea");
    });
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p style={{ color: "var(--gray)", opacity: 0.5 }}>Signing in…</p>
    </div>
  );
}
