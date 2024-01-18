import { cn } from "@/lib/utils";
import { Loader2, LucideProps } from "lucide-react";

interface LoaderProps extends LucideProps {}

export default function Loader(props: LoaderProps) {
  return <Loader2 {...props} className={cn("animate-spin", props.className)} />;
}
