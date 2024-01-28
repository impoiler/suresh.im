import { experiences, externals } from "@/constant/data";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${externals.name} . about`,
};

export default function ContactPage() {
  return (
    <main className="mt-8 min-h-[calc(100vh_-_132px)] ">
      <h2 className="text-xl md:text-2xl font-medium">work,</h2>
      <span className="mt-5 h-0 block" />
      <p className="text-muted-foreground">
        I&apos;m a software engineer aspiring to make a mark in the world of
        internet builders. My focus is on creating solutions that solve
        real-life problems, whether working{" "}
        <b className="font-normal text-secondary-foreground">
          {" "}
          collaboratively
        </b>{" "}
        or{" "}
        <b className="font-normal text-secondary-foreground">independently.</b>
      </p>
      <span className="mt-12 h-0 block" />

      {experiences.map((ex, index) => (
        <div className="mb-8" key={`ex-${index}`}>
          <h2 className="text-xl font-medium">{ex.companyName}</h2>
          <p className="md:text-base text-muted-foreground">{ex.location}</p>
          <div className="md:pl-8 positions mt-4">
            {ex.positions.map((p, i) => (
              <div className="mt-4" key={`position-${i}`}>
                <h3 className="md:text-lg">{p.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {p.fromToTill} ({p.type})
                </p>
                {p.notes &&
                  p.notes.length > 0 &&
                  p.notes.map((note, ii) => (
                    <p
                      key={`note-${ii}`}
                      className={cn(
                        "text-sm mt-3 list-item ml-3 text-muted-foreground",
                        i > 0 && ""
                      )}
                    >
                      {note}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
