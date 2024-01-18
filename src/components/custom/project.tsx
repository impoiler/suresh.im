import Link from "next/link";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
}

export default function Project({ description, link, name }: ProjectProps) {
  return (
    <div className="">
      <h3 className="text-base border-b-2 w-max">
        <Link href={link}>{name}</Link>
      </h3>
      <span className="mt-2 h-0 block" />
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
