import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TaskPriorityBadge } from "@/features/tasks/components/task-priority-badge";
import { TaskStatusBadge } from "@/features/tasks/components/task-status-badge";
import type { Task, User } from "@/types";

type TaskWithAssignee = Task & {
  assignee?: User;
};

type TasksTableProps = {
  tasks: TaskWithAssignee[];
  onSelectTask: (task: TaskWithAssignee) => void;
};

export function TasksTable({ tasks, onSelectTask }: TasksTableProps) {
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Assignee</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tasks.map((task) => (
            <TableRow
              key={task.id}
              className="cursor-pointer"
              onClick={() => onSelectTask(task)}
            >
              <TableCell>
                <p className="font-medium">{task.title}</p>
              </TableCell>

              <TableCell>
                <TaskStatusBadge status={task.status} />
              </TableCell>

              <TableCell>
                <TaskPriorityBadge priority={task.priority} />
              </TableCell>

              <TableCell className="text-muted-foreground">
                {task.dueDate}
              </TableCell>

              <TableCell>{task.assignee?.name ?? "Unassigned"}</TableCell>
            </TableRow>
          ))}

          {tasks.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                className="h-32 text-center text-muted-foreground"
              >
                No tasks found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
