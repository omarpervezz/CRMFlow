import { Card, CardContent } from "@/components/ui/card";
import type { Activity, User } from "@/types";

type ActivityWithUser = Activity & {
  user?: User;
};

type ActivityDetailsProps = {
  activity: ActivityWithUser;
};

export function ActivityDetails({ activity }: ActivityDetailsProps) {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <Detail label="Type" value={activity.type} capitalize />
        <Detail label="Description" value={activity.description} />
        <Detail label="User" value={activity.user?.name ?? "Unknown"} />
        <Detail
          label="Created"
          value={new Date(activity.createdAt).toLocaleString()}
        />
      </CardContent>
    </Card>
  );
}

function Detail({
  label,
  value,
  capitalize,
}: {
  label: string;
  value: string;
  capitalize?: boolean;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className={capitalize ? "font-medium capitalize" : "font-medium"}>
        {value}
      </p>
    </div>
  );
}
