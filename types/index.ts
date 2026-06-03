export type UserRole =
  | "admin"
  | "sales_manager"
  | "sales_rep"
  | "account_manager";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "proposal"
  | "converted"
  | "lost";

export type TaskPriority = "low" | "medium" | "high";

export type TaskStatus = "todo" | "in_progress" | "completed";

export type ActivityType = "call" | "email" | "meeting" | "note";

export type DealStage =
  | "lead"
  | "qualified"
  | "proposal"
  | "negotiation"
  | "won"
  | "lost";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  source: string;
  status: LeadStatus;
  assignedTo: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  companyId: string;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  size: string;
  website: string;
  annualRevenue: number;
}

export interface Deal {
  id: string;
  title: string;
  companyId: string;
  contactId: string;
  value: number;
  stage: DealStage;
  probability: number;
  expectedCloseDate: string;
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  assignedTo: string;
}

export interface Activity {
  id: string;
  type: ActivityType;
  description: string;
  userId: string;
  createdAt: string;
}

export interface RevenueMetric {
  month: string;
  revenue: number;
}

export interface PipelineMetric {
  stage: string;
  value: number;
}
