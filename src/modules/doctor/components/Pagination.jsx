import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage = 1 }) {
  const pages = [1, 2, 3, '...'];

  return (
    <div className="flex items-center justify-center gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((page, index) => (
        <div key={index} className="contents">
          {page === '...' ? (
            <span className="px-2 text-gray-400">...</span>
          ) : (
            <button
              className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all ${page === currentPage
                ? 'bg-[#00685F] text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50 border border-gray-100'
                }`}
            >
              {page}
            </button>
          )}
        </div>
      ))}

      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
