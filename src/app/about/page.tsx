import { experiences, externals } from "@/constant/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${externals.name} . about`,
};

export default function ContactPage() {
  return (
    <main className="py-8 min-h-[calc(100vh_-_132px)]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-medium">work,</h2>

        <p className="mt-5 text-muted-foreground">
          I&apos;m a software engineer aspiring to make a mark in the world of
          internet builders. My focus is on creating solutions that solve
          real-life problems, whether working{" "}
          <span className="text-foreground">collaboratively</span> or{" "}
          <span className="text-foreground">independently</span>.
        </p>

        <div className="mt-10 space-y-10">
          {experiences.map((ex, index) => (
            <div key={`ex-${index}`} className="group">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                  {ex.companyName}
                </h3>
                <p className="text-sm text-muted-foreground">{ex.location}</p>
              </div>

              <div className="mt-3 pl-4 space-y-8">
                {ex.positions.map((p, i) => (
                  <div key={`position-${i}`} className="group/position">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-base group-hover/position:text-primary transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {p.fromToTill}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {p.type}
                    </p>

                    {p.notes && p.notes.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {p.notes.map((note, ii) => (
                          <li
                            key={`note-${ii}`}
                            className="text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors"
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
