import Link from "@/components/custom/link";
import { experiences, externals, Links } from "@/constant/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${externals.fullName} - Work Experience & Background`,
  description: `Learn about ${externals.fullName}'s journey as a Full-Stack Engineer. Currently at Maxim AI, previously at SocialWell and iSquare Technologies. Expertise in React, Next.js, AI/LLM development.`,
  keywords: [
    ...externals.keywords,
    "about Suresh Chaudhary",
    "Suresh Chaudhary experience",
    "Suresh Chaudhary work history",
    "Maxim AI engineer",
  ],
  alternates: {
    canonical: `${externals.base_url}/about`,
  },
  openGraph: {
    title: `About ${externals.fullName} - Full-Stack Engineer`,
    description: `${externals.fullName}'s professional journey and work experience as a Full-Stack Engineer in India.`,
    url: `${externals.base_url}/about`,
    images: ["/og.png"],
  },
};

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-secondary">
      <span aria-hidden className="h-px w-8 bg-secondary/40" />
      <span className="font-newsreader italic text-xs">{index}</span>
      <span className="text-[10px] uppercase tracking-[0.32em]">{label}</span>
      <span aria-hidden className="h-px flex-1 bg-secondary/40" />
    </div>
  );
}

function yearOf(fromToTill: string) {
  const m = fromToTill.match(/\b(\d{4})\b/);
  return m ? `'${m[1].slice(2)}` : "·";
}

export default function AboutPage() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${externals.base_url}/about#profilepage`,
    url: `${externals.base_url}/about`,
    name: `About ${externals.fullName}`,
    isPartOf: { "@id": `${externals.base_url}/#website` },
    about: { "@id": `${externals.base_url}/#person` },
    mainEntity: { "@id": `${externals.base_url}/#person` },
  };
  const coords: Array<{ label: string; href: string; external?: boolean }> = [
    { label: "email", href: Links.email },
    { label: "github", href: Links.github, external: true },
    { label: "x", href: Links.x, external: true },
    { label: "linkedin", href: Links.linkedin, external: true },
    { label: "peerlist", href: Links.peerlist, external: true },
    { label: "book a call", href: Links.cal, external: true },
  ];

  return (
    <main className="mt-12 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />
      {/* ── masthead ─────────────────────────────────────── */}
      <section
        className="animate-reveal"
        style={{ animationDelay: "0ms", animationFillMode: "both" }}
      >
        <div className="flex items-baseline justify-between text-secondary">
          <span className="text-[10px] uppercase tracking-[0.32em]">
            an essay, of sorts
          </span>
          <span className="font-newsreader italic text-xs">vol. i</span>
        </div>

        <div
          aria-hidden
          className="mt-4 font-newsreader italic text-3xl leading-none text-secondary/60 select-none"
        >
          §
        </div>

        <h1 className="mt-6 font-newsreader italic text-[clamp(1.85rem,5.5vw,2.6rem)] leading-[1.1] tracking-tight">
          On work,
          <br />
          and the shape of it.
        </h1>

        <p className="mt-8 text-[15px] leading-relaxed text-secondary max-w-[58ch]">
          I&apos;m a software engineer{" "}
          <span className="font-newsreader italic text-foreground">
            aspiring
          </span>{" "}
          to make a mark in the world of internet builders. My focus is on
          building things that solve real problems — whether working{" "}
          <span className="font-newsreader italic text-foreground">
            collaboratively
          </span>{" "}
          or{" "}
          <span className="font-newsreader italic text-foreground">
            independently
          </span>
          , and with a fondness for code that reads well.
        </p>
      </section>

      {/* ── currently ────────────────────────────────────── */}
      <section
        className="mt-20 animate-reveal"
        style={{ animationDelay: "180ms", animationFillMode: "both" }}
      >
        <SectionLabel index="i." label="currently" />

        <div className="mt-8 relative rounded-sm border border-secondary/20 p-6 sm:p-7">
          <span
            aria-hidden
            className="absolute -top-2 left-6 px-2 bg-background text-[10px] uppercase tracking-[0.3em] text-secondary inline-flex items-center gap-2"
          >
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500/50 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-500" />
            </span>
            now
          </span>

          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <h2 className="text-xl font-semibold tracking-tight">
              Maxim AI
              <span className="font-newsreader italic text-secondary font-normal ml-2 text-base">
                — founding full-stack
              </span>
            </h2>
            <span className="font-newsreader italic text-sm text-secondary">
              jan &apos;24 → present
            </span>
          </div>

          <p className="mt-4 text-[14.5px] leading-relaxed text-secondary">
            Building a framework for{" "}
            <span className="font-newsreader italic text-foreground">
              testing &amp; monitoring
            </span>{" "}
            AI applications — and{" "}
            <Link
              href="https://getbifrost.ai/"
              className="font-newsreader italic text-foreground underline decoration-secondary/40 underline-offset-4 hover:decoration-foreground transition-colors"
            >
              Bifrost
            </Link>
            , the fastest AI gateway. Driven by a personal weakness for the
            unreasonable parts of LLMs.
          </p>

          <div className="mt-5 pt-5 border-t border-dashed border-secondary/25 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-secondary font-[family-name:var(--font-geist-mono)]">
            <span>pune · india</span>
            <span aria-hidden className="text-secondary/40">
              ·
            </span>
            <span>full-time</span>
            <span aria-hidden className="text-secondary/40">
              ·
            </span>
            <Link
              href={externals.compony.site}
              className="hover:text-foreground transition-colors"
            >
              getmaxim.ai ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── chronicle ────────────────────────────────────── */}
      <section
        className="mt-20 animate-reveal"
        style={{ animationDelay: "320ms", animationFillMode: "both" }}
      >
        <SectionLabel index="ii." label="chronicle" />

        <div className="mt-10 space-y-14">
          {experiences.map((ex, exIdx) => {
            const firstPos = ex.positions[0];
            const year = yearOf(firstPos?.fromToTill ?? "");
            return (
              <article key={`ex-${exIdx}`} className="group">
                <header className="grid grid-cols-[3.25rem_1fr] gap-x-4 items-baseline">
                  <span
                    aria-hidden
                    className="font-newsreader italic text-secondary text-lg leading-none tabular-nums"
                  >
                    {year}
                  </span>
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {ex.companyName}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-secondary font-[family-name:var(--font-geist-mono)]">
                      {ex.location}
                    </span>
                  </div>
                </header>

                <div className="mt-5 grid grid-cols-[3.25rem_1fr] gap-x-4">
                  <span aria-hidden className="" />
                  <ol className="relative space-y-9 border-l border-secondary/25 pl-6">
                    {ex.positions.map((p, i) => (
                      <li
                        key={`position-${i}`}
                        className="relative before:absolute before:-left-[25px] before:top-[0.55rem] before:h-px before:w-4 before:bg-secondary/40"
                      >
                        <span
                          aria-hidden
                          className="absolute -left-[30px] top-[0.3rem] h-2 w-2 rounded-full bg-background border border-secondary/50 group-hover:border-foreground transition-colors"
                        />
                        <div className="flex items-baseline justify-between gap-4 flex-wrap">
                          <h4 className="font-newsreader italic text-base text-foreground">
                            {p.name}
                          </h4>
                          <span className="text-[11px] uppercase tracking-[0.22em] text-secondary font-[family-name:var(--font-geist-mono)]">
                            {p.fromToTill} · {p.type}
                          </span>
                        </div>

                        {p.notes && p.notes.length > 0 && (
                          <div className="mt-3 space-y-2.5 text-[14px] leading-relaxed text-secondary max-w-[58ch]">
                            {p.notes.map((note, ii) => (
                              <p key={`note-${ii}`}>{note}</p>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── coordinates ──────────────────────────────────── */}
      <section
        className="mt-24 animate-reveal"
        style={{ animationDelay: "460ms", animationFillMode: "both" }}
      >
        <SectionLabel index="iii." label="coordinates" />

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-newsreader italic text-lg leading-snug max-w-[36ch]">
            If any of this resonates — or if you&apos;d like to talk about the
            strange, unfinished internet — you can find me here.
          </p>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.24em] text-secondary font-[family-name:var(--font-geist-mono)]">
            {coords.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="hover:text-foreground transition-colors"
                >
                  {c.label}
                  {c.external ? " ↗" : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-hidden
          className="mt-16 font-newsreader italic text-secondary/40 text-center text-xs tracking-[0.4em]"
        >
          — fin —
        </div>
      </section>
    </main>
  );
}
