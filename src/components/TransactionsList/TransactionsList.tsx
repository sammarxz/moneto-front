import { TransactionData } from "@/types/TrransactionData";
import { Box } from "theme-ui";
import { TransactionItem } from "..";

const fakeTransactions: TransactionData[] = [
  {
    id: "1",
    amount: 100,
    title: "iFood",
    category: "Alimentação",
    type: "expense",
  },
  {
    id: "2",
    amount: 500,
    title: "freela",
    category: "Renda",
    type: "income",
  },
];

export function TransactionsList() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 700,
        p: 4,
        mx: "auto",
        bg: "gray.dark",
        border: "1px solid",
        borderColor: "gray.medium",
        borderRadius: 8,
      }}
    >
      {fakeTransactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </Box>
  );
}
