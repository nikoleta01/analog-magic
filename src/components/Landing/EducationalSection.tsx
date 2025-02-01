import { Grid } from "@mantine/core";
import { SectionWrapper } from "../Shared";

const EducationalSection = () => {
  return (
    <SectionWrapper
      sectionName="Education"
      sectionNumber="1"
      sectionTitle="Learn the basics"
    >
      <Grid c="white" gutter="lg">
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>1</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>2</Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>3</Grid.Col>{" "}
      </Grid>
    </SectionWrapper>
  );
};

export default EducationalSection;
