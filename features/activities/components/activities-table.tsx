import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ActivityTypeBadge } from "./activity-type-badge";

import type { Activity, User } from "@/types";

type ActivityWithUser = Activity & {
  user?: User;
};

type ActivitiesTableProps = {
  activities: ActivityWithUser[];
  onSelectActivity: (activity: ActivityWithUser) => void;
};

export function ActivitiesTable({
  activities,
  onSelectActivity,
}: ActivitiesTableProps) {
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {activities.map((activity) => (
            <TableRow
              key={activity.id}
              className="cursor-pointer"
              onClick={() => onSelectActivity(activity)}
            >
              <TableCell>
                <ActivityTypeBadge type={activity.type} />
              </TableCell>

              <TableCell>{activity.description}</TableCell>

              <TableCell>{activity.user?.name ?? "Unknown"}</TableCell>

              <TableCell className="text-muted-foreground">
                {new Date(activity.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}

          {activities.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={4}
                className="h-32 text-center text-muted-foreground"
              >
                No activities found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
