import { Card, Text, Flex, Title } from "@mantine/core";

import classes from "./CoursesSection.module.css";

import { CourseCardProps } from "@/types";

const CourseCard = ({
  courseNumber,
  courseName,
  courseIcon,
}: CourseCardProps) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="50px"
      bg="#1e1e1e"
      mt={14}
      h={270}
      ml={20}
      p={30}
      className={classes.hoverEffect}
    >
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        gap="xs"
        p="md"
      >
        <Card.Section p={20}>{courseIcon}</Card.Section>

        <Card.Section>
          <Text fw={400} c="gray">
            {courseNumber}
          </Text>
          <Title order={2} fw={700} c="white" ta="start">
            {courseName}
          </Title>
        </Card.Section>
      </Flex>
    </Card>
  );
};

export default CourseCard;
