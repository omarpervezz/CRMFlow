import { Card, CardContent } from "@/components/ui/card";
import { users } from "@/lib/mock-data";
import type { Lead } from "@/types";

type LeadDetailsProps = {
  lead: Lead;
};

export function LeadDetails({ lead }: LeadDetailsProps) {
  const assignee = users.find((user) => user.id === lead.assignedTo);

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div>
            <p className="text-sm text-muted-foreground">Full Name</p>

            <p className="font-medium">{lead.name}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Email</p>

            <p>{lead.email}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Company</p>

            <p>{lead.company}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Source</p>

            <p>{lead.source}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Status</p>

            <p className="capitalize">{lead.status}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Assigned To</p>

            <p>{assignee?.name}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Created</p>

            <p>{lead.createdAt}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
