import {
  Calendar,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  Plus,
  Settings,
  UserRound,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Appointments", icon: Calendar },
  { label: "Patients", icon: Users },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <>
      <aside className="hidden min-h-screen w-56 shrink-0 border-r border-slate-200 bg-white px-4 py-5 lg:flex lg:flex-col">
        <div className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-lg bg-emerald-600 text-white">
            <HeartPulse size={19} />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-slate-950">
              Smart Clinic
            </h1>
            <p className="text-[11px] text-slate-500">Medical & care</p>
          </div>
        </div>

        <nav className="mt-8 space-y-1">
          {links.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition ${
                active
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon size={17} />
              {label}
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <Button className="h-9 w-full bg-emerald-600 text-white hover:bg-emerald-700">
            <Plus size={16} />
            New Appointment
          </Button>

          <div className="rounded-lg border border-slate-200 p-3">
            <div className="flex items-center gap-2">
              <div className="grid size-8 place-items-center rounded-full bg-slate-100 text-slate-600">
                <UserRound size={16} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-slate-900">
                  Dr. Smith
                </p>
                <p className="text-[11px] text-slate-500">Cardiologist</p>
              </div>
            </div>
            <button className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-500">
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </aside>
      {/* <div className="lg:hidden dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div> */}
    </>
  );
}
