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
  drama:      "drama_location",
  kpop:       "kpop_pilgrimage",
  beauty:     "k_beauty",
  food:       "k_food",
  experience: "k_experience",
  shopping:   "k_shopping",
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
    description: "Visit the real filming locations from Goblin, Lovely Runner, When Life Gives You Tangerines, Hotel Del Luna and more. Maps, transport tips, and what to expect.",
    color: "#1565c0",
  },
  kpop_pilgrimage: {
    label: "K-Pop Pilgrimage",
    emoji: "🎤",
    title: "K-Pop Pilgrimage in Korea — HYBE, SM, JYP & More",
    description: "HYBE INSIGHT, KWANGYA @ Seoul, HiKR Ground, K-Star Road, and BTS hometown spots in Busan. Verified tips for foreign fans.",
    color: "#c62828",
  },
  k_beauty: {
    label: "K-Beauty",
    emoji: "💄",
    title: "K-Beauty in Korea — Personal Color, Olive Young & More",
    description: "Personal color diagnosis, body type consulting, Olive Young sale dates, Daiso beauty picks, and the best K-beauty experiences in Seoul.",
    color: "#9c27b0",
  },
  k_food: {
    label: "K-Food Experience",
    emoji: "🍽️",
    title: "K-Food Guide — Culinary Class Wars, Temple Food, Michelin & More",
    description: "Culinary Class Wars chef restaurants, temple food, Michelin picks, Blue Ribbon, halal, and vegan options. How to book as a foreigner.",
    color: "#e65100",
  },
  k_experience: {
    label: "K-Experience",
    emoji: "💃",
    title: "K-Experiences in Korea — Dance Classes, Hanbok, Temple Stay & More",
    description: "K-pop dance classes, hanbok rentals, jjimjilbang, temple stays, shamanic experiences, and more. All verified and foreigner-friendly.",
    color: "#00796b",
  },
  k_shopping: {
    label: "K-Shopping",
    emoji: "🛍️",
    title: "K-Shopping Guide — Olive Young, Daiso, Seongsu Popups & More",
    description: "Olive Young sale calendar, Daiso beauty must-buys, Dongdaemun wholesale, Seongsu popup schedule, and where to shop as a foreigner in Korea.",
    color: "#c2185b",
  },
};
