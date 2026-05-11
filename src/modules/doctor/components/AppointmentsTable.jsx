import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const appointments = [
  {
    patient: "John Adams",
    time: "09:00 AM",
    type: "Annual Checkup",
    status: "Confirmed",
  },
  {
    patient: "Maria White",
    time: "10:30 AM",
    type: "Follow up",
    status: "Pending",
  },
  {
    patient: "Oliver Smith",
    time: "01:00 PM",
    type: "Consultation",
    status: "Confirmed",
  },
]

const statusStyles = {
  Confirmed: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  Pending: "bg-amber-50 text-amber-700 ring-amber-100",
}

export default function AppointmentsTable() {
  return (
    <section className="min-w-0 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-slate-950">Upcoming Appointments</h2>
          <p className="mt-1 text-xs text-slate-500">Your next patient visits today.</p>
        </div>
        <Button variant="ghost" size="sm" className="text-emerald-700 hover:bg-emerald-50">
          View all
        </Button>
      </div>

      <div className="space-y-3 md:hidden">
        {appointments.map((appointment) => (
          <article
            key={`${appointment.patient}-${appointment.time}`}
            className="rounded-lg border border-slate-100 p-3"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                  {appointment.patient.slice(0, 1)}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-slate-900">
                    {appointment.patient}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">{appointment.type}</p>
                </div>
              </div>
              <Badge className={`ring-1 ${statusStyles[appointment.status]}`}>
                {appointment.status}
              </Badge>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-medium uppercase text-slate-400">Time</p>
                <p className="mt-0.5 text-xs font-medium text-slate-700">{appointment.time}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-emerald-700">
                View
              </Button>
            </div>
          </article>
        ))}
      </div>

      <Table className="hidden text-xs md:table">
        <TableHeader>
          <TableRow className="border-slate-100">
            <TableHead className="text-slate-500">Patient Name</TableHead>
            <TableHead className="text-slate-500">Time</TableHead>
            <TableHead className="text-slate-500">Type</TableHead>
            <TableHead className="text-slate-500">Status</TableHead>
            <TableHead className="text-right text-slate-500">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={`${appointment.patient}-${appointment.time}`} className="border-slate-100">
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="grid size-8 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                    {appointment.patient.slice(0, 1)}
                  </div>
                  <span className="font-medium text-slate-900">{appointment.patient}</span>
                </div>
              </TableCell>
              <TableCell className="text-slate-600">{appointment.time}</TableCell>
              <TableCell className="text-slate-600">{appointment.type}</TableCell>
              <TableCell>
                <Badge className={`ring-1 ${statusStyles[appointment.status]}`}>
                  {appointment.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="text-emerald-700">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  )
}
