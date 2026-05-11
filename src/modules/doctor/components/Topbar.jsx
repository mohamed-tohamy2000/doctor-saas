import { Bell, HeartPulse, Search, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-end border-b border-slate-200 bg-white px-6">
      <div className="flex items-center gap-2 lg:hidden">
        <div className="grid size-9 place-items-center rounded-lg bg-emerald-600 text-white">
          <HeartPulse size={19} />
        </div>
        <span className="text-sm font-semibold text-slate-950">
          Smart Clinic
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* <button className="grid size-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100">
          <Search size={17} />
        </button> */}
        <button className="grid size-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100">
          <Bell size={17} />
        </button>
        <button className="grid size-8 place-items-center rounded-lg text-slate-500 hover:bg-slate-100">
          <Settings size={17} />
        </button>
        <div className="ml-1 size-8 rounded-full bg-linear-to-br from-emerald-500 to-sky-500" />
      </div>
    </header>
  );
}
