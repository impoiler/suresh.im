"use client";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface AnimatedTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function AnimatedText({ text, ...props }: AnimatedTextProps) {
  const isSentence = (t: string) => t.trim().includes(" ");
  const splitText = isSentence(text)
    ? text.split(/(\s+)/).filter(Boolean)
    : text.split("");

  return (
    <div {...props} className={cn("flex items-center", props.className)}>
      {splitText.map((char, index) => (
        <span
          className="animate-text"
          key={index}
          style={{
            animationDuration: `${(index + 1) * 100}ms`,
            ...(char.trim() === "" && {
              width: `${char.length * 0.25}em`,
              display: "inline-block",
            }),
          }}
        >
          {char.trim() === "" ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
