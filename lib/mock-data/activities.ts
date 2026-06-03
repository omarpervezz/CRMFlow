import type { Activity } from "@/types";

export const activities: Activity[] = [
  {
    id: "activity-001",
    type: "call",
    description: "Discovery call completed with Acme Cloud.",
    userId: "user-003",
    createdAt: "2026-06-01T10:30:00",
  },
  {
    id: "activity-002",
    type: "email",
    description: "Proposal sent to BrightPath Agency.",
    userId: "user-004",
    createdAt: "2026-06-01T14:15:00",
  },
  {
    id: "activity-003",
    type: "meeting",
    description: "Pipeline review meeting with sales team.",
    userId: "user-002",
    createdAt: "2026-06-02T09:00:00",
  },
  {
    id: "activity-004",
    type: "note",
    description: "Orbit Finance requested onboarding support.",
    userId: "user-005",
    createdAt: "2026-06-02T11:45:00",
  },
  {
    id: "activity-005",
    type: "email",
    description: "Follow-up email sent to Northstar Labs.",
    userId: "user-003",
    createdAt: "2026-06-02T13:20:00",
  },
];
