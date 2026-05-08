import { useState } from "react";

export default function Accordion({ items, name, className = "" }) {
  const defaultOpenIndex = items.findIndex((item) => item.open);
  const [openIndex, setOpenIndex] = useState(
    defaultOpenIndex === -1 ? null : defaultOpenIndex,
  );

  return (
    <div className="space-y-3">
      {items.map(({ question, answer }, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            className={`rounded-md border border-base-300 bg-base-100 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${className}`}
            key={question}
          >
            <button
              aria-controls={`${name}-${index}`}
              aria-expanded={isOpen}
              className="flex min-h-16 w-full items-center justify-between gap-4 px-6 text-left font-semibold"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span>{question}</span>
              <span
                className={`h-2 w-2 shrink-0 rotate-45 border-b-2 border-r-2 border-current transition-transform duration-200 ${
                  isOpen ? "rotate-225" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-200 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
              id={`${name}-${index}`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-4xl px-6 pb-6 text-sm leading-6 text-[#445150]">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
