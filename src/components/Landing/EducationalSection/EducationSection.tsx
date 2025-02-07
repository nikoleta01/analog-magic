import { Grid, Flex, Box, Center, Image } from "@mantine/core";

import classes from "./EducationalSection.module.css";

import { EducationImage } from "./EducationalImage";
import { EducationContent } from "./EducationalContent";
import { EducationStats } from "./EducationalStats";
import SectionWrapper from "../../Shared/SectionWrapper";
export default function EducationSection() {
  return (
    <SectionWrapper
      sectionName="Education"
      sectionNumber="1"
      sectionTitle="Learn the basics"
    >
      <Grid justify="center" c="white" gutter="60px" mx={40}>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Flex direction="column" h="100%">
            <Flex
              justify="space-between"
              wrap="wrap"
              direction={{ base: "column", md: "row" }}
            >
              <EducationImage
                imageSrc="/images/hero/photo7.jpg"
                hoverImageSrc="/images/hero/photo8.jpg"
              />
              <EducationContent />
            </Flex>

            <Grid.Col span={{ base: 12 }} mah={200} pl={0}>
              <EducationStats />
            </Grid.Col>
          </Flex>
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, md: 4 }}
          h="100%"
          className={classes.hideOnMobile}
        >
          <Box p="md" h="100%">
            <Center>
              <Image src="/images/hero/photo9.jpg" h={600} />
            </Center>
          </Box>
        </Grid.Col>
      </Grid>
    </SectionWrapper>
  );
}
