"use client";

import { SearchInput } from "@/components/shared/search-input";
import type { DealStage } from "@/types";

type DealsToolbarProps = {
  search: string;
  stage: DealStage | "all";
  onSearchChange: (value: string) => void;
  onStageChange: (value: DealStage | "all") => void;
};

const stages: Array<DealStage | "all"> = [
  "all",
  "lead",
  "qualified",
  "proposal",
  "negotiation",
  "won",
  "lost",
];

export function DealsToolbar({
  search,
  stage,
  onSearchChange,
  onStageChange,
}: DealsToolbarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border bg-background p-4 md:flex-row md:items-center md:justify-between">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search deals..."
      />

      <select
        value={stage}
        onChange={(event) =>
          onStageChange(event.target.value as DealStage | "all")
        }
        className="h-10 rounded-md border bg-background px-3 text-sm"
      >
        {stages.map((item) => (
          <option key={item} value={item}>
            {item === "all" ? "All stages" : item}
          </option>
        ))}
      </select>
    </div>
  );
}
