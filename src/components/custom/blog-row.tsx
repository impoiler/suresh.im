import Link from "next/link";

interface BlogRowProps {
  title: string;
  slug: string;
  date: string;
}

export default function BlogRow({ slug, title, date }: BlogRowProps) {
  return (
    <Link
      href={`/${slug}`}
      className="text-muted-foreground flex flex-col justify-between hover:text-secondary-foreground py-3 md:flex-row gap-1"
    >
      <h3 className="md:border-b-2 md:max-w-none">
        {title}
      </h3>
      <span className="text-[15px] capitalize">{date.toLowerCase()}</span>
    </Link>
  );
}
