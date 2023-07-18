import { Box, Button, Flex } from "theme-ui";

import { Logo } from "../";

export function Header() {
  return (
    <Box as="header" mt={5}>
      <Flex sx={{ alignItems: "center" }}>
        <Logo />
        <Button ml="auto">Nova transação</Button>
      </Flex>
    </Box>
  );
}
