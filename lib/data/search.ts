import { companies, contacts, deals, leads } from "@/lib/mock-data";

export type SearchResultType = "lead" | "contact" | "company" | "deal";

export type SearchResult = {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  href: string;
};

export function getGlobalSearchResults(query: string): SearchResult[] {
  const searchValue = query.trim().toLowerCase();

  if (!searchValue) {
    return [];
  }

  const leadResults: SearchResult[] = leads
    .filter((lead) => {
      return (
        lead.name.toLowerCase().includes(searchValue) ||
        lead.email.toLowerCase().includes(searchValue) ||
        lead.company.toLowerCase().includes(searchValue)
      );
    })
    .map((lead) => ({
      id: lead.id,
      type: "lead",
      title: lead.name,
      description: `${lead.company} · ${lead.email}`,
      href: "/leads",
    }));

  const contactResults: SearchResult[] = contacts
    .filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`;

      return (
        fullName.toLowerCase().includes(searchValue) ||
        contact.email.toLowerCase().includes(searchValue) ||
        contact.title.toLowerCase().includes(searchValue)
      );
    })
    .map((contact) => ({
      id: contact.id,
      type: "contact",
      title: `${contact.firstName} ${contact.lastName}`,
      description: `${contact.title} · ${contact.email}`,
      href: "/contacts",
    }));

  const companyResults: SearchResult[] = companies
    .filter((company) => {
      return (
        company.name.toLowerCase().includes(searchValue) ||
        company.industry.toLowerCase().includes(searchValue) ||
        company.website.toLowerCase().includes(searchValue)
      );
    })
    .map((company) => ({
      id: company.id,
      type: "company",
      title: company.name,
      description: `${company.industry} · ${company.website}`,
      href: "/companies",
    }));

  const dealResults: SearchResult[] = deals
    .filter((deal) => {
      const company = companies.find((item) => item.id === deal.companyId);

      return (
        deal.title.toLowerCase().includes(searchValue) ||
        company?.name.toLowerCase().includes(searchValue)
      );
    })
    .map((deal) => {
      const company = companies.find((item) => item.id === deal.companyId);

      return {
        id: deal.id,
        type: "deal",
        title: deal.title,
        description: `${company?.name ?? "Unknown company"} · ${deal.stage}`,
        href: "/deals",
      };
    });

  return [
    ...leadResults,
    ...contactResults,
    ...companyResults,
    ...dealResults,
  ].slice(0, 8);
}
