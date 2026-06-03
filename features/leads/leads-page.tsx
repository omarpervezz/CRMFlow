"use client";

import { useState, useMemo } from "react";

import { DetailsDrawer } from "@/components/shared/details-drawer";
import { LeadDetails } from "./components/lead-details";

import type { Lead } from "@/types";

import { LeadsTable } from "@/features/leads/components/leads-table";
import { LeadsToolbar } from "@/features/leads/components/leads-toolbar";
import { getLeads } from "@/lib/data/leads";
import type { LeadStatus } from "@/types";
import { PageHeader } from "@/components/shared/page-header";

export function LeadsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<LeadStatus | "all">("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const leads = getLeads();

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.company.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status === "all" || lead.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [leads, search, status]);

  return (
    <>
      <div className="space-y-6">
        <PageHeader
          title="Leads"
          description="Manage and track potential sales opportunities."
        />

        <LeadsToolbar
          search={search}
          status={status}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
        />

        <LeadsTable leads={filteredLeads} onSelectLead={setSelectedLead} />
      </div>
      <DetailsDrawer
        open={!!selectedLead}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedLead(null);
          }
        }}
        title={selectedLead?.name ?? ""}
        description="Lead Details"
      >
        {selectedLead ? <LeadDetails lead={selectedLead} /> : null}
      </DetailsDrawer>
    </>
  );
}
