import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function Link({
  withReferrer = false,
  ...props
}: LinkProps & {
  children: React.ReactNode;
  withReferrer?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  let { href, ...rest } = props;
  if (href?.startsWith("http")) {
    const url = new URL(href);
    if (withReferrer) url.searchParams.set("ref", "sureshchaudhary.com");
    return (
      <a {...rest} href={url.toString()} target="_blank" rel={rest.rel ?? "noopener noreferrer"}>
        {props.children}
      </a>
    );
  }
  return (
    <NextLink {...rest} href={href}>
      {props.children}
    </NextLink>
  );
}
