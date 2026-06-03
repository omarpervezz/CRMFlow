import { KpiCards } from "@/features/dashboard/components/kpi-cards";
import { RecentActivities } from "@/features/dashboard/components/recent-activities";
import { RevenueChart } from "@/features/dashboard/components/revenue-chart";
import { UpcomingTasks } from "@/features/dashboard/components/upcoming-tasks";
import { PageHeader } from "@/components/shared/page-header";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Sales Dashboard"
        description="Welcome back. Here's your CRM overview."
      />

      <KpiCards />

      <RevenueChart />

      <div className="grid gap-6 xl:grid-cols-2">
        <RecentActivities />
        <UpcomingTasks />
      </div>
    </div>
  );
}
