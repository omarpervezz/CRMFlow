import {
  BadgeDollarSign,
  BriefcaseBusiness,
  CheckCircle2,
  Percent,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getReportsData } from "@/lib/data/reports";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function ReportsKpiCards() {
  const reports = getReportsData();

  const cards = [
    {
      title: "Closed Revenue",
      value: currencyFormatter.format(reports.totalRevenue),
      description: "Revenue from won deals",
      icon: BadgeDollarSign,
    },
    {
      title: "Open Pipeline",
      value: currencyFormatter.format(reports.pipelineValue),
      description: "Potential revenue in active deals",
      icon: BriefcaseBusiness,
    },
    {
      title: "Lead Conversion",
      value: `${reports.leadConversionRate}%`,
      description: "Converted leads percentage",
      icon: Percent,
    },
    {
      title: "Task Completion",
      value: `${reports.taskCompletionRate}%`,
      description: "Completed sales tasks",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="mt-1 text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
