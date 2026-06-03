import { BriefcaseBusiness, DollarSign, ListTodo, Target } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDashboardStats } from "@/lib/data/dashboard";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function KpiCards() {
  const statsData = getDashboardStats();

  const stats = [
    {
      title: "Pipeline Value",
      value: currencyFormatter.format(statsData.totalPipelineValue),
      description: "Total value across all deals",
      icon: DollarSign,
    },
    {
      title: "Active Deals",
      value: statsData.activeDeals.toString(),
      description: "Deals currently in progress",
      icon: BriefcaseBusiness,
    },
    {
      title: "Total Leads",
      value: statsData.totalLeads.toString(),
      description: "Leads captured this month",
      icon: Target,
    },
    {
      title: "Open Tasks",
      value: statsData.openTasks.toString(),
      description: "Tasks waiting for action",
      icon: ListTodo,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="mt-1 text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
