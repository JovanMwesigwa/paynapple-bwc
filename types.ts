export enum InvoiceEnum {
  "Unpaid",
  "Partially",
  "Paid",
  "Rejected",
}

export type InvoiceT = {
  id: string;
  client: string;
  amount: number;
  invoiceNumber: string;
  category: InvoiceEnum;
  dueDate: string;
  createdAt: string;
};
