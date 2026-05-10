import DoctorCard from '../components/DoctorCard';
import DirectoryFilters from '../components/DirectoryFilters';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import { DOCTORS_DATA } from '../constants/doctorsData';
import TopHeader from '../../shared/components/TopHeader';

export default function DoctorDirectory() {
  return (
    <div className="min-h-screen bg-[#F5FAF8] font-sans">
      <TopHeader />
      <div className="p-6 md:p-10 lg:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Header and Filters Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">Doctor Directory</h1>
              <p className="text-lg text-gray-500 font-medium">
                Find and book appointments with our medical specialists.
              </p>
            </div>
            <DirectoryFilters />
          </div>

          <FilterBar />

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS_DATA.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
}
