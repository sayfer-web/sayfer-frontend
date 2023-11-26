// export type ITransactionItem = {
//   id: string;
//   txid: string;
//   address: string;
//   category: string;
//   sender: string;
//   confirmations: number;
//   receiver: string;
//   tokenType: string;
//   amount: number;
//   exchangeRate: number;
//   status: string;
//   errMsg: string | null
//   createdAt: Date;
//   successedAt: Date;
// };

// ----------------------------------------------------------------------

export type ITransactionTableFilterValue = string | Date | null;

export type ITransactionTableFilters = {
  name: string;
  status: string;
  startDate: Date | null;
  endDate: Date | null;
};

// ----------------------------------------------------------------------

export type ITransactionHistory = {
  orderTime: Date;
  paymentTime: Date;
  deliveryTime: Date;
  completionTime: Date;
  timeline: {
    title: string;
    time: Date;
  }[];
};

export type ITransactionShippingAddress = {
  fullAddress: string;
  phoneNumber: string;
};

export type ITransactionPayment = {
  cardType: string;
  cardNumber: string;
};

export type ITransactionDelivery = {
  shipBy: string;
  speedy: string;
  trackingNumber: string;
};

export type ITransactionCustomer = {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  ipAddress: string;
};

export type ITransactionProductItem = {
  id: string;
  sku: string;
  name: string;
  price: number;
  coverUrl: string;
  quantity: number;
};

export type ITransactionItem = {
  id: string;
  taxes: number;
  // status: string;
  shipping: number;
  discount: number;
  subTotal: number;
  orderNumber: string;
  totalAmount: number;
  totalQuantity: number;
  history: ITransactionHistory;
  customer: ITransactionCustomer;
  delivery: ITransactionDelivery;
  items: ITransactionProductItem[];
  // createdAt: Date;
  //   id: string;
  txid: string;
  address: string;
  category: string;
  sender: string;
  confirmations: number;
  receiver: string;
  tokenType: string;
  amount: number;
  exchangeRate: number;
  status: string;
  errMsg: string | null
  createdAt: Date;
  successedAt: Date;
};
