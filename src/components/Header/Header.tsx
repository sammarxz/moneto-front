import { Box, Button, Flex } from "theme-ui";

import { Logo } from "../";

export function Header() {
  return (
    <Box as="header">
      <Flex sx={{ alignItems: "center" }}>
        <Logo />
        <Button ml="auto">Nova transação</Button>
      </Flex>
    </Box>
  );
}
