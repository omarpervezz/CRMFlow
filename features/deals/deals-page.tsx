"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, Table2 } from "lucide-react";
import { DetailsDrawer } from "@/components/shared/details-drawer";
import { DealDetails } from "@/features/deals/components/deal-details";
import type { Company, Contact, Deal, DealStage } from "@/types";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { DealsPipelineBoard } from "@/features/deals/components/deals-pipeline-board";
import { DealsTable } from "@/features/deals/components/deals-table";
import { DealsToolbar } from "@/features/deals/components/deals-toolbar";
import { getDeals } from "@/lib/data/deals";

type ViewMode = "table" | "pipeline";

type DealWithRelations = Deal & {
  company?: Company;
  contact?: Contact;
};

export function DealsPage() {
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState<DealStage | "all">("all");
  const [viewMode, setViewMode] = useState<ViewMode>("pipeline");
  const [selectedDeal, setSelectedDeal] = useState<DealWithRelations | null>(
    null,
  );

  const deals = getDeals();

  const filteredDeals = useMemo(() => {
    return deals.filter((deal) => {
      const companyName = deal.company?.name ?? "";
      const contactName = deal.contact
        ? `${deal.contact.firstName} ${deal.contact.lastName}`
        : "";

      const searchValue = search.toLowerCase();

      const matchesSearch =
        deal.title.toLowerCase().includes(searchValue) ||
        companyName.toLowerCase().includes(searchValue) ||
        contactName.toLowerCase().includes(searchValue);

      const matchesStage = stage === "all" || deal.stage === stage;

      return matchesSearch && matchesStage;
    });
  }, [deals, search, stage]);

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <PageHeader
            title="Deals"
            description="Track revenue opportunities across your sales pipeline."
          />

          <div className="flex rounded-lg border bg-background p-1">
            <Button
              variant={viewMode === "pipeline" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("pipeline")}
            >
              <LayoutGrid className="mr-2 h-4 w-4" />
              Pipeline
            </Button>

            <Button
              variant={viewMode === "table" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("table")}
            >
              <Table2 className="mr-2 h-4 w-4" />
              Table
            </Button>
          </div>
        </div>

        <DealsToolbar
          search={search}
          stage={stage}
          onSearchChange={setSearch}
          onStageChange={setStage}
        />

        {viewMode === "pipeline" ? (
          <DealsPipelineBoard deals={filteredDeals} />
        ) : (
          <DealsTable deals={filteredDeals} onSelectDeal={setSelectedDeal} />
        )}
      </div>

      <DetailsDrawer
        open={!!selectedDeal}
        onOpenChange={(open) => {
          if (!open) setSelectedDeal(null);
        }}
        title={selectedDeal?.title ?? ""}
        description="Deal Details"
      >
        {selectedDeal ? <DealDetails deal={selectedDeal} /> : null}
      </DetailsDrawer>
    </>
  );
}
