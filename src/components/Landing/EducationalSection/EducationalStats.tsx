import { Box, Flex, Text, Divider } from "@mantine/core";

export function EducationStats() {
  return (
    <Box>
      <Box
        style={{
          color: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "between",
          alignItems: "center",
        }}
      >
        <Flex
          justify="space-between"
          align="center"
          gap={20}
          style={{ width: "100%" }}
        >
          <StatBlock number="100%" label1="Customer" label2="Satisfaction" />
          <StatBlock number="350+" label1="Photography" label2="Sessions" />
        </Flex>
      </Box>
    </Box>
  );
}

function StatBlock({
  number,
  label1,
  label2,
}: {
  number: string;
  label1: string;
  label2: string;
}) {
  return (
    <Flex direction="column" align="center" style={{ flex: 1 }}>
      <Text style={{ fontSize: "50px", fontWeight: "bold" }}>{number}</Text>
      <Text style={{ fontSize: "14px", textTransform: "uppercase" }}>
        {label1}
      </Text>
      <Text style={{ fontSize: "14px", textTransform: "uppercase" }}>
        {label2}
      </Text>
      <Divider
        size="xs"
        color="red"
        style={{ width: "50px", marginTop: "10px" }}
      />
    </Flex>
  );
}
