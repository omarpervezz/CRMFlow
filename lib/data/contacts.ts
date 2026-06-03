import { companies, contacts } from "@/lib/mock-data";

export function getContacts() {
  return contacts.map((contact) => {
    const company = companies.find(
      (company) => company.id === contact.companyId,
    );

    return {
      ...contact,
      company,
    };
  });
}

export function getContactById(id: string) {
  return getContacts().find((contact) => contact.id === id);
}
