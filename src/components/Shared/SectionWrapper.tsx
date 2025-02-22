import { Container } from "@mantine/core";
import SectionName from "./SectionName";

type SectionWrapperProps = {
  sectionName: string;
  sectionNumber: string;
  children: React.ReactNode;
  sectionTitle: string;
};
const SectionWrapper = ({
  sectionName,
  sectionNumber,
  sectionTitle,
  children,
}: SectionWrapperProps) => {
  return (
    <Container fluid my={20} mt={60} mx="auto" maw={1400}>
      <SectionName
        sectionName={sectionName}
        sectionNumber={sectionNumber}
        sectionTitle={sectionTitle}
      />
      {children}
    </Container>
  );
};

export default SectionWrapper;
