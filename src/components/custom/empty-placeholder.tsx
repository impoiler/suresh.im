import { cn } from "@/lib/utils";

import type { JSX } from "react";

interface PlaceholderProps {
  title?: string | React.ReactNode;
  icon?: JSX.Element | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
}

export default function EmptyPlaceholder({
  icon,
  title = "Not Found !",
  description = "",
  className,
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "flex mt-10 grow shrink-0 items-center justify-center rounded-md h-[calc(100dvh_-_132px)] animate-reveal",
        className
      )}
    >
      <div className="flex flex-col justify-center items-center mx-auto text-center max-w-[420px]">
        {icon}
        <h3 className="mt-4 text-lg font-medium">{title}</h3>
        <p className="mt-2 mb-4 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
