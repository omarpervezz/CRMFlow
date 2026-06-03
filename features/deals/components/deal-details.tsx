import { Card, CardContent } from "@/components/ui/card";
import type { Company, Contact, Deal } from "@/types";

type DealWithRelations = Deal & {
  company?: Company;
  contact?: Contact;
};

type DealDetailsProps = {
  deal: DealWithRelations;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function DealDetails({ deal }: DealDetailsProps) {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <Detail label="Deal Title" value={deal.title} />
        <Detail label="Company" value={deal.company?.name ?? "Unknown"} />
        <Detail
          label="Contact"
          value={
            deal.contact
              ? `${deal.contact.firstName} ${deal.contact.lastName}`
              : "Unknown"
          }
        />
        <Detail label="Value" value={currencyFormatter.format(deal.value)} />
        <Detail label="Stage" value={deal.stage} capitalize />
        <Detail label="Probability" value={`${deal.probability}%`} />
        <Detail label="Expected Close Date" value={deal.expectedCloseDate} />
      </CardContent>
    </Card>
  );
}

function Detail({
  label,
  value,
  capitalize,
}: {
  label: string;
  value: string;
  capitalize?: boolean;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className={capitalize ? "font-medium capitalize" : "font-medium"}>
        {value}
      </p>
    </div>
  );
}
