import { Links } from "@/constant/data";
import AnimatedText from "./animated-text";
import Link from "./link";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-baseline gap-2">
        <span
          className="relative inline-flex items-baseline"
        > 
            <span className="absolute -top-3 -left-4 sm:-top-4 sm:-left-5 rotate-[-18deg] transition-transform duration-200 hover:rotate-[-10deg] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <Link href="/blog/2025" aria-label="Read the 2025 blog post" data-tooltip="Looking back at 2025">
              <svg
                width="28"
                height="28"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-7 sm:w-7 drop-shadow-[0_1px_1px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
                aria-hidden="true"
              >
                {/* Pom-pom */}
                <circle
                  cx="52"
                  cy="18"
                  r="7"
                  className="fill-slate-50 dark:fill-slate-100 stroke-slate-300 dark:stroke-slate-700"
                  strokeWidth="1.5"
                />
                <circle
                  cx="50"
                  cy="16"
                  r="2"
                  className="fill-slate-200/80 dark:fill-slate-300/70"
                />

                {/* Hat body */}
                <path
                  d="M12 34C18 18 38 10 50 18C45 22 36 28 30 36C24 44 18 44 12 34Z"
                  className="fill-red-600 dark:fill-red-500 stroke-red-950/15 dark:stroke-red-950/30"
                  strokeWidth="1"
                />
                <path
                  d="M18 30C22 22 36 16 46 20C41 24 34 29 29 35C25 40 21 39 18 30Z"
                  className="fill-red-500/90 dark:fill-red-400/90"
                />

                {/* Brim */}
                <path
                  d="M10 36C10 42 17 46 32 46C47 46 54 42 54 36C54 30 47 28 32 28C17 28 10 30 10 36Z"
                  className="fill-slate-50 dark:fill-slate-100 stroke-slate-300 dark:stroke-slate-700"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 36C14 40 20 42.5 32 42.5C44 42.5 50 40 50 36C50 32 44 31 32 31C20 31 14 32 14 36Z"
                  className="fill-slate-200/70 dark:fill-slate-300/50"
                />
              </svg>
              </Link>
            </span>
            <AnimatedText
              text="suresh"
              className="text-lg w-max font-medium leading-normal"
            />
        </span>
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
