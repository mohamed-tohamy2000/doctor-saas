export default function Button({ children, className = "" }) {
  return (
    <>
      <button className={`rounded-lg px-4 py-2 capitalize ${className}`}>
        {children}
      </button>
    </>
  );
}
