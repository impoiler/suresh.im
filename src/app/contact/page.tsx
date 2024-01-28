import { Button } from "@/components/ui/button";
import { Links, externals } from "@/constant/data";
import { CalendarDays } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${externals.name} . contact`,
};

export default function ContactPage() {
  return (
    <main className="mt-8 min-h-[calc(100vh_-_132px)] ">
      <h2 className="text-xl md:text-2xl font-medium">say hello,</h2>
      <span className="mt-5 h-0 block" />
      <p className="text-muted-foreground">
        Beyond Professional Ties: Reach out for anything from project
        discussions to casual conversations. Let&apos;s connect on both{" "}
        <b className="font-normal text-secondary-foreground">work</b> and{" "}
        <b className="font-normal text-secondary-foreground">life</b>!
      </p>
      <span className="mt-12 h-0 block" />
      <h2 className="text-lg font-medium text-muted-foreground">
        Write me anything at:
      </h2>
      <Link
        href={Links.email}
        className="text-lg tooltip"
        aria-label="Keep the subject line purposeful to help prioritize responses. "
      >
        {Links.email.replace("mailto:", "")}
      </Link>
      <span className="mt-6 h-0 block" />
      <h2 className="text-lg font-medium text-muted-foreground">
        Or schedule a call here.
      </h2>
      <span className="mt-2 h-0 block" />
      <Link href={Links.cal} target="_blank" className="inline-block">
        <Button className="flex items-center gap-2" variant={"secondary"}>
          <CalendarDays size={18} /> Book a call
        </Button>
      </Link>
    </main>
  );
}
