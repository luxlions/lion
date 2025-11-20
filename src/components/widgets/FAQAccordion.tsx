import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';
import { Card } from '../ui/Card';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default component$<FAQAccordionProps>(({ faqs }) => {
  return (
    <Card.Root class="p-4 pt-2">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Accordion.Root class="w-full">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
            <Accordion.Item key={index}>
              <Accordion.Trigger
                header={index === 0 ? "h2" : undefined}
                class="text-left text-white"
              >
                {faq.question}
              </Accordion.Trigger>
              <Accordion.Content class="text-white">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <Accordion.Root class="w-full">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
            <Accordion.Item key={index + Math.ceil(faqs.length / 2)}>
              <Accordion.Trigger
                header={index === 0 ? "h2" : undefined}
                class="text-left text-white"
              >
                {faq.question}
              </Accordion.Trigger>
              <Accordion.Content class="text-white">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Card.Root> 
  );
});