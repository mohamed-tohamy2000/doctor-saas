import { Search, ListFilter } from 'lucide-react';

export default function DirectoryFilters() {
  return (
    <div className="flex items-center gap-3">

      <div className="relative flex-1 min-w-[300px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D1E1DB] bg-[#F5FAF8] focus:ring-2 focus:ring-[#00685F] outline-none transition-all text-sm text-gray-700 placeholder:text-gray-500"
        />
      </div>

      <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#D1E1DB] bg-[#F5FAF8] hover:bg-[#ebf3f1] transition-colors font-bold text-sm text-gray-800">
        <ListFilter className="w-4 h-4" />
        Filter
      </button>
    </div>
  );
}
