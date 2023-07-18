import { Container, Flex } from "theme-ui";

import { Header, Summary } from "@/components";

export function Transactions() {
  return (
    <>
      <Container>
        <Flex sx={{ flexDirection: "column", gap: 5 }}>
          <Header />
          <Summary />
        </Flex>
      </Container>
    </>
  );
}
