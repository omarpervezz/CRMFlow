import { leads } from "@/lib/mock-data";
import type { LeadStatus } from "@/types";

export function getLeads() {
  return leads;
}

export function getLeadById(id: string) {
  return leads.find((lead) => lead.id === id);
}

export function getLeadsByStatus(status: LeadStatus) {
  return leads.filter((lead) => lead.status === status);
}
