import TipsTypeClient from "./TipsTypeClient";

export function generateStaticParams() {
  return ["traveler", "nomad", "student"].map((type) => ({ type }));
}

export default function TipsTypePage({ params }: { params: { type: string } }) {
  return <TipsTypeClient type={params.type} />;
}
