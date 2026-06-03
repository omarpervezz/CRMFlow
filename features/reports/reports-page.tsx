import { PageHeader } from "@/components/shared/page-header";
import { PipelineReportChart } from "@/features/reports/components/pipeline-report-chart";
import { ReportsKpiCards } from "@/features/reports/components/reports-kpi-cards";
import { RevenueReportChart } from "@/features/reports/components/revenue-report-chart";

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description="Analyze revenue, pipeline health, and sales performance."
      />

      <ReportsKpiCards />

      <div className="grid gap-6 xl:grid-cols-2">
        <RevenueReportChart />
        <PipelineReportChart />
      </div>
    </div>
  );
}
