import {
  deals,
  leads,
  pipelineMetrics,
  revenueMetrics,
  tasks,
} from "@/lib/mock-data";

export function getReportsData() {
  const wonDeals = deals.filter((deal) => deal.stage === "won");
  const lostDeals = deals.filter((deal) => deal.stage === "lost");
  const convertedLeads = leads.filter((lead) => lead.status === "converted");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  const totalRevenue = wonDeals.reduce((total, deal) => total + deal.value, 0);

  const pipelineValue = deals
    .filter((deal) => deal.stage !== "won" && deal.stage !== "lost")
    .reduce((total, deal) => total + deal.value, 0);

  const leadConversionRate =
    leads.length > 0
      ? Math.round((convertedLeads.length / leads.length) * 100)
      : 0;

  const taskCompletionRate =
    tasks.length > 0
      ? Math.round((completedTasks.length / tasks.length) * 100)
      : 0;

  return {
    totalRevenue,
    pipelineValue,
    wonDeals: wonDeals.length,
    lostDeals: lostDeals.length,
    leadConversionRate,
    taskCompletionRate,
    revenueMetrics,
    pipelineMetrics,
  };
}
