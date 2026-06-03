import { companies, contacts, deals } from "@/lib/mock-data";
import type { DealStage } from "@/types";

export function getDeals() {
  return deals.map((deal) => {
    const company = companies.find((item) => item.id === deal.companyId);
    const contact = contacts.find((item) => item.id === deal.contactId);

    return {
      ...deal,
      company,
      contact,
    };
  });
}

export function getDealById(id: string) {
  return getDeals().find((deal) => deal.id === id);
}

export function getDealsByStage(stage: DealStage) {
  return getDeals().filter((deal) => deal.stage === stage);
}
