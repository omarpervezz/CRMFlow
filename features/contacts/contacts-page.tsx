"use client";

import { useMemo, useState } from "react";
import { DetailsDrawer } from "@/components/shared/details-drawer";
import { ContactDetails } from "@/features/contacts/components/contact-details";
import type { Company, Contact } from "@/types";
import { ContactsTable } from "./components/contacts-table";
import { ContactsToolbar } from "./components/contacts-toolbar";

import { getContacts } from "@/lib/data/contacts";
import { PageHeader } from "@/components/shared/page-header";

type ContactWithCompany = Contact & {
  company?: Company;
};

export function ContactsPage() {
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] =
    useState<ContactWithCompany | null>(null);
  const contacts = getContacts();

  const filteredContacts = useMemo(() => {
    const searchValue = search.toLowerCase();

    return contacts.filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();

      const companyName = contact.company?.name.toLowerCase() ?? "";

      return (
        fullName.includes(searchValue) ||
        contact.email.toLowerCase().includes(searchValue) ||
        contact.title.toLowerCase().includes(searchValue) ||
        companyName.includes(searchValue)
      );
    });
  }, [contacts, search]);

  return (
    <>
      <div className="space-y-6">
        <PageHeader
          title="Contacts"
          description="Manage people and relationships across your accounts."
        />

        <ContactsToolbar search={search} onSearchChange={setSearch} />

        <ContactsTable
          contacts={filteredContacts}
          onSelectContact={setSelectedContact}
        />
      </div>
      <DetailsDrawer
        open={!!selectedContact}
        onOpenChange={(open) => {
          if (!open) setSelectedContact(null);
        }}
        title={
          selectedContact
            ? `${selectedContact.firstName} ${selectedContact.lastName}`
            : ""
        }
        description="Contact Details"
      >
        {selectedContact ? <ContactDetails contact={selectedContact} /> : null}
      </DetailsDrawer>
    </>
  );
}
