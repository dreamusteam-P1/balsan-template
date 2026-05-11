import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function GlassCard({ children, className, animate = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel p-6 transition-all duration-500",
        animate && "hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
}
