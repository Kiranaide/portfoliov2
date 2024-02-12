"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResourceLink(props) {
  const router = useRouter();
  useEffect(() => {
    const target = props.link;
    router.push(target);
  }, [router, props]);
}
