import { Divider, Flex, Text, Title } from "@mantine/core";

export function StatBlock({
  number,
  label1,
  label2,
}: {
  number: string;
  label1: string;
  label2: string;
}) {
  return (
    <Flex direction="column" align="center" w={{ base: "100%", md: "45%" }}>
      <Title fw={700} order={1}>
        {number}
      </Title>
      <Text tt="uppercase" size="md" fw={600}>
        {label1}
      </Text>
      <Text tt="uppercase" size="md" fw={600}>
        {label2}
      </Text>
      <Divider my="xl" color="#f8a500" w="50%" />
    </Flex>
  );
}
