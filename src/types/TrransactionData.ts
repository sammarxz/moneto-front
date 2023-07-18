import { transactionCategories } from "./Categories";

export interface TransactionData {
  id: string;
  title: string;
  category: keyof typeof transactionCategories;
  amount: number;
  type: "expense" | "income";
}
