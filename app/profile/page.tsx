"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { createClient } from "@/lib/supabase";
import placesData from "@/data/places.json";
import type { Place } from "@/lib/types";

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [savedPlaces, setSavedPlaces] = useState<Place[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.replace("/korea");
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;
    const supabase = createClient();
    supabase
      .from("saved_places")
      .select("place_id, saved_at")
      .eq("user_id", user.id)
      .order("saved_at", { ascending: false })
      .then(({ data }) => {
        if (!data) return;
        const ids = new Set(data.map((d) => d.place_id));
        const matched = (placesData as Place[]).filter((p) => ids.has(p.id));
        setSavedPlaces(matched);
        setFetching(false);
      });
  }, [user]);

  if (loading || !user) return null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        {user.user_metadata?.avatar_url && (
          <img src={user.user_metadata.avatar_url} alt="profile" className="w-14 h-14 rounded-full" />
        )}
        <div>
          <h1 className="text-2xl font-black" style={{ color: "var(--gray)" }}>
            {user.user_metadata?.full_name ?? user.email}
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>{user.email}</p>
        </div>
        <button
          onClick={signOut}
          className="ml-auto text-xs px-3 py-1.5 rounded-lg border"
          style={{ color: "var(--gray)", borderColor: "#e5e7eb", opacity: 0.5 }}
        >
          Sign out
        </button>
      </div>

      {/* Saved places */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gray)", opacity: 0.4 }}>
          ❤️ Saved Places
        </p>

        {fetching ? (
          <p className="text-sm py-8 text-center" style={{ color: "var(--gray)", opacity: 0.4 }}>Loading…</p>
        ) : savedPlaces.length === 0 ? (
          <div className="text-center py-16" style={{ color: "var(--gray)", opacity: 0.4 }}>
            <p className="text-4xl mb-4">🤍</p>
            <p className="text-sm">No saved places yet.</p>
            <a href="/korea" className="text-sm font-semibold mt-3 inline-block" style={{ color: "var(--teal)" }}>
              Browse Korea Guide →
            </a>
          </div>
        ) : (
          <div className="space-y-3">
            {savedPlaces.map((place) => (
              <a
                key={place.id}
                href={`/korea/${Object.entries({
                  drama_location: "drama", kpop_pilgrimage: "kpop",
                  k_beauty: "beauty", k_food: "food",
                  k_experience: "experience", k_shopping: "shopping",
                }).find(([k]) => k === place.category)?.[1] ?? "drama"}`}
                className="flex items-start gap-4 rounded-xl border p-4 hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#e5e7eb", textDecoration: "none" }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm" style={{ color: "var(--gray)" }}>{place.name_en}</p>
                  {place.name_ko && (
                    <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>{place.name_ko}</p>
                  )}
                  <p className="text-xs mt-0.5" style={{ color: "var(--gray)", opacity: 0.5 }}>{place.area}</p>
                  {place.scene && (
                    <p className="text-xs mt-1" style={{ color: "#1565c0", fontStyle: "italic" }}>🎬 {place.scene}</p>
                  )}
                </div>
                <span className="text-lg">❤️</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
