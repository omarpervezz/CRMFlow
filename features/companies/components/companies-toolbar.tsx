"use client";

import { SearchInput } from "@/components/shared/search-input";

type CompaniesToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function CompaniesToolbar({
  search,
  onSearchChange,
}: CompaniesToolbarProps) {
  return (
    <div className="rounded-lg border bg-background p-4">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Search companies..."
      />
    </div>
  );
}
