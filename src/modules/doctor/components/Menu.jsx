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
export default function Menu() {
  const links = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Appointments", icon: Calendar },
    { label: "Patients", icon: Users },
    { label: "Settings", icon: Settings },
  ];
  return (
    <ul className="w-14 flex flex-col mt-3  gap-2 border-l border-gray-200 lg:hidden">
      {links.map(({ label, icon: Icon, active }) => (
        <li key={label} className="relative">
          <button
            className={`group relative flex items-center ${active ? "text-emerald-600" : "text-gray-500 hover:text-gray-900"}`}
          >
            <div
              className={`rounded-lg border-2 ${active ? "border-emerald-300 bg-emerald-100" : "border-gray-300 bg-gray-100"} p-2 z-10`}
            >
              <Icon size={16} />
            </div>
            <span
              className="
                            pointer-events-none
                            absolute left-12 z-50
                            whitespace-nowrap
                            rounded-lg
                            bg-white
                            px-3 py-2
                            shadow-lg
                            opacity-0
                            transition-all duration-300
                            group-hover:opacity-100
                            -translate-x-2.5
                            group-hover:translate-x-0
                        "
            >
              {label}
            </span>
          </button>
        </li>
      ))}
      {/* <li className="relative">
        <button className="group flex items-center">
          <div className="rounded-lg border-2 border-purple-300 bg-purple-100 p-2 z-10">
            <LayoutDashboard size={16} />
          </div>

          <span
            className="
          absolute left-12
          whitespace-nowrap
          rounded-lg
          bg-white
          px-3 py-2
          shadow-lg
          opacity-0
          transition-all duration-300
          group-hover:opacity-100
          -translate-x-2.5
          group-hover:translate-x-0
        "
          >
            Dashboard
          </span>
        </button>
      </li> */}
    </ul>
  );
}
