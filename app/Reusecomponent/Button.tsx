import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default function Button({ label, className = "", onClick, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
}
