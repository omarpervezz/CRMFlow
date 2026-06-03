import { activities, users } from "@/lib/mock-data";
import type { ActivityType } from "@/types";

export function getActivities() {
  return activities.map((activity) => {
    const user = users.find((item) => item.id === activity.userId);

    return {
      ...activity,
      user,
    };
  });
}

export function getActivitiesByType(type: ActivityType) {
  return getActivities().filter((activity) => activity.type === type);
}
