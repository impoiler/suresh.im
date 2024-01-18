import { cn } from "@/lib/utils";

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
        "flex h-[450px] shrink-0 mt-2 items-center justify-center rounded-md border border-dashed",
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
