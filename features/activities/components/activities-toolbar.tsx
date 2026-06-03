"use client";

import { SearchInput } from "@/components/shared/search-input";
import type { ActivityType } from "@/types";

type ActivitiesToolbarProps = {
  search: string;
  type: ActivityType | "all";
  onSearchChange: (value: string) => void;
  onTypeChange: (value: ActivityType | "all") => void;
};

const activityTypes: Array<ActivityType | "all"> = [
  "all",
  "call",
  "email",
  "meeting",
  "note",
];

export function ActivitiesToolbar({
  search,
  type,
  onSearchChange,
  onTypeChange,
}: ActivitiesToolbarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-background p-4 md:flex-row md:items-center md:justify-between">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search activities..."
      />

      <select
        value={type}
        onChange={(event) =>
          onTypeChange(event.target.value as ActivityType | "all")
        }
        className="h-10 rounded-md border bg-background px-3 text-sm"
      >
        {activityTypes.map((item) => (
          <option key={item} value={item}>
            {item === "all" ? "All types" : item}
          </option>
        ))}
      </select>
    </div>
  );
}
