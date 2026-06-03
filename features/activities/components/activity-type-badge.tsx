import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ActivityType } from "@/types";

const activityClasses: Record<ActivityType, string> = {
  call: "bg-blue-50 text-blue-700 border-blue-200",
  email: "bg-purple-50 text-purple-700 border-purple-200",
  meeting: "bg-amber-50 text-amber-700 border-amber-200",
  note: "bg-green-50 text-green-700 border-green-200",
};

type ActivityTypeBadgeProps = {
  type: ActivityType;
};

export function ActivityTypeBadge({ type }: ActivityTypeBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("capitalize", activityClasses[type])}
    >
      {type}
    </Badge>
  );
}
