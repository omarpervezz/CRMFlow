import { companies, contacts, deals } from "@/lib/mock-data";

export function getCompanies() {
  return companies.map((company) => {
    const companyContacts = contacts.filter(
      (contact) => contact.companyId === company.id,
    );

    const companyDeals = deals.filter((deal) => deal.companyId === company.id);

    return {
      ...company,
      contactsCount: companyContacts.length,
      dealsCount: companyDeals.length,
      pipelineValue: companyDeals.reduce(
        (total, deal) => total + deal.value,
        0,
      ),
    };
  });
}

export function getCompanyById(id: string) {
  return getCompanies().find((company) => company.id === id);
}
