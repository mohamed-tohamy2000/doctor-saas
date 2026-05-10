import { Star, Calendar } from 'lucide-react';

export default function DoctorCard({ doctor }) {
  const {
    name,
    specialty,
    rating,
    reviews,
    experience,
    patients,
    image,
    availableToday,
    nextAvailable
  } = doctor;

  return (
    <div className="bg-[#F5FAF8] rounded-2xl border border-[#D1E1DB] p-5 relative flex flex-col h-full shadow-sm hover:shadow-md transition-all">
      {/* Availability Badge */}
      {availableToday && (
        <div className="absolute top-0 right-0">
          <div className="bg-[#D1E8E2] text-[#00685F] text-[10px] font-bold px-3 py-1.5 rounded-tr-2xl rounded-bl-xl uppercase tracking-wide">
            Available Today
          </div>
        </div>
      )}

      {/* Header Section: Image & Info */}
      <div className="flex gap-4 mb-6 mt-2">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{name}</h3>
          <p className="text-[#00685F] font-bold text-sm mb-1">{specialty}</p>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-gray-800">{rating}</span>
            <span className="text-gray-400">({reviews} reviews)</span>
          </div>
        </div>
      </div>

      {/* Stats Section in a Box */}
      <div className="bg-[#F5FAF8] border border-[#D1E1DB] rounded-xl p-4 flex items-center justify-between mb-8">
        <div className="flex-1 text-center border-r border-[#D1E1DB]">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Experience</p>
          <p className="font-bold text-gray-800 text-lg">{experience} Years</p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Patients</p>
          <p className="font-bold text-gray-800 text-lg">{patients}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto">
        {availableToday ? (
          <button className="w-full bg-[#00685F] hover:bg-[#005a52] text-white rounded-xl py-3 flex items-center justify-center gap-4 font-bold transition-all shadow-lg shadow-[#00685f2a]">
            <Calendar className="w-6 h-6 flex-shrink-0" />
            <div className="text-center leading-tight">
              <span className="block text-base">Book</span>
              <span className="block text-base">Appointment</span>
            </div>
          </button>
        ) : (
          <button className="w-full bg-[#F5FAF8] border-2 border-[#00685F] text-[#00685F] hover:bg-[#ebf3f1] rounded-xl py-3 flex items-center justify-center gap-4 font-bold transition-all">
            <Calendar className="w-6 h-6 flex-shrink-0" />
            <div className="text-center leading-tight">
              <span className="block text-sm font-bold">Next Available:</span>
              <span className="block text-base font-bold">{nextAvailable}</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
