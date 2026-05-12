import { MoreVertical } from 'lucide-react';
const th = "px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-widest border-b border-[#D1E1DB]"
const appointments = [
  {
    id: 'PT-84729',
    patientName: 'Sarah Jenkins',
    time: '09:00 AM',
    date: 'Oct 24, 2023',
    type: 'Annual Physical',
    doctor: 'Dr. Smith',
    specialty: 'General Practice',
    status: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 'PT-10294',
    patientName: 'Robert Fox',
    time: '10:30 AM',
    date: 'Oct 24, 2023',
    type: 'Cardiology Follow-up',
    doctor: 'Dr. Chen',
    specialty: 'Cardiology',
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    id: 'PT-55102',
    patientName: 'Emily Wong',
    time: '11:15 AM',
    date: 'Oct 24, 2023',
    type: 'MRI Scan',
    doctor: 'Radiology Dept.',
    specialty: '',
    status: 'Canceled',
    initials: 'EW'
  },
  {
    id: 'PT-99381',
    patientName: 'Michael Davis',
    time: '01:00 PM',
    date: 'Oct 24, 2023',
    type: 'Vaccination',
    doctor: 'Nurse Lee',
    specialty: 'Pediatrics',
    status: 'Confirmed',
    initials: 'MD',
    bgColor: 'bg-[#00685F]'
  }
];

const StatusBadge = ({ status }) => {
  const styles = {
    Confirmed: 'bg-[#89F5E7] text-[#00685F] border-[#D1E1DB]',
    Pending: 'bg-[#DBE1FF] text-[#00174B] border-[#D1E1DB]',
    Canceled: 'bg-[#FFDBE0] text-[#93000A] border-[#D1E1DB]'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status] || styles.Pending}`}>
      ● {status}
    </span>
  );
};

const Avatar = ({ el }) => (
  el.image ? (
    <img src={el.image} alt={el.patientName} className="w-10 h-10 rounded-full object-cover border-2 border-[#D1E1DB]" />
  ) : (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold ${el.bgColor || 'bg-gray-300 !text-gray-600'}`}>
      {el.initials}
    </div>
  )
);

/* ── Mobile Card Layout ── */
function MobileCards() {
  return (
    <div className="flex flex-col gap-4 md:hidden">
      {appointments.map((el, index) => (
        <div key={index} className="bg-white border border-[#D1E1DB] rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Avatar el={el} />
              <div>
                <p className="font-bold text-gray-900">{el.patientName}</p>
                <p className="text-xs text-gray-500">ID: {el.id}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-3 bg-[#F5FAF8] rounded-xl p-3">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Date & Time</p>
              <p className="font-bold text-gray-900 text-sm">{el.time}</p>
              <p className="text-xs text-gray-500">{el.date}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Type</p>
              <p className="font-bold text-gray-900 text-sm">{el.type}</p>
              <p className="text-xs text-gray-500">
                {el.doctor} {el.specialty && `• ${el.specialty}`}
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <StatusBadge status={el.status} />
          </div>
        </div>
      ))}
    </div>
  );
}


function DesktopTable() {
  return (
    <div className="hidden md:block bg-white border border-[#D1E1DB] rounded-2xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left" style={{ background: '#ffffff' }}>
          <thead>
            <tr style={{ background: '#F5FAF8' }}>
              <th className={th}>Date & Time</th>
              <th className={th}>Patient</th>
              <th className={th}>Appointment Type</th>
              <th className={th}>Status</th>
              <th className={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((el, index) => (
              <tr
                key={index}
                className="border-b border-[#E8EDE9] last:border-b-0 hover:bg-[#F5FAF8] transition-colors"
                style={{ background: '#ffffff' }}
              >
                <td className="px-6 py-5">
                  <p className="font-bold text-gray-900">{el.time}</p>
                  <p className="text-xs text-gray-500">{el.date}</p>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <Avatar el={el} />
                    <div>
                      <p className="font-bold text-gray-900">{el.patientName}</p>
                      <p className="text-xs text-gray-500">ID: {el.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <p className="font-bold text-gray-900">{el.type}</p>
                  <p className="text-xs text-gray-500">
                    {el.doctor} {el.specialty && `• ${el.specialty}`}
                  </p>
                </td>
                <td className="px-6 py-5">
                  <StatusBadge status={el.status} />
                </td>
                <td className="px-6 py-5">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AppointmentsTaable() {
  return (
    <>
      <MobileCards />
      <DesktopTable />
    </>
  );
}
