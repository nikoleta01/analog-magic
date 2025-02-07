import { IconPlus } from "@tabler/icons-react";
import { Accordion, Container, ThemeIcon } from "@mantine/core";
import classes from "./FAQSection.module.css";
import FAQItem from "./FAQItem";
import { faqQuestions } from "../../../data/faqQuestions";

const FAQQuestions = () => {
  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Accordion
          chevronPosition="right"
          chevronSize={26}
          variant="separated"
          defaultValue="film-instead-of-digital"
          disableChevronRotation
          c="red"
          styles={{
            label: { color: "var(--mantine-color-white)" },
            item: { border: 0 },
          }}
          chevron={
            <ThemeIcon radius="xl" className={classes.gradient} size={26}>
              <IconPlus size={18} stroke={1.5} />
            </ThemeIcon>
          }
        >
          {faqQuestions.map((question) => {
            return <FAQItem key={question.question} {...question} />;
          })}
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQQuestions;
