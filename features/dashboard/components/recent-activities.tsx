import { Mail, MessageSquareText, NotebookText, Phone } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activities, users } from "@/lib/mock-data";
import type { ActivityType } from "@/types";

const activityIcons: Record<ActivityType, React.ElementType> = {
  call: Phone,
  email: Mail,
  meeting: MessageSquareText,
  note: NotebookText,
};

export function RecentActivities() {
  const recentActivities = activities.slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {recentActivities.map((activity) => {
          const user = users.find((item) => item.id === activity.userId);
          const Icon = activityIcons[activity.type];

          return (
            <div key={activity.id} className="flex gap-3">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border bg-background">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-none">
                  {activity.description}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Avatar className="h-5 w-5">
                    <AvatarFallback className="text-[10px]">
                      {user?.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("") ?? "U"}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-xs text-muted-foreground">
                    {user?.name ?? "Unknown user"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
