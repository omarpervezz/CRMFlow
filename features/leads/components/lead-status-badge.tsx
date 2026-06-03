import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LeadStatus } from "@/types";

const statusClasses: Record<LeadStatus, string> = {
  new: "bg-blue-50 text-blue-700 border-blue-200",
  contacted: "bg-purple-50 text-purple-700 border-purple-200",
  qualified: "bg-emerald-50 text-emerald-700 border-emerald-200",
  proposal: "bg-amber-50 text-amber-700 border-amber-200",
  converted: "bg-green-50 text-green-700 border-green-200",
  lost: "bg-red-50 text-red-700 border-red-200",
};

type LeadStatusBadgeProps = {
  status: LeadStatus;
};

export function LeadStatusBadge({ status }: LeadStatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("capitalize", statusClasses[status])}
    >
      {status}
    </Badge>
  );
}
