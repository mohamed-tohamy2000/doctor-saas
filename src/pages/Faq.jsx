import { Search } from "lucide-react";
import Accordion from "../components/ui/Accordion/Accordion";
import { faqGroups } from "../constants/faqGroups";

export default function Faq() {
  return (
    <main className="min-h-full bg-[#f5fbf8] py-12 text-[#202b2a] sm:px-8">
      <section className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-3xl font-bold text-[#00685f]">
          How can we help you?
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#495756]">
          Find answers to common questions about appointments, insurance, and
          medical care at Smart Clinic.
        </p>

        <label
          className="mx-auto mt-8 flex h-10 max-w-2xl items-center gap-3 rounded-full border border-[#b9cfcb] bg-white px-4 text-[#647271]"
          htmlFor="faq-search"
        >
          <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
          <input
            id="faq-search"
            type="search"
            placeholder="Search for questions..."
            className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#8a9694]"
          />
        </label>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6 py-8">
        <div className="mx-auto max-w-6xl space-y-10">
          {faqGroups.map(({ title, icon: Icon, questions }) => (
            <div key={title}>
              <h2 className="mb-5 flex items-center gap-2 text-2xl font-semibold">
                <Icon className="h-5 w-5 text-[#00685f]" aria-hidden="true" />
                {title}
              </h2>

              <Accordion
                items={questions}
                name={`faq-${title}`}
                className="border-[#c7d7d4] bg-white"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 rounded-md bg-[#008f83] px-8 py-8 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Still have questions?</h2>
            <p className="mt-3 text-sm text-white/90">
              Our support team is available 24/7 to assist you with any
              inquiries.
            </p>
          </div>

          <a
            className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-[#007a72] transition hover:bg-[#eef8f5] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#008f83]"
            href="mailto:support@smartclinic.com"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
