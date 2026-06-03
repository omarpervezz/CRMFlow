import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TaskPriority } from "@/types";

const priorityClasses: Record<TaskPriority, string> = {
  low: "bg-muted text-muted-foreground border-border",
  medium: "bg-amber-50 text-amber-700 border-amber-200",
  high: "bg-red-50 text-red-700 border-red-200",
};

type TaskPriorityBadgeProps = {
  priority: TaskPriority;
};

export function TaskPriorityBadge({ priority }: TaskPriorityBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn("capitalize", priorityClasses[priority])}
    >
      {priority}
    </Badge>
  );
}
