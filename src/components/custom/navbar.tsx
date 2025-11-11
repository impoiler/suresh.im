import { Links } from "@/constant/data";
import AnimatedText from "./animated-text";
import Link from "./link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-baseline gap-2">
        <Link href={"/"}>
          <AnimatedText
            text="suresh"
            className="text-lg w-max font-medium leading-normal"
          />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <Link href={Links.github} target="_blank">
          <AnimatedText
            text="github"
            className="text-sm text-secondary hover:text-primary font-medium"
          />
        </Link>
        <Link href={Links.linkedin} target="_blank">
          <AnimatedText
            text="linkedIn"
            className="text-sm text-secondary hover:text-primary font-medium"
          />
        </Link>
        <Link href={Links.peerlist} target="_blank">
          <AnimatedText
            text="peerlist"
            className="text-sm text-secondary hover:text-primary font-medium"
          />
        </Link>
        <Link href={Links.x} target="_blank">
          <AnimatedText
            text="x (twitter)"
            className="text-sm text-secondary hover:text-primary font-medium"
          />
        </Link>
      </div>
    </nav>
  );
}
