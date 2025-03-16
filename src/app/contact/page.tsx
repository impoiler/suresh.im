import Link from "@/components/custom/link";
import { Links, externals } from "@/constant/data";
import { CalendarDays } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${externals.name} . contact`,
};

export default function ContactPage() {
  return (
    <main className="mt-10">
      <h2 className="text-lg font-medium font-newsreader italic">say hello,</h2>
      <span className="mt-5 h-0 block" />
      <p className="text-secondary text-sm">
        Beyond Professional Ties: Reach out for anything from project
        discussions to casual conversations. Let&apos;s connect on both{" "}
        <b className="font-normal text-secondary-foreground">work</b> and{" "}
        <b className="font-normal text-secondary-foreground">life</b>!
      </p>
      <span className="mt-12 h-0 block" />
      <h2 className="text-sm font-medium text-secondary">
        Write me anything at:
      </h2>
      <Link
        href={Links.email}
        className="text-md font-newsreader italic tooltip"
        aria-label="Keep the subject line purposeful to help prioritize responses. "
      >
        {Links.email.replace("mailto:", "")}
      </Link>
      <span className="mt-6 h-0 block" />
      <h2 className="text-sm font-medium text-secondary">
        Or schedule a call here.
      </h2>
      <span className="mt-2 h-0 block" />
      <Link href={Links.cal} target="_blank" className="text-md font-newsreader italic flex items-start gap-2">
        <CalendarDays size={18} /> Book a call
      </Link>
    </main>
  );
}
