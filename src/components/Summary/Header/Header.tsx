import { Flex, Heading } from "theme-ui";

import { capitalize, getGreeting } from "@/utils";

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  return (
    <Flex sx={{ flexDirection: "column", gap: 3 }}>
      <Heading as="h1" sx={{ fontWeight: "bold", maxWidth: "300px" }}>
        {getGreeting()} {capitalize(name)}, você tem:
      </Heading>
      <Heading sx={{ fontFamily: "mono", color: "primary" }}>
        R$ 12.230,23
      </Heading>
    </Flex>
  );
}
