/* eslint-disable react/jsx-no-comment-textnodes */
import { Flex, Text, Title } from "@mantine/core";

type SectionNameProps = {
  sectionName: string;
  sectionNumber: string;
  sectionTitle: string;
};
const SectionName = ({
  sectionName,
  sectionNumber,
  sectionTitle,
}: SectionNameProps) => {
  return (
    <Flex justify="center" direction="column" align="center" pb={50}>
      <Text size="xl" tt="uppercase" c="#e8e8e8" fw={700}>
        <span style={{ color: "orange", fontSize: "16px" }}>
          0{sectionNumber}//{" "}
        </span>
        {sectionName}
      </Text>
      <Title order={1} size="50px" mb={15} c="#e8e8e8">
        {sectionTitle}
      </Title>
    </Flex>
  );
};

export default SectionName;
