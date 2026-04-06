import React from "react";
import { cn } from "./utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  className,
  children,
  hover = false,
  padding = "md",
}: CardProps) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-200 shadow-sm",
        hover && "hover:shadow-md hover:border-gray-300 transition-all duration-200",
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
