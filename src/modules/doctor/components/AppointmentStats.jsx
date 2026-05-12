import { ClipboardCheck, CircleX } from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, iconColorClass, valueColor = '#1a1a1a' }) => (
  <div className="bg-white border border-[#D1E1DB] rounded-xl px-5 py-4 min-w-[120px] flex-1 lg:flex-initial">
    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{title}</p>
    <div className="flex items-center gap-2">
      <p className="text-2xl font-bold" style={{ color: valueColor }}>{value}</p>
      {change && (
        <span className="bg-[#E7F3F0] text-[#00685F] text-[10px] font-bold px-1.5 py-0.5 rounded">
          {change}
        </span>
      )}
      {Icon && <Icon className={`w-4 h-4 ${iconColorClass}`} />}
    </div>
  </div>
);

export default function AppointmentStats() {
  return (
    <div className="flex flex-wrap gap-3 md:gap-4 w-full lg:w-auto">
      <StatCard
        title="Today's Total"
        value="42"
        change="+4"
        valueColor="#00685F"
      />
      <StatCard
        title="Pending"
        value="12"
        icon={ClipboardCheck}
        iconColorClass="text-blue-600"
        valueColor="#316BF3"
      />
      <StatCard
        title="Canceled"
        value="3"
        icon={CircleX}
        iconColorClass="text-red-500"
        valueColor="#dc2626"
      />
    </div>
  );
}
