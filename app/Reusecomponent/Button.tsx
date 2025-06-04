// Button.jsx or Button.tsx (if using TypeScript)
export default function Button({ label, className, onClick } :any) {
  return (
    <button
      onClick={onClick}
      className={` ${className}`}
    >
      {label}
    </button>
  );
}

