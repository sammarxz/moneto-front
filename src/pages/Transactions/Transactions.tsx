import { Container, Flex } from "theme-ui";

import { Header, Summary, TransactionsList } from "@/components";

export function Transactions() {
  return (
    <Flex my={5} sx={{ flexDirection: "column", gap: 5 }}>
      <Container>
        <Flex sx={{ flexDirection: "column", gap: 5 }}>
          <Header />
          <Summary />
        </Flex>
      </Container>
      <TransactionsList />
    </Flex>
  );
}
