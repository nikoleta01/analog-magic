import { Accordion } from "@mantine/core";

import classes from "./FAQSection.module.css";

import { FAQItemProps } from "@/types";

const FAQItems = ({ question, answer, value, icon }: FAQItemProps) => {
  return (
    <Accordion.Item className={classes.item} value={value}>
      <Accordion.Control icon={icon} fz={19} fw={500}>
        {question}
      </Accordion.Control>
      <Accordion.Panel fz={14}>{answer}</Accordion.Panel>
    </Accordion.Item>
  );
};

export default FAQItems;
