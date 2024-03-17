"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function PageView({ slug }: { slug: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/view", {
      method: "POST",
      body: JSON.stringify({ slug }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.fine) {
          setCount(0);
          return;
        }

        setCount(data.count);
      });
  }, [slug]);

  if (count === 0) return null;

  return (
    <span
      className="flex text-sm ml-6 justify-end items-center gap-1 overflow-hidden text-muted-foreground"
      key={slug}
    >
      <Eye size={18} />
      <span className="animate-slide-up block font-medium">{count}</span>
    </span>
  );
}
