import { Calendar as CalendarIcon, ChevronDown, SlidersHorizontal } from 'lucide-react';

export default function AppointmentsFilterBar() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 bg-[white] p-3 md:p-2 rounded-2xl border border-[#D1E1DB] shadow-sm">

      <div className="flex bg-[#F5FAF8] p-1 rounded-xl border border-[#D1E1DB] w-fit">
        {['Day', 'Week', 'Month'].map((tab) => (
          <button
            key={tab}
            className={`px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all ${tab === 'Day'
                ? 'bg-white text-[#00685F] shadow-sm'
                : 'text-gray-500 hover:text-[#00685F]'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>


      <div className="flex flex-wrap items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#D1E1DB] rounded-xl text-sm font-bold text-gray-700 hover:border-[#00685F] transition-all">
          <CalendarIcon className="w-4 h-4 text-gray-400" />
          Oct 24, 2023
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#D1E1DB] rounded-xl text-sm font-bold text-gray-700 hover:border-[#00685F] transition-all">
          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
          All Specialties
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#D1E1DB] rounded-xl text-sm font-bold text-gray-700 hover:border-[#00685F] transition-all">
          Status: All
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
