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
    <Container my={20}>
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
