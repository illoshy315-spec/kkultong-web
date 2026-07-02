import tipsData from "./tips.json";

export type Tip = { q: string; a: string; source?: { label: string; url: string } };
export type TipSection = { icon: string; title: string; tips: Tip[] };
export type TipsData = Record<string, TipSection[]>;

const TIPS = tipsData as TipsData;

export default TIPS;
