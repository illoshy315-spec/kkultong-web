import TipsTypeClient from "./TipsTypeClient";

export function generateStaticParams() {
  return ["traveler", "nomad", "student"].map((type) => ({ type }));
}

export default async function TipsTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <TipsTypeClient type={type} />;
}
