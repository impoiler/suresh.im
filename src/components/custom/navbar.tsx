import { externals } from "@/constant/data";
import Link from "next/link";

export default function Navbar() {
  // if (pathname.startsWith("/blog/")) return null;

  return (
    <nav className="py-3 flex items-center justify-between sticky top-0 bg-background">
      <Link
        href={"/"}
        className="text-xl text-muted-foreground hover:text-white"
      >
        {externals.logo_text}
      </Link>

      <ul className="flex gap-1 md:gap-2">
        <li className="text-muted-foreground hover:text-white">
          <Link className="flex items-center px-1" href={"/about"}>
            about
          </Link>
        </li>
        {/* <li className="text-muted-foreground hover:text-white">
          <Link className="flex items-center px-1" href={"/work"}>
            work
          </Link>
        </li> */}
        <li className="text-muted-foreground hover:text-white">
          <Link className="flex items-center px-1" href={"/blog"}>
            blog
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link className="flex items-center pl-1" href={"/contact"}>
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
