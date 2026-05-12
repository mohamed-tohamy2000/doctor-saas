import AppointmentStats from "../components/AppointmentStats";
import AppointmentsTable from "../components/AppointmentsTable";
import AppointmentsFilterBar from "../components/AppointmentsFilterBar";
import Pagination from "../components/Pagination";

export default function DoctorAppointments() {
  return (
    <div className="w-full mx-auto p-4 md:p-8 md:pr-12">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 md:mb-10 gap-6">
        <div className="flex-shrink-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Appointments</h1>
          <p className="text-gray-500 font-medium text-sm md:text-base">Manage and review all scheduled patient visits and procedures.</p>
        </div>
        <AppointmentStats />
      </div>

      <AppointmentsFilterBar />

      <AppointmentsTable />

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 font-medium">Showing 1 to 4 of 42 entries</p>
        <Pagination />
      </div>
    </div>
  );
}
