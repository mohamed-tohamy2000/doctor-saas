import { Link } from "react-router-dom";
import { BriefcaseMedical } from "lucide-react";

export default function ErrorHeader() {
  return (
    <header className="border-b border-[#d8e5e0] bg-[#f8fcfa]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2 text-[#00685F]">
          <span className="flex size-6 items-center justify-center rounded bg-[#00685F] text-white">
            <BriefcaseMedical size={16} strokeWidth={2.4} />
          </span>
          <span className="text-lg font-bold leading-none">Smart Clinic</span>
        </Link>
      </div>
    </header>
  );
}
