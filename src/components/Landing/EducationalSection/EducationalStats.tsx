import { Box, Flex } from "@mantine/core";
import { StatBlock } from "./StatBlock";

export function EducationStats() {
  return (
    <Box>
      <Box
        sx={{
          color: "white",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Flex
          justify="space-between"
          align="center"
          w={{ base: "100%", md: "80%", lg: "45%" }}
        >
          <StatBlock number="100%" label1="Customer" label2="Satisfaction" />
          <StatBlock number="350+" label1="Photography" label2="Sessions" />
        </Flex>
      </Box>
    </Box>
  );
}
