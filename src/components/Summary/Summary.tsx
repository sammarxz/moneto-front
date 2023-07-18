import { Flex } from "theme-ui";

import { Header } from "./Header";
import { Value } from "./Value";

export function Summary() {
  return (
    <Flex sx={{ flexDirection: "column", gap: 5 }}>
      <Header name="Samuel" />
      <Flex sx={{ gap: 3 }}>
        <Value type="income" value={400.32} />
        <Value type="expense" value={234.24} />
      </Flex>
    </Flex>
  );
}
