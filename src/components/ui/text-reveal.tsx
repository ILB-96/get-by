import React from "react";

import { cn } from "@/lib/utils";
interface RevealProps {
  children?: React.ReactNode;
  delay?: string;
  duration?: string;
  x?: string;
  y?: string;
  className?: string;
  secondClass?: string;
}
const TextReveal = ({
  children,
  delay = "delay-md",
  duration = "duration-md",
  className,
  secondClass,
}: RevealProps) => {
  return (
    <div className={cn(`animate-wait ${duration}`, className)}>
      <div className={cn(`animate-present ${delay}`, secondClass)}>
        {children}
      </div>
    </div>
  );
};
export default TextReveal;
