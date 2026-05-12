import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard({ title, value, desc, icon: Icon, tone = "emerald" }) {
  const tones = {
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    blue: "bg-sky-50 text-sky-700 ring-sky-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
  }

  return (
    <Card className="min-w-0 w-full rounded-lg border-0 bg-white py-3 shadow-sm ring-1 ring-slate-200">
      <CardContent className="px-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500">{title}</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">{value}</h3>
            <p className="mt-2 text-xs font-medium text-emerald-600">{desc}</p>
          </div>

          {Icon ? (
            <div className={`grid size-9 shrink-0 place-items-center rounded-lg ring-1 ${tones[tone]}`}>
              <Icon size={18} />
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
