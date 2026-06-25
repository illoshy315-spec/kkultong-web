import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  if (!text) return NextResponse.json({ error: "No text" }, { status: 400 });

  const clientId = process.env.PAPAGO_CLIENT_ID;
  const clientSecret = process.env.PAPAGO_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: "Papago API keys not configured" }, { status: 500 });
  }

  const res = await fetch("https://naveropenapi.apigw.ntruss.com/nmt/v1/translation", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-NCP-APIGW-API-KEY-ID": clientId,
      "X-NCP-APIGW-API-KEY": clientSecret,
    },
    body: new URLSearchParams({ source: "ko", target: "en", text }),
  });

  const data = await res.json();
  const translated = data?.message?.result?.translatedText;
  if (!translated) return NextResponse.json({ error: "Translation failed" }, { status: 500 });

  return NextResponse.json({ translated });
}
