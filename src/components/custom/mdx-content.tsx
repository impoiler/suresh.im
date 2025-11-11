"use client";

import Link from "@/components/custom/link";
import Loader from "@/components/custom/loader";
import { externals } from "@/constant/data";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import React from "react";

// Lazy load CodeBlock component
const LazyCodeBlock = dynamic(() => import("@/components/custom/code-block"), {
  loading: () => <pre className="flex items-center justify-center p-4"><Loader size={16} /></pre>
});

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXContent({ source }: MDXContentProps) {
  const components: MDXComponents = {
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
      if (href?.startsWith("http")) {
        return (
          <a href={`${href}?ref=${externals.referrer}`} target="_blank">
            {children}
          </a>
        );
      }
      return <Link href={href as string}>{children}</Link>;
    },
    pre: (props) => (
      <LazyCodeBlock {...(props as any)} className={cn(props.className, "!text-[12px] font-codefont")} />
    ),
  };

  return <MDXRemote {...source} components={components} />;
}

