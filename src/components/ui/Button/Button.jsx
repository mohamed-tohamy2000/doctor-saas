export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-xl px-4 py-2 capitalize
         transition-all duration-200
         active:scale-[0.98] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
