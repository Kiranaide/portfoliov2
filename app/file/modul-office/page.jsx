"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const target = "https://hisaki.s-ul.eu/zfbFZ82Q";
    router.push(target);
  }, [router]);
}
