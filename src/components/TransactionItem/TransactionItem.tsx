import { Flex, Heading, Text } from "theme-ui";

import { TransactionIcon } from "../";

import { TransactionData } from "@/types/TrransactionData";
import { transactionCategories } from "@/types/Categories";

interface TransactionItemProps {
  transaction: TransactionData;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const { title, amount, category, type } = transaction;

  function renderAmount() {
    return (
      <Text
        color={type === "income" ? "primary" : "text"}
        sx={{ fontSize: 3, fontWeight: "bold" }}
      >
        {type === "income" ? "+" : "-"}
        R$ {amount}
      </Text>
    );
  }

  return (
    <Flex
      py={3}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "1px solid",
        borderColor: "gray.medium",
      }}
    >
      <Flex sx={{ alignItems: "center", gap: 2 }}>
        <TransactionIcon name={transactionCategories[category]} />
        <Flex sx={{ flexDirection: "column" }}>
          <Heading
            sx={{
              fontSize: 3,
              fontFamily: "body",
            }}
          >
            {title}
          </Heading>
          <Text color="gray.light">{category}</Text>
        </Flex>
      </Flex>
      {renderAmount()}
    </Flex>
  );
}
