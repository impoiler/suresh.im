import { SadRobotIcon } from "@/constant/assets/icons";
import { cn } from "@/lib/utils";
import EmptyPlaceholder from "./empty-placeholder";

export default function SomethingWentWrong({
  className,
}: {
  className?: string;
}) {
  return (
    <EmptyPlaceholder
      className={cn("border-none h-[600px]", className)}
      title="Something went wrong"
      icon={SadRobotIcon}
      description={"Refresh this page or try again later."}
    />
  );
}
