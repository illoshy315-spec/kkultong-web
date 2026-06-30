"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function TipsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const type = searchParams.get("type");
    if (type && ["traveler", "nomad", "student"].includes(type)) {
      router.replace(`/korea/tips/${type}`);
    }
  }, [searchParams, router]);

  return null;
}
