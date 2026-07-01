export function splitSentences(text: string): string[] {
  return (text.match(/[^.!?]+[.!?]+\s*/g) ?? [text]).map((s) => s.trim()).filter(Boolean);
}

export function parseOrderNote(text: string): { day: string | null; steps: string[] }[] {
  const dayMatches = [...text.matchAll(/Day \d+:/g)];
  if (dayMatches.length === 0) {
    return [{ day: null, steps: text.split("→").map((s) => s.trim()).filter(Boolean) }];
  }
  const parts: { day: string; steps: string[] }[] = [];
  for (let i = 0; i < dayMatches.length; i++) {
    const start = dayMatches[i].index! + dayMatches[i][0].length;
    const end = i + 1 < dayMatches.length ? dayMatches[i + 1].index! : text.length;
    parts.push({
      day: dayMatches[i][0].replace(":", ""),
      steps: text.slice(start, end).trim().split("→").map((s) => s.trim()).filter(Boolean),
    });
  }
  return parts;
}
