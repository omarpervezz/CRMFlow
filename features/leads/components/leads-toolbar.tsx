"use client";

import { SearchInput } from "@/components/shared/search-input";
import type { LeadStatus } from "@/types";

type LeadsToolbarProps = {
  search: string;
  status: LeadStatus | "all";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: LeadStatus | "all") => void;
};

const statuses: Array<LeadStatus | "all"> = [
  "all",
  "new",
  "contacted",
  "qualified",
  "proposal",
  "converted",
  "lost",
];

export function LeadsToolbar({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: LeadsToolbarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-background p-4 md:flex-row md:items-center md:justify-between">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search leads..."
      />

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value as LeadStatus | "all")
        }
        className="h-10 rounded-md border bg-background px-3 text-sm"
      >
        {statuses.map((item) => (
          <option key={item} value={item}>
            {item === "all" ? "All statuses" : item}
          </option>
        ))}
      </select>
    </div>
  );
}
