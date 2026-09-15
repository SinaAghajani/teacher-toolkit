import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

export function Avatar({
  src,
  alt = "",
  fallback,
  size = "md",
  className,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-indigo-50 font-bold text-indigo-600",
        sizeClasses[size],
        className,
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : fallback ? (
        fallback
      ) : (
        <UserRound className="h-1/2 w-1/2" />
      )}
    </div>
  );
}
