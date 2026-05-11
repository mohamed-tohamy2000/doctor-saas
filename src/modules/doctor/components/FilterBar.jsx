import { ChevronDown } from 'lucide-react';

export default function FilterBar() {
  const SPECIALTIES = ["All Specialties", "Cardiology", "Neurology", "Pediatrics", "Orthopedics"];
  const AVAILABILITY = ["Any time", "Today", "Tomorrow", "This Week"];

  return (
    <div className="bg-[#F5FAF8] border border-[#D1E1DB] rounded-xl p-4 flex flex-wrap gap-10 items-center mb-10">
      <div className="flex items-center gap-3 relative">
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Specialty:</span>
        <div className="relative">
          <button className="flex items-center justify-between gap-4 px-4 py-2 bg-white border border-[#D1E1DB] rounded-lg text-sm font-medium text-gray-700 hover:border-[#00685F] transition-all min-w-[160px]">
            {SPECIALTIES[0]}
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 relative">
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Availability:</span>
        <div className="relative">
          <button className="flex items-center justify-between gap-4 px-4 py-2 bg-white border border-[#D1E1DB] rounded-lg text-sm font-medium text-gray-700 hover:border-[#00685F] transition-all min-w-[140px]">
            {AVAILABILITY[0]}
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
