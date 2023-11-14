export type ITransactionItem = {
    id: string;
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
  