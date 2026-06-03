import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DealStageBadge } from "@/features/deals/components/deal-stage-badge";
import type { Company, Contact, Deal, DealStage } from "@/types";

type DealWithRelations = Deal & {
  company?: Company;
  contact?: Contact;
};

type DealsPipelineBoardProps = {
  deals: DealWithRelations[];
};

const stages: DealStage[] = [
  "lead",
  "qualified",
  "proposal",
  "negotiation",
  "won",
  "lost",
];

const stageLabels: Record<DealStage, string> = {
  lead: "Lead",
  qualified: "Qualified",
  proposal: "Proposal",
  negotiation: "Negotiation",
  won: "Won",
  lost: "Lost",
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function DealsPipelineBoard({ deals }: DealsPipelineBoardProps) {
  return (
    <div className="grid gap-4 xl:grid-cols-3 2xl:grid-cols-6">
      {stages.map((stage) => {
        const stageDeals = deals.filter((deal) => deal.stage === stage);
        const stageValue = stageDeals.reduce(
          (total, deal) => total + deal.value,
          0,
        );

        return (
          <Card key={stage} className="min-h-105">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">{stageLabels[stage]}</CardTitle>
                <DealStageBadge stage={stage} />
              </div>

              <div>
                <p className="text-lg font-semibold">
                  {currencyFormatter.format(stageValue)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stageDeals.length} deal{stageDeals.length === 1 ? "" : "s"}
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              {stageDeals.map((deal) => (
                <div
                  key={deal.id}
                  className="rounded-lg border bg-background p-3 shadow-sm"
                >
                  <p className="text-sm font-medium">{deal.title}</p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {deal.company?.name ?? "Unknown company"}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      {currencyFormatter.format(deal.value)}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {deal.probability}%
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-muted-foreground">
                    Close: {deal.expectedCloseDate}
                  </p>
                </div>
              ))}

              {stageDeals.length === 0 ? (
                <div className="flex h-24 items-center justify-center rounded-lg border border-dashed text-xs text-muted-foreground">
                  No deals
                </div>
              ) : null}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
