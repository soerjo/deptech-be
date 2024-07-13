import { TransactionEnum } from "../enum/transaction.enum";

export interface ITransaction {
  id: number;
  name: string;
  transaction_type: TransactionEnum;
  quantity: number;
}

export interface CreateTransaction {
  name: string;
  transaction_type: TransactionEnum;
  quantity: number;
  productId: number;
}

export interface filterTransaction {
  productId?: string;
}
