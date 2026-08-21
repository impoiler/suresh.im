import Link from "@/components/custom/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-[calc(100dvh_-_132px)] pt-20 animate-reveal">
      <p className="font-newsreader italic text-secondary">404</p>
      <h1 className="mt-2 text-xl font-medium">Page not found</h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-secondary">
        This page has moved or was never created. Agents and people can recover
        using the site index below or the machine-readable discovery files.
      </p>
      <nav aria-label="Page not found recovery" className="mt-6">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blog">Writing</Link></li>
          <li><Link href="/sitemap.xml">Sitemap</Link></li>
          <li><Link href="/llms.txt">llms.txt</Link></li>
        </ul>
      </nav>
    </main>
  );
}
