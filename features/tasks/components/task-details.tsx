import { Card, CardContent } from "@/components/ui/card";
import type { Task, User } from "@/types";

type TaskWithAssignee = Task & {
  assignee?: User;
};

type TaskDetailsProps = {
  task: TaskWithAssignee;
};

export function TaskDetails({ task }: TaskDetailsProps) {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <Detail label="Task" value={task.title} />
        <Detail
          label="Status"
          value={task.status.replace("_", " ")}
          capitalize
        />
        <Detail label="Priority" value={task.priority} capitalize />
        <Detail label="Due Date" value={task.dueDate} />
        <Detail
          label="Assigned To"
          value={task.assignee?.name ?? "Unassigned"}
        />
      </CardContent>
    </Card>
  );
}

function Detail({
  label,
  value,
  capitalize,
}: {
  label: string;
  value: string;
  capitalize?: boolean;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className={capitalize ? "font-medium capitalize" : "font-medium"}>
        {value}
      </p>
    </div>
  );
}
