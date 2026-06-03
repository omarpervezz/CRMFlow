"use client";

import { useMemo, useState } from "react";
import { DetailsDrawer } from "@/components/shared/details-drawer";
import { CompanyDetails } from "@/features/companies/components/company-details";
import type { Company } from "@/types";
import { CompaniesTable } from "@/features/companies/components/companies-table";
import { CompaniesToolbar } from "@/features/companies/components/companies-toolbar";
import { getCompanies } from "@/lib/data/companies";
import { PageHeader } from "@/components/shared/page-header";
type CompanyWithStats = Company & {
  contactsCount: number;
  dealsCount: number;
  pipelineValue: number;
};

export function CompaniesPage() {
  const [search, setSearch] = useState("");
  const [selectedCompany, setSelectedCompany] =
    useState<CompanyWithStats | null>(null);

  const companies = getCompanies();

  const filteredCompanies = useMemo(() => {
    const searchValue = search.toLowerCase();

    return companies.filter((company) => {
      return (
        company.name.toLowerCase().includes(searchValue) ||
        company.industry.toLowerCase().includes(searchValue) ||
        company.website.toLowerCase().includes(searchValue)
      );
    });
  }, [companies, search]);

  return (
    <>
      <div className="space-y-6">
        <PageHeader
          title="Companies"
          description="Manage accounts, company profiles, and pipeline value."
        />
        <CompaniesToolbar search={search} onSearchChange={setSearch} />

        <CompaniesTable
          companies={filteredCompanies}
          onSelectCompany={setSelectedCompany}
        />
      </div>
      <DetailsDrawer
        open={!!selectedCompany}
        onOpenChange={(open) => {
          if (!open) setSelectedCompany(null);
        }}
        title={selectedCompany?.name ?? ""}
        description="Company Details"
      >
        {selectedCompany ? <CompanyDetails company={selectedCompany} /> : null}
      </DetailsDrawer>
    </>
  );
}
