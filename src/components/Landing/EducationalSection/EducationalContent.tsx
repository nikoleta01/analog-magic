import { Box, Text } from "@mantine/core";

import classes from "./EducationalSection.module.css";

export function EducationContent() {
  return (
    <Box
      w={{ base: "100%", md: "45%" }}
      p="md"
      fw={700}
      size="30px"
      mt={20}
      className={classes.largePadding}
    >
      <Text fw={500} size="30px" pt={20}>
        Lorem ipsum dolor sit amet consectetur adipisicin.
      </Text>
      <Text mt={20}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quod
        repellat provident, quibusdam ab ullam maiores. Quia sunt tempora
        dolores quidem, inventore amet ducimus vero ea quam mollitia officiis
        accusamus illum commodi magni nostrum debitis, praesentium culpa natus
        placeat cumque? Error repellat ea tenetur possimus nihil animi iusto
        quaerat recusandae!
      </Text>
    </Box>
  );
}
