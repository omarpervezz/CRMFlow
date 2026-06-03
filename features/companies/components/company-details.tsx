import { Card, CardContent } from "@/components/ui/card";
import type { Company } from "@/types";

type CompanyWithStats = Company & {
  contactsCount: number;
  dealsCount: number;
  pipelineValue: number;
};

type CompanyDetailsProps = {
  company: CompanyWithStats;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function CompanyDetails({ company }: CompanyDetailsProps) {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <Detail label="Company Name" value={company.name} />
        <Detail label="Industry" value={company.industry} />
        <Detail label="Company Size" value={company.size} />
        <Detail label="Website" value={company.website} />
        <Detail label="Contacts" value={company.contactsCount.toString()} />
        <Detail label="Deals" value={company.dealsCount.toString()} />
        <Detail
          label="Pipeline Value"
          value={currencyFormatter.format(company.pipelineValue)}
        />
        <Detail
          label="Annual Revenue"
          value={currencyFormatter.format(company.annualRevenue)}
        />
      </CardContent>
    </Card>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
