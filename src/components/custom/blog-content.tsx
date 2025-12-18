"use client";

import Loader from "@/components/custom/loader";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";

const MDXContent = dynamic(() => import("@/components/custom/mdx-content"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center py-10">
      <Loader size={20} />
    </div>
  ),
});

interface BlogContentProps {
  source: MDXRemoteSerializeResult;
}

export default function BlogContent({ source }: BlogContentProps) {
  return <MDXContent source={source} />;
}

