"use client";

import { useMemo, useState } from "react";
import { DetailsDrawer } from "@/components/shared/details-drawer";
import { ActivityDetails } from "@/features/activities/components/activity-details";
import type { Activity, ActivityType, User } from "@/types";
import { PageHeader } from "@/components/shared/page-header";

import { ActivitiesTable } from "./components/activities-table";
import { ActivitiesToolbar } from "./components/activities-toolbar";

import { getActivities } from "@/lib/data/activities";

type ActivityWithUser = Activity & {
  user?: User;
};

export function ActivitiesPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<ActivityType | "all">("all");
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityWithUser | null>(null);

  const activities = getActivities();

  const filteredActivities = useMemo(() => {
    const searchValue = search.toLowerCase();

    return activities.filter((activity) => {
      const userName = activity.user?.name.toLowerCase() ?? "";

      const matchesSearch =
        activity.description.toLowerCase().includes(searchValue) ||
        userName.includes(searchValue);

      const matchesType = type === "all" || activity.type === type;

      return matchesSearch && matchesType;
    });
  }, [activities, search, type]);

  return (
    <>
      <div className="space-y-6">
        <PageHeader
          title="Activities"
          description="Track calls, emails, meetings, and notes."
        />

        <ActivitiesToolbar
          search={search}
          type={type}
          onSearchChange={setSearch}
          onTypeChange={setType}
        />

        <ActivitiesTable
          activities={filteredActivities}
          onSelectActivity={setSelectedActivity}
        />
      </div>
      <DetailsDrawer
        open={!!selectedActivity}
        onOpenChange={(open) => {
          if (!open) setSelectedActivity(null);
        }}
        title={selectedActivity?.description ?? ""}
        description="Activity Details"
      >
        {selectedActivity ? (
          <ActivityDetails activity={selectedActivity} />
        ) : null}
      </DetailsDrawer>
    </>
  );
}
