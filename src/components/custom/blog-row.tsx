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
      className="text-muted-foreground flex justify-between hover:text-secondary-foreground py-3 md:items-center"
    >
      <h3 className="border-b-2 text-sm md:text-base max-w-[220px] md:max-w-none">
        {title}
      </h3>
      <span className="text-sm capitalize">{date.toLowerCase()}</span>
    </Link>
  );
}
