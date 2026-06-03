import { deals, leads, tasks } from "@/lib/mock-data";

export function getDashboardStats() {
  const totalPipelineValue = deals.reduce(
    (total, deal) => total + deal.value,
    0,
  );

  const activeDeals = deals.filter(
    (deal) => deal.stage !== "won" && deal.stage !== "lost",
  ).length;

  const openTasks = tasks.filter((task) => task.status !== "completed").length;

  return {
    totalPipelineValue,
    activeDeals,
    totalLeads: leads.length,
    openTasks,
  };
}
