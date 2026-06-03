import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { Company, Contact } from "@/types";

type ContactWithCompany = Contact & {
  company?: Company;
};

type ContactsTableProps = {
  contacts: ContactWithCompany[];
  onSelectContact: (contact: ContactWithCompany) => void;
};

export function ContactsTable({
  contacts,
  onSelectContact,
}: ContactsTableProps) {
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Contact</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {contacts.map((contact) => (
            <TableRow
              key={contact.id}
              className="cursor-pointer"
              onClick={() => onSelectContact(contact)}
            >
              <TableCell>
                <div>
                  <p className="font-medium">
                    {contact.firstName} {contact.lastName}
                  </p>
                </div>
              </TableCell>

              <TableCell>{contact.title}</TableCell>

              <TableCell>{contact.company?.name ?? "Unknown"}</TableCell>

              <TableCell>{contact.email}</TableCell>

              <TableCell>{contact.phone}</TableCell>
            </TableRow>
          ))}

          {contacts.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={5}
                className="h-32 text-center text-muted-foreground"
              >
                No contacts found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
