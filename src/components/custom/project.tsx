import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  inactive?: boolean;
}

export default function Project({ description, link, name,inactive }: ProjectProps) {
  return (
    <div className="">
      <h3 className="text-base flex items-center gap-1">
        <Link href={link} className={cn("border-b-2 w-max",{
          "line-through": inactive,
        })}>{name}</Link>
        {inactive && <Badge className="text-xs font-medium">Inactive</Badge>}
      </h3>
      <span className="mt-2 h-0 block" />
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
