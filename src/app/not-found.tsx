"use client";

import EmptyPlaceholder from "@/components/custom/empty-placeholder";
import { NotFound } from "@/constant/assets/icons";
import { cn } from "@/lib/utils";

export default function Error() {
  return (
    <EmptyPlaceholder
      className={cn("border-none h-[calc(100dvh_-_132px)] animate-reveal")}
      title="404 | Page Not Found"
      icon={NotFound}
      description="This page has been moved or was never created."
    />
  );
}
