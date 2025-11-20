import { component$ } from '@builder.io/qwik';
import { Card } from '../ui/Card';
import FAQAccordion from './FAQAccordion';
import Heading from './Heading';

export default component$(() => {
  const faqs = [
    {
      question: "What are Lux Lions?",
      answer: "Lux Lions is a pixel-art NFT collection built on Kaspa, representing discipline, refinement, and leadership within the Crypto Kingdom. Each Lion reflects the project’s core themes of power, precision, and innovation."
    },
    {
      question: "Are Lux Lions still minting?",
      answer: "No. Lux Lions are now 100% minted, but there are plenty of great deals available on the KaspaCom L1 Marketplace."
    },
    {
      question: "What is the total supply?",
      answer: "The total supply of the Lux Lions collection is 1,000 NFTs."
    },
    {
      question: "Is there a token connected to the project?",
      answer: "Yes. The Lux Lions ecosystem is paired with the $LION token, which was initially deployed on Kasplex."
    },
    {
      question: "How did the $LION buy and burn work?",
      answer: "10% of total mint funds from Lux Lions were used to buy and burn 35% of the entire $LION supply, and this buy and burn process is now complete."
    },
    {
      question: "Is the website live?",
      answer: "Yes. The official Lux Lions website is live as of November 18, 2025."
    },
    {
      question: "Are there rarity tiers?",
      answer: "Yes. Traits and visual categories create natural rarity distinctions within the collection. Full rarity data is revealed after mint."
    },
    {
      question: "Where can I follow updates?",
      answer: "Official Lux Lions updates are shared on X and through the project’s Telegram channels."
    }
  ];

  return (
    <>

      <div class="bg-[#49EACB] lisbon">
        <div class="max-w-6xl mx-auto px-4 py-8 md:py-12">
          <Card.Root class="p-1 md:p-12 bg-[#B6B6B6]/40 my">
           <div class="pl-4 pt-4 md:pt-0">
            <Heading
              title="FAQ"
              icon={
                <p class="text-4xl text-white">?</p>
              }
            />
            </div>
            <Card.Content class="space-y-2 p-1 pb-1">
              <FAQAccordion faqs={faqs} />
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </>
  );
});