import { Box, Container, Flex } from "theme-ui";

import { Header, Summary } from "@/components";

export function Transactions() {
  return (
    <Box my={5}>
      <Container>
        <Flex sx={{ flexDirection: "column", gap: 5 }}>
          <Header />
          <Summary />
        </Flex>
      </Container>
      {/* <TransactionsList /> */}
    </Box>
  );
}
