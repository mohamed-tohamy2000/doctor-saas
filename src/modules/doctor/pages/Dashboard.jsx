import {
  CalendarDays,
  ClipboardList,
  MessageSquareText,
  Stethoscope,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AppointmentsTable from "../components/AppointmentsTable";
import RecentActivity from "../components/RecentActivity";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import Topbar from "../components/Topbar";
import Menu from "../components/Menu";

const stats = [
  {
    title: "Total Patients",
    value: "1,248",
    desc: "+12% this month",
    icon: Users,
    tone: "emerald",
  },
  {
    title: "Appointments Today",
    value: "14",
    desc: "4 upcoming",
    icon: CalendarDays,
    tone: "blue",
  },
  {
    title: "Pending Reviews",
    value: "5",
    desc: "Needs attention",
    icon: ClipboardList,
    tone: "amber",
  },
  {
    title: "Online Consultations",
    value: "8",
    desc: "2 live now",
    icon: MessageSquareText,
    tone: "rose",
  },
];

const quickActions = [
  "New patient",
  "Add appointment",
  "Start consultation",
  "Write prescription",
];

export default function Dashboard() {
  return (
    <div className="min-h-screen  text-slate-950">
      <div className="flex min-h-screen bg-slate-50 shadow-2xl shadow-slate-300/40">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          <div className=" flex ">
            <Menu />
            <main className="flex-1 p-4 md:p-6  max-w-8xl">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Doctor Dashboard
                </p>
                <h1 className="mt-2 text-2xl font-semibold text-slate-950">
                  Good Morning, Dr. Smith
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  Here is your clinical overview for today.
                </p>
              </div>

              <div className="grid gap-4 xl:grid-cols-[1fr_260px]">
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => (
                      <StatsCard key={stat.title} {...stat} />
                    ))}
                  </div>

                  <AppointmentsTable />
                </div>

                <aside className="min-w-0 w-full space-y-4">
                  <section className="rounded-lg bg-emerald-700 p-4 text-white shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h2 className="text-sm text-emerald-100 font-semibold">Quick Actions</h2>
                        <p className="mt-1 text-xs text-emerald-100">
                          Common clinical tasks
                        </p>
                      </div>
                      <div className="grid size-9 place-items-center rounded-lg bg-white/15">
                        <Stethoscope size={18} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                      {quickActions.map((action) => (
                        <Button
                          key={action}
                          className="h-auto min-h-16  w-full flex-col gap-1 whitespace-normal rounded-lg bg-white/10 px-2 py-3 text-center text-xs text-white hover:bg-white/20"
                        >
                          <span>{action}</span>
                        </Button>
                      ))}
                    </div>
                  </section>

                  <RecentActivity />
                </aside>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
