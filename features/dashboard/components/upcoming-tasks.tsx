import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tasks, users } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import type { TaskPriority } from "@/types";

const priorityClasses: Record<TaskPriority, string> = {
  low: "bg-muted text-muted-foreground",
  medium: "bg-secondary text-secondary-foreground",
  high: "bg-primary text-primary-foreground",
};

export function UpcomingTasks() {
  const upcomingTasks = tasks
    .filter((task) => task.status !== "completed")
    .slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {upcomingTasks.map((task) => {
          const user = users.find((item) => item.id === task.assignedTo);

          return (
            <div
              key={task.id}
              className="flex items-start justify-between gap-4 rounded-lg border p-3"
            >
              <div>
                <p className="text-sm font-medium">{task.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Due {task.dueDate} · {user?.name ?? "Unassigned"}
                </p>
              </div>

              <Badge
                className={cn("capitalize", priorityClasses[task.priority])}
              >
                {task.priority}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
