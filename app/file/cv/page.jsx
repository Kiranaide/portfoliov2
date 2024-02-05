import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const target =
      "https://drive.google.com/file/d/1wE8GjrY-9EWH4c90hFOyxJaE1cxAORu6/view";
    router.push(target);
  }, [router]);
}
