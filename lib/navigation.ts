import {
  Activity,
  BarChart3,
  Building2,
  Contact,
  LayoutDashboard,
  ListTodo,
  Target,
  Users,
} from "lucide-react";

export const navigationItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Leads",
    href: "/leads",
    icon: Target,
  },
  {
    title: "Contacts",
    href: "/contacts",
    icon: Contact,
  },
  {
    title: "Companies",
    href: "/companies",
    icon: Building2,
  },
  {
    title: "Deals",
    href: "/deals",
    icon: Users,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: ListTodo,
  },
  {
    title: "Activities",
    href: "/activities",
    icon: Activity,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
];
