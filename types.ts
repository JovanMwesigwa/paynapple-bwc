export enum InvoiceEnum {
  "Unpaid" = "Unpaid",
  "Partially" = "Partially",
  "Paid" = "Paid",
  "Rejected" = "Rejected",
}

export enum InvoiceType {}

export type InvoiceT = {
  id: string;
  client: ClientT;
  amount: number;
  products: ProductT[];
  invoiceNumber: string;
  category: InvoiceEnum;
  terms?: string;
  customerNotes?: string;
  thankYouNotes?: string;
  dueDate: string;
  minipaywallet: string;
  createdAt: string;
};

export type ClientT = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type ProductT = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
