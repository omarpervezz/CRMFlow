import type { PipelineMetric, RevenueMetric } from "@/types";

export const revenueMetrics: RevenueMetric[] = [
  { month: "Jan", revenue: 32000 },
  { month: "Feb", revenue: 41000 },
  { month: "Mar", revenue: 38000 },
  { month: "Apr", revenue: 52000 },
  { month: "May", revenue: 61000 },
  { month: "Jun", revenue: 74000 },
];

export const pipelineMetrics: PipelineMetric[] = [
  { stage: "Lead", value: 96000 },
  { stage: "Qualified", value: 18000 },
  { stage: "Proposal", value: 42000 },
  { stage: "Negotiation", value: 26000 },
  { stage: "Won", value: 54000 },
];
