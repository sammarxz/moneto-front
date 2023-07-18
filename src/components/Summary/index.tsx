import { Flex, Heading } from "theme-ui";

export function Summary() {
  return (
    <Flex sx={{ flexDirection: "column", gap: 3 }}>
      <Heading as="h1" sx={{ fontWeight: "bold", maxWidth: "300px" }}>
        Bom dia Samuel, você tem:
      </Heading>
      <Heading sx={{ fontFamily: "mono", color: "primary" }}>
        R$ 12.230,23
      </Heading>
    </Flex>
  );
}
