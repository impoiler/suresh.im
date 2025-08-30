"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";

type PreProps = React.HTMLAttributes<HTMLPreElement> & {
  children?: React.ReactNode;
};

function getLanguageFromClassName(className?: string): string | undefined {
  if (!className) return undefined;
  const match = className.match(/language-([\w-]+)/);
  return match?.[1];
}

export default function CodeBlock(props: PreProps) {
  const { children, className, ...rest } = props;
  const preRef = useRef<HTMLPreElement | null>(null);
  const [copied, setCopied] = useState(false);

  const codeElement = useMemo(() => {
    if (React.isValidElement(children)) return children as React.ReactElement;
    if (Array.isArray(children) && React.isValidElement(children[0])) {
      return children[0] as React.ReactElement;
    }
    return null;
  }, [children]);

  const language = useMemo(() => {
    // Prefer explicit data-language from rehype-pretty-code
    const dataLang = codeElement?.props?.["data-language"] as string | undefined;
    if (typeof dataLang === "string" && dataLang.length > 0) return dataLang;
    // Fallback: className language-*
    return getLanguageFromClassName(codeElement?.props?.className);
  }, [codeElement]);

  const languageLabel = useMemo(() => {
    if (!language) return "text";
    return language.toLowerCase();
  }, [language]);

  const onCopy = useCallback(async () => {
    try {
      const text = preRef.current?.innerText ?? preRef.current?.textContent ?? "";
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      // noop
    }
  }, []);

  return (
    <div className="code-block-container">
      <div className="code-block-header">
        <span className="code-block-lang">{languageLabel}</span>
        <button
          type="button"
          className="code-block-copy"
          aria-label={copied ? "Copied" : "Copy code"}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre ref={preRef} className={className} {...rest}>
        {codeElement ? (
          React.cloneElement(codeElement, {
            className: codeElement.props?.className,
          })
        ) : (
          children
        )}
      </pre>
    </div>
  );
}


