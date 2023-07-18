/** @jsxImportSource theme-ui */

import { Card, Flex, Text } from "theme-ui";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

interface ValueProps {
  type: "income" | "expense";
  value: number;
}

export function Value({ type, value }: ValueProps) {
  function renderType() {
    if (type === "income") {
      return (
        <>
          <ArrowDownLeft sx={{ color: "primary" }} />
          <Text color="gray.light">Entradas:</Text>
        </>
      );
    }

    return (
      <>
        <ArrowUpRight sx={{ color: "red" }} />
        <Text color="gray.light">Saídas:</Text>
      </>
    );
  }

  return (
    <Card>
      <Flex sx={{ gap: 2, alignItems: "center" }}>
        {renderType()}
        <Text sx={{ fontWeight: "bold" }}>R$ {value}</Text>
      </Flex>
    </Card>
  );
}
