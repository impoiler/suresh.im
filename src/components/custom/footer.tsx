import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  PeerlistIcon,
  XIcon,
} from "@/constant/assets/icons";
import { Links, externals } from "@/constant/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-3 flex items-center justify-between">
      <Link href={"/"} className="text text-muted-foreground hover:text-white">
        {externals.footer_logo_text}
      </Link>

      <ul className="flex gap-1 md:gap-2 items-center links">
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1 tooltip"
            href={Links.email}
            aria-label={"Email"}
          >
            {EmailIcon}
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1 tooltip"
            href={Links.github}
            aria-label={"Github"}
          >
            {GithubIcon}
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1 tooltip"
            href={Links.linkedin}
            aria-label={"LinkedIn"}
          >
            {LinkedInIcon}
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1 tooltip"
            href={Links.peerlist}
            aria-label={"Peerlist"}
          >
            {PeerlistIcon}
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center pl-1 tooltip"
            href={Links.x}
            aria-label={"X/Twitter"}
          >
            {XIcon}
          </Link>
        </li>
      </ul>
    </footer>
  );
}
