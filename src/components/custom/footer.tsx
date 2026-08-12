import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  PeerlistIcon,
  XIcon,
} from "@/constant/assets/icons";
import { Links, externals } from "@/constant/data";
import Link from "./link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-secondary/20 py-6 flex items-center justify-between">
      <Link href={"/"} className="text text-muted-foreground hover:text-white">
        {externals.footer_logo_text}
      </Link>

      <ul className="flex gap-1 md:gap-2 items-center links">
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1"
            href={Links.email}
            data-tooltip={"Email"}
            aria-label="Email Suresh Chaudhary"
          >
            {EmailIcon}
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1"
            href={Links.github}
            data-tooltip={"Github"}
            aria-label="Suresh Chaudhary on GitHub"
          >
            {GithubIcon}
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1"
            href={Links.linkedin}
            data-tooltip={"LinkedIn"}
            aria-label="Suresh Chaudhary on LinkedIn"
          >
            {LinkedInIcon}
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center px-1"
            href={Links.peerlist}
            data-tooltip={"Peerlist"}
            aria-label="Suresh Chaudhary on Peerlist"
          >
            {PeerlistIcon}
          </Link>
        </li>
        <li className="text-muted-foreground hover:text-white">
          <Link
            className="flex items-center pl-1"
            href={Links.x}
            data-tooltip={"X/Twitter"}
            aria-label="Suresh Chaudhary on X"
          >
            {XIcon}
          </Link>
        </li>
      </ul>
    </footer>
  );
}
