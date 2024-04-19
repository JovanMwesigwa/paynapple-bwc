import { ClientT, InvoiceEnum, InvoiceT, ProductT } from "@/types";

export const invoices: InvoiceT[] = [
  {
    id: "1",
    client: {
      id: "1",
      name: "Google",
      email: "google@gmail.com",
      phone: "256700713434",
      address: "Kampala, Uganda",
    },
    products: [
      {
        id: "1",
        name: "Product 1",
        price: 1000,
        quantity: 1,
      },
      {
        id: "2",
        name: "Product 2",
        price: 2000,
        quantity: 2,
      },
    ],
    terms: "Payment should be made within 30 days",
    customerNotes: "Please make payments on time",
    minipaywallet: "256700713436",
    thankYouNotes: "Thank you for your business",
    amount: 5000, // Adjusted to sum products: (1000 * 1) + (2000 * 2)
    invoiceNumber: "INV-123",
    category: InvoiceEnum.Unpaid,
    dueDate: "2021-12-12",
    createdAt: "2021-11-12",
  },
  {
    id: "2",
    client: {
      id: "2",
      name: "Twitter",
      email: "twitter@gmail.com",
      phone: "256700713435",
      address: "Kampala, Uganda",
    },
    products: [
      {
        id: "1",
        name: "Service Fee",
        price: 2000,
        quantity: 1,
      },
    ],
    terms: "Payment should be made within 30 days",
    customerNotes: "Please make payments on time",
    minipaywallet: "256700713436",
    thankYouNotes: "Thank you for your business",
    amount: 2000, // Reflects total of products
    invoiceNumber: "INV-124",
    category: InvoiceEnum.Partially,
    dueDate: "2021-12-12",
    createdAt: "2021-11-12",
  },
  {
    id: "3",
    client: {
      id: "3",
      name: "Facebook",
      email: "facebook@gmail.com",
      phone: "256700713436",
      address: "Kampala, Uganda",
    },
    products: [
      {
        id: "1",
        name: "Consultation",
        price: 3000,
        quantity: 1,
      },
    ],
    terms: "Payment should be made within 30 days",
    customerNotes: "Please make payments on time",
    thankYouNotes: "Thank you for your business",
    minipaywallet: "256700713436",
    amount: 3000, // Reflects total of products
    invoiceNumber: "INV-125",
    category: InvoiceEnum.Paid,
    dueDate: "2021-12-12",
    createdAt: "2021-11-12",
  },
  {
    id: "4",
    client: {
      id: "4",
      name: "Amazon",
      email: "amazon@gmail.com",
      phone: "256700713437",
      address: "Kampala, Uganda",
    },
    products: [
      {
        id: "1",
        name: "Marketing Services",
        price: 4000,
        quantity: 1,
      },
    ],
    terms: "Payment should be made within 30 days",
    customerNotes: "Please make payments on time",
    thankYouNotes: "Thank you for your business",
    amount: 4000, // Reflects total of products
    invoiceNumber: "INV-126",
    category: InvoiceEnum.Rejected,
    minipaywallet: "256700713436",
    dueDate: "2021-12-12",
    createdAt: "2021-11-12",
  },
];

export const emptyInvoice: InvoiceT = {
  id: "1",
  // @ts-ignore
  client: {},
  products: [],
  terms: "",
  customerNotes: "",
  minipaywallet: "256700713436",
  thankYouNotes: "Thank you for your business",
  amount: 0.0, // Adjusted to sum products: (1000 * 1) + (2000 * 2)
  invoiceNumber: "INV-123",
  category: InvoiceEnum.Unpaid,
  dueDate: "2021-12-12",
  createdAt: "2021-11-12",
};

export const Products: ProductT[] = [
  {
    id: "1",
    name: "Product 1",
    price: 1000,
    quantity: 1,
  },
  {
    id: "2",
    name: "Product 2",
    price: 2000,
    quantity: 2,
  },
  {
    id: "3",
    name: "Service Fee",
    price: 2000,
    quantity: 1,
  },
  {
    id: "4",
    name: "Consultation",
    price: 3000,
    quantity: 1,
  },
  {
    id: "5",
    name: "Marketing Services",
    price: 4000,
    quantity: 1,
  },
];

export const clients: ClientT[] = [
  {
    id: "1",
    name: "Google",
    email: "google@gmail.com",
    phone: "256700713434",
    address: "Kampala, Uganda",
  },
  {
    id: "2",
    name: "Twitter",
    email: "twitter@gmail.com",
    phone: "256700713435",
    address: "Kampala, Uganda",
  },
  {
    id: "3",
    name: "Facebook",
    email: "facebook@gmail.com",
    phone: "256700713436",
    address: "Kampala, Uganda",
  },
  {
    id: "4",
    name: "Amazon",
    email: "amazon@gmail.com",
    phone: "256700713437",
    address: "Kampala, Uganda",
  },
];
