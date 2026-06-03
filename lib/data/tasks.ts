import { tasks, users } from "@/lib/mock-data";
import type { TaskStatus } from "@/types";

export function getTasks() {
  return tasks.map((task) => {
    const assignee = users.find((user) => user.id === task.assignedTo);

    return {
      ...task,
      assignee,
    };
  });
}

export function getTaskById(id: string) {
  return getTasks().find((task) => task.id === id);
}

export function getTasksByStatus(status: TaskStatus) {
  return getTasks().filter((task) => task.status === status);
}
