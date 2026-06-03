import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DealStageBadge } from "@/features/deals/components/deal-stage-badge";
import type { Contact, Deal, Company } from "@/types";

type DealWithRelations = Deal & {
  company?: Company;
  contact?: Contact;
};

type DealsTableProps = {
  deals: DealWithRelations[];
  onSelectDeal: (deal: DealWithRelations) => void;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function DealsTable({ deals, onSelectDeal }: DealsTableProps) {
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Deal</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Probability</TableHead>
            <TableHead>Close Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {deals.map((deal) => (
            <TableRow
              key={deal.id}
              className="cursor-pointer"
              onClick={() => onSelectDeal(deal)}
            >
              <TableCell>
                <p className="font-medium">{deal.title}</p>
              </TableCell>

              <TableCell>{deal.company?.name ?? "Unknown"}</TableCell>

              <TableCell>
                {deal.contact
                  ? `${deal.contact.firstName} ${deal.contact.lastName}`
                  : "Unknown"}
              </TableCell>

              <TableCell>{currencyFormatter.format(deal.value)}</TableCell>

              <TableCell>
                <DealStageBadge stage={deal.stage} />
              </TableCell>

              <TableCell>{deal.probability}%</TableCell>

              <TableCell className="text-muted-foreground">
                {deal.expectedCloseDate}
              </TableCell>
            </TableRow>
          ))}

          {deals.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={7}
                className="h-32 text-center text-muted-foreground"
              >
                No deals found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
