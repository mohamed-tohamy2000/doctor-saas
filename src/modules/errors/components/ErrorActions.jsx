import { Link } from "react-router-dom";
import { CircleHelp, LayoutDashboard } from "lucide-react";

export default function ErrorActions() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <Link
        to="/"
        className="inline-flex h-11 min-w-48 items-center justify-center gap-2 rounded-lg bg-heading px-6 text-sm font-semibold text-white transition hover:bg-[#084e48] active:scale-[0.98]"
      >
        <LayoutDashboard size={15} />
        Return to Dashboard
      </Link>

      <Link
        to="/faq"
        className="inline-flex h-11 min-w-36 items-center justify-center gap-2 rounded-lg border border-[#c8dcd6] bg-white px-5 text-sm font-semibold text-heading transition hover:border-heading hover:bg-[#f8fcfa] active:scale-[0.98]"
      >
        <CircleHelp size={15} />
        Help Center
      </Link>
    </div>
  );
}
