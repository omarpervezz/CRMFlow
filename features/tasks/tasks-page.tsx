"use client";

import { useMemo, useState } from "react";
import { DetailsDrawer } from "@/components/shared/details-drawer";
import { TaskDetails } from "@/features/tasks/components/task-details";
import type { Task, TaskStatus, User } from "@/types";
import { PageHeader } from "@/components/shared/page-header";
import { TasksTable } from "@/features/tasks/components/tasks-table";
import { TasksToolbar } from "@/features/tasks/components/tasks-toolbar";
import { getTasks } from "@/lib/data/tasks";

type TaskWithAssignee = Task & {
  assignee?: User;
};

export function TasksPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<TaskStatus | "all">("all");
  const [selectedTask, setSelectedTask] = useState<TaskWithAssignee | null>(
    null,
  );

  const tasks = getTasks();

  const filteredTasks = useMemo(() => {
    const searchValue = search.toLowerCase();

    return tasks.filter((task) => {
      const assigneeName = task.assignee?.name.toLowerCase() ?? "";

      const matchesSearch =
        task.title.toLowerCase().includes(searchValue) ||
        assigneeName.includes(searchValue);

      const matchesStatus = status === "all" || task.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [tasks, search, status]);

  return (
    <>
      <div className="space-y-6">
        <PageHeader
          title="Tasks"
          description="Track follow-ups, reminders, and sales activities."
        />

        <TasksToolbar
          search={search}
          status={status}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
        />

        <TasksTable tasks={filteredTasks} onSelectTask={setSelectedTask} />
      </div>
      <DetailsDrawer
        open={!!selectedTask}
        onOpenChange={(open) => {
          if (!open) setSelectedTask(null);
        }}
        title={selectedTask?.title ?? ""}
        description="Task Details"
      >
        {selectedTask ? <TaskDetails task={selectedTask} /> : null}
      </DetailsDrawer>
    </>
  );
}
