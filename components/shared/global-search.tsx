"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Building2, Contact, Search, Target, Handshake } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  getGlobalSearchResults,
  type SearchResultType,
} from "@/lib/data/search";

const resultIcons: Record<SearchResultType, React.ElementType> = {
  lead: Target,
  contact: Contact,
  company: Building2,
  deal: Handshake,
};

const resultLabels: Record<SearchResultType, string> = {
  lead: "Lead",
  contact: "Contact",
  company: "Company",
  deal: "Deal",
};

export function GlobalSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return getGlobalSearchResults(query);
  }, [query]);

  return (
    <div className="relative hidden w-72 md:block xl:w-80">
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />

      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search CRMFlow..."
        className="pl-9"
      />

      {query.trim() ? (
        <div className="absolute right-0 top-12 z-50 w-full overflow-hidden rounded-lg border bg-background shadow-lg">
          {results.length > 0 ? (
            <div className="max-h-96 overflow-y-auto p-2">
              {results.map((result) => {
                const Icon = resultIcons[result.type];

                return (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.href}
                    onClick={() => setQuery("")}
                    className="flex gap-3 rounded-md p-3 transition hover:bg-muted"
                  >
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-medium">
                          {result.title}
                        </p>
                        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                          {resultLabels[result.type]}
                        </span>
                      </div>

                      <p className="truncate text-xs text-muted-foreground">
                        {result.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-muted-foreground">
              No results found.
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
