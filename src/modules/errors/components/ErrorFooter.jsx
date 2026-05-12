import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Privacy Policy", to: "#" },
  { label: "Terms of Service", to: "#" },
  { label: "Help Support", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

export default function ErrorFooter() {
  return (
    <footer className="border-t border-[#d8e5e0] bg-[#f8fcfa]">
      <div className="mx-auto flex min-h-14 w-full max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 text-[11px] text-slate-600 sm:flex-row sm:px-8">
        <p className="font-semibold">
          &copy; 2024 Smart Clinic Booking System. Clinical Excellence Guaranteed.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to} className="transition hover:text-heading">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
