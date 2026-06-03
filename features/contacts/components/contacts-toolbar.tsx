"use client";

import { SearchInput } from "@/components/shared/search-input";

type ContactsToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function ContactsToolbar({
  search,
  onSearchChange,
}: ContactsToolbarProps) {
  return (
    <div className="rounded-lg border bg-background p-4">
      <SearchInput
        placeholder="Search contacts..."
        value={search}
        onChange={onSearchChange}
      />
    </div>
  );
}
