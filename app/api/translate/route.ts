import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  if (!text?.trim()) {
    return NextResponse.json({ error: "No text provided" }, { status: 400 });
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(text)}&key=${apiKey}&language=en`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.status === "OK" && data.results?.[0]) {
    const result = data.results[0];
    return NextResponse.json({
      translated: result.formatted_address,
      lat: result.geometry.location.lat,
      lng: result.geometry.location.lng,
    });
  }

  return NextResponse.json(
    { error: "Address not found. Try a more specific Korean address." },
    { status: 404 }
  );
}
