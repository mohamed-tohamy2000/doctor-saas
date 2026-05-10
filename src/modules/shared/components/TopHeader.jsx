import { Search, Bell, UserCircle } from 'lucide-react';

export default function TopHeader() {
  return (
    <header className="w-full bg-[#F9FAFB] border-b border-gray-200 px-6 md:px-16 py-4 flex items-center justify-between">
      {/* Logo / Title */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-[#00685F] tracking-tight">
          Smart Clinic
        </h1>
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-6 text-gray-500">
        <button className="hover:text-[#00685F] transition-colors">
          <Search className="w-6 h-6" />
        </button>
        <button className="hover:text-[#00685F] transition-colors relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="hover:text-[#00685F] transition-colors">
          <UserCircle className="w-7 h-7" />
        </button>
      </div>
    </header>
  );
}
