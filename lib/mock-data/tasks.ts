import type { Task } from "@/types";

export const tasks: Task[] = [
  {
    id: "task-001",
    title: "Follow up with Acme Cloud",
    status: "todo",
    priority: "high",
    dueDate: "2026-06-04",
    assignedTo: "user-003",
  },
  {
    id: "task-002",
    title: "Prepare proposal for BrightPath",
    status: "in_progress",
    priority: "high",
    dueDate: "2026-06-06",
    assignedTo: "user-004",
  },
  {
    id: "task-003",
    title: "Send onboarding checklist to Orbit Finance",
    status: "completed",
    priority: "medium",
    dueDate: "2026-05-31",
    assignedTo: "user-005",
  },
  {
    id: "task-004",
    title: "Book discovery call with Northstar Labs",
    status: "todo",
    priority: "medium",
    dueDate: "2026-06-07",
    assignedTo: "user-003",
  },
  {
    id: "task-005",
    title: "Review Vertex Systems requirements",
    status: "todo",
    priority: "low",
    dueDate: "2026-06-09",
    assignedTo: "user-002",
  },
];
