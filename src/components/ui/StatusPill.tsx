import { statusLabel, type AvailabilityStatus } from "@/config/availability";
import { cn } from "@/lib/utils";

const tone: Record<AvailabilityStatus, string> = {
  open: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  selective: "bg-lavender-soft text-plum ring-lavender",
  paused: "bg-cream-deep text-mute ring-line",
};
const dot: Record<AvailabilityStatus, string> = {
  open: "bg-emerald-500",
  selective: "bg-coral",
  paused: "bg-mute/50",
};

export default function StatusPill({ status, className, label }: { status: AvailabilityStatus; className?: string; label?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1", tone[status], className)}>
      <span className="relative flex h-2 w-2">
        {status !== "paused" && <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", dot[status])} />}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", dot[status])} />
      </span>
      {label ?? statusLabel[status]}
    </span>
  );
}
