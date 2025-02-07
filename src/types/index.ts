export type FAQItemProps = {
  question: string;
  answer: string;
  value: string;
  icon: React.ReactNode;
};
export type TestimonialSlideProps = {
  avatar: string;
  name: string;
  review: string;
};

export type SectionNameProps = {
  sectionName: string;
  sectionNumber: string;
  sectionTitle: string;
};

export type SectionWrapperProps = {
  sectionName: string;
  sectionNumber: string;
  children: React.ReactNode;
  sectionTitle: string;
};

export type CourseCardProps = {
  courseNumber: string;
  courseName: string;
  courseIcon: JSX.Element;
};
