import { ExternalLink } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { Company } from "@/types";

type CompanyWithStats = Company & {
  contactsCount: number;
  dealsCount: number;
  pipelineValue: number;
};

type CompaniesTableProps = {
  companies: CompanyWithStats[];
  onSelectCompany: (company: CompanyWithStats) => void;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function CompaniesTable({
  companies,
  onSelectCompany,
}: CompaniesTableProps) {
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Contacts</TableHead>
            <TableHead>Deals</TableHead>
            <TableHead>Pipeline Value</TableHead>
            <TableHead>Annual Revenue</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {companies.map((company) => (
            <TableRow
              key={company.id}
              className="cursor-pointer"
              onClick={() => onSelectCompany(company)}
            >
              <TableCell>
                <div>
                  <p className="font-medium">{company.name}</p>
                  <a
                    href={`https://${company.website}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                  >
                    {company.website}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </TableCell>

              <TableCell>{company.industry}</TableCell>
              <TableCell>{company.size}</TableCell>
              <TableCell>{company.contactsCount}</TableCell>
              <TableCell>{company.dealsCount}</TableCell>
              <TableCell>
                {currencyFormatter.format(company.pipelineValue)}
              </TableCell>
              <TableCell>
                {currencyFormatter.format(company.annualRevenue)}
              </TableCell>
            </TableRow>
          ))}

          {companies.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-32 text-center text-muted-foreground"
              >
                No companies found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
