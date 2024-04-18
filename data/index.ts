import { InvoiceEnum, InvoiceT } from "@/types";

export const invoices: InvoiceT[] = [
  {
    id: "1",
    client: "Google",
    amount: 1000,
    invoiceNumber: "INV-123",
    category: InvoiceEnum.Unpaid,
    dueDate: "2021-12-12",
    createdAt: "2021-11-12",
  },
  {
    id: "2",
    client: "Apple",
    amount: 2000,
    invoiceNumber: "INV-124",
    category: InvoiceEnum.Partially,
    dueDate: "2021-12-12",
    createdAt: "2021-11-12",
  },
  {
    id: "3",
    client: "Facebook",
    amount: 3000,
    invoiceNumber: "INV-125",
    category: InvoiceEnum.Paid,
    dueDate: "2021-12-12",
    createdAt: "2021-11-12",
  },
  {
    id: "4",
    client: "Amazon",
    amount: 4000,
    invoiceNumber: "INV-126",
    category: InvoiceEnum.Rejected,
    dueDate: "2021-12-12",
    createdAt: "2021-11-12",
  },
];
