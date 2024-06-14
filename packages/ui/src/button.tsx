"use client";

import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
