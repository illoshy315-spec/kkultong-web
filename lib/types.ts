export type Place = {
  id: string;
  name_en: string;
  name_ko?: string;
  category: string;
  area: string;
  address?: string;
  lat: number;
  lng: number;
  english_available: boolean | null;
  foreign_card: boolean | null;
  reservation_required: boolean;
  price_range: string;
  tip: string;
  scene?: string;
  dramas?: string[];
  artists?: string[];
  instagram?: string | null;
  last_verified: string;
};

export type Route = {
  id: string;
  title: string;
  title_ko: string;
  drama?: string | null;
  artists?: string[];
  duration: string;
  area: string;
  transport: string;
  place_ids: string[];
  tip: string;
  order_note: string;
};

export const CATEGORY_SLUGS: Record<string, string> = {
  drama:          "drama_location",
  kpop:           "kpop_pilgrimage",
  "personal-color": "personal_color",
  halal:          "halal",
  vegan:          "vegan",
  culinary:       "culinary_class_wars",
};

export const SLUG_TO_CATEGORY = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([slug, cat]) => [cat, slug])
);

export const CATEGORY_META: Record<string, {
  label: string;
  emoji: string;
  title: string;
  description: string;
  color: string;
}> = {
  drama_location: {
    label: "K-Drama Filming Locations",
    emoji: "🎬",
    title: "K-Drama Filming Locations in Korea — Verified Guide",
    description: "Visit the real filming locations from Goblin, Lovely Runner, When Life Gives You Tangerines, Hotel Del Luna and more. Includes maps, transport tips, and what to expect.",
    color: "#1565c0",
  },
  kpop_pilgrimage: {
    label: "K-Pop Pilgrimage",
    emoji: "🎤",
    title: "K-Pop Pilgrimage in Korea — HYBE, SM, JYP & More",
    description: "HYBE INSIGHT, KWANGYA @ Seoul, HiKR Ground, K-Star Road, and BTS hometown spots in Busan. Verified tips for foreign fans.",
    color: "#c62828",
  },
  personal_color: {
    label: "Personal Color Diagnosis",
    emoji: "🎨",
    title: "Personal Color Diagnosis in Korea — English-Friendly Shops",
    description: "Find your season (Spring/Summer/Autumn/Winter) at verified English-available personal color shops in Seoul. Prices, booking tips, and what to bring.",
    color: "#9c27b0",
  },
  halal: {
    label: "Halal Food in Korea",
    emoji: "🕌",
    title: "Halal Food in Korea — Certified Restaurants for Muslim Travelers",
    description: "Certified halal restaurants and Muslim-friendly dining in Seoul. Foreign card accepted, English menus noted.",
    color: "#2e7d32",
  },
  vegan: {
    label: "Vegan & Vegetarian",
    emoji: "🌱",
    title: "Vegan & Vegetarian Food in Korea — English Guide",
    description: "100% plant-based and vegetarian-friendly restaurants in Korea. What to order, what to avoid, and which places speak English.",
    color: "#558b2f",
  },
  culinary_class_wars: {
    label: "Culinary Class Wars",
    emoji: "🍽️",
    title: "Culinary Class Wars Chef Restaurants — How to Book as a Foreigner",
    description: "Visit restaurants from Netflix's Culinary Class Wars (흑백요리사). Reservation tips for CatchTable, budget options, and which chefs are most foreigner-friendly.",
    color: "#e65100",
  },
};
