"use client";

import { SearchInput } from "@/components/shared/search-input";
import type { TaskStatus } from "@/types";

type TasksToolbarProps = {
  search: string;
  status: TaskStatus | "all";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: TaskStatus | "all") => void;
};

const statuses: Array<TaskStatus | "all"> = [
  "all",
  "todo",
  "in_progress",
  "completed",
];

export function TasksToolbar({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: TasksToolbarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-background p-4 md:flex-row md:items-center md:justify-between">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search tasks..."
      />

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value as TaskStatus | "all")
        }
        className="h-10 rounded-md border bg-background px-3 text-sm"
      >
        {statuses.map((item) => (
          <option key={item} value={item}>
            {item === "all"
              ? "All statuses"
              : item === "in_progress"
                ? "In progress"
                : item}
          </option>
        ))}
      </select>
    </div>
  );
}
