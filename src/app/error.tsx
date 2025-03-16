"use client";

import SomethingWentWrong from "@/components/custom/something-went-wrong";
import { cn } from "@/lib/utils";

export default function ErrorPage() {
  return (
    <SomethingWentWrong className={cn("border-none h-[calc(100dvh_-_132px)]")} />
  );
}
