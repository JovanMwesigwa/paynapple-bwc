export enum InvoiceEnum {
  "Unpaid" = "Unpaid",
  "Partially" = "Partially",
  "Paid" = "Paid",
  "Rejected" = "Rejected",
}

export enum InvoiceType {}

export type InvoiceT = {
  id: string;
  client: string;
  amount: number;
  invoiceNumber: string;
  category: InvoiceEnum;
  dueDate: string;
  createdAt: string;
};
