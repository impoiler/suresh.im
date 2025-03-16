import { externals } from "@/constant/data";
import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function Link({
  ...props
}: LinkProps & { children: React.ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  let { href, ...rest } = props;
  if(href?.startsWith("http")) {
    return <a {...rest} href={`${href}?ref=${externals.referrer}`} target="_blank">{props.children}</a>;
  }
  return <NextLink {...rest} href={href}>{props.children}</NextLink>;
}
