import { Card, CardContent } from "@/components/ui/card";
import type { Company, Contact } from "@/types";

type ContactWithCompany = Contact & {
  company?: Company;
};

type ContactDetailsProps = {
  contact: ContactWithCompany;
};

export function ContactDetails({ contact }: ContactDetailsProps) {
  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <Detail
          label="Full Name"
          value={`${contact.firstName} ${contact.lastName}`}
        />
        <Detail label="Title" value={contact.title} />
        <Detail label="Company" value={contact.company?.name ?? "Unknown"} />
        <Detail label="Email" value={contact.email} />
        <Detail label="Phone" value={contact.phone} />
      </CardContent>
    </Card>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
