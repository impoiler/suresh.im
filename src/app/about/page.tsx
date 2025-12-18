import { experiences, externals } from "@/constant/data";
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

export default function AboutPage() {
  return (
    <main className="mt-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg font-medium font-newsreader italic">work,</h2>

        <p className="mt-5 text-foreground text-sm">
          I&apos;m a software engineer aspiring to make a mark in the world of
          internet builders. My focus is on creating solutions that solve
          real-life problems, whether working{" "}
          <span className="font-newsreader italic">collaboratively</span> or{" "}
          <span className="font-newsreader italic">independently</span>.
        </p>

        <div className="mt-10 space-y-10">
          {experiences.map((ex, index) => (
            <div key={`ex-${index}`} className="group">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold transition-colors">
                  {ex.companyName}
                </h3>
                <p className="text-sm text-foreground">{ex.location}</p>
              </div>

              <div className="mt-3 pl-4 space-y-8 relative before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-border">
                {ex.positions.map((p, i) => (
                  <div
                    key={`position-${i}`}
                    className="group/position relative before:absolute before:w-3 before:h-[1px] before:-left-4 before:top-3 before:bg-border"
                  >
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-md group-hover/position:text-primary transition-colors">
                        {p.name} ({p.type})
                      </h4>
                      <p className="text-sm text-foreground">{p.fromToTill}</p>
                    </div>

                    {p.notes && p.notes.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {p.notes.map((note, ii) => (
                          <li
                            key={`note-${ii}`}
                            className="text-sm text-secondary"
                          >
                            {note}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
