const activities = [
  {
    title: "Patient records updated",
    time: "10 min ago",
    desc: "Maria White uploaded new lab results.",
  },
  {
    title: "Appointment confirmed",
    time: "24 min ago",
    desc: "John Adams confirmed his 09:00 AM visit.",
  },
  {
    title: "Payment received",
    time: "1 hr ago",
    desc: "Invoice #2034 was marked as paid.",
  },
]

export default function RecentActivity() {
  return (
    <section className="min-w-0 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-950">Recent Activity</h2>
        <span className="text-xs font-medium text-emerald-700">Today</span>
      </div>

      <div className="relative space-y-5 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200">
        {activities.map((activity) => (
          <div key={activity.title} className="relative flex min-w-0 gap-3">
            <span className="mt-1 size-3.5 shrink-0 rounded-full border-2 border-white bg-emerald-500 ring-2 ring-emerald-100" />
            <div className="min-w-0 flex-1">
              <div className="flex min-w-0 items-center justify-between gap-3">
                <p className="truncate text-xs font-semibold text-slate-900">{activity.title}</p>
                <span className="shrink-0 text-[11px] text-slate-400">{activity.time}</span>
              </div>
              <p className="mt-1 text-xs leading-5 text-slate-500">{activity.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
