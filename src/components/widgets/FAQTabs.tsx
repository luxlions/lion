import { component$ } from '@builder.io/qwik';
import { Card } from '../ui/Card';
import FAQAccordion from './FAQAccordion';
import Heading from './Heading';

export default component$(() => {
  // FAQ data for the category
  const faqs = [
  {
    question: "What are Lux Lions?",
    answer: "Lux Lions are an exclusive NFT collection on the Kaspa blockchain, featuring 1,000 unique digital lion artworks that blend luxury aesthetics with blockchain innovation. Each NFT represents a majestic lion in various regal poses and environments, designed to appeal to collectors who value artistry, scarcity, and community-driven projects."
  },
  {
    question: "How many NFTs are in the Lions collection?",
    answer: "The Lux Lions collection consists of exactly 1,000 unique NFTs. This limited supply ensures rarity and value appreciation for holders, with each piece hand-crafted by digital artists to capture the fierce elegance of lions in a futuristic, opulent style."
  },
  {
    question: "What is the $LION token and its total supply?",
    answer: "The Lion token ($LION) is the native utility token for the Lux Lions ecosystem, with a fixed total supply of 10 million tokens. It powers staking rewards, governance voting, marketplace fees, and exclusive access to community events, fostering long-term engagement among holders."
  },
  {
    question: "What is the 10% buy and burn mechanism?",
    answer: "Every Lion token purchase triggers a 10% buy and burn protocol, where 10% of the transaction value is used to repurchase and permanently burn LION tokens from the market. This deflationary mechanism reduces circulating supply over time, potentially increasing token scarcity and value for existing holders."
  },
 
  {
    question: "What utilities and benefits do holders receive?",
    answer: "Lux Lions holders gain access to exclusive perks, including airdrops of Lion tokens, VIP community governance, real-world merchandise drops, and collaborations with luxury brands. Staking your NFTs or tokens unlocks additional yields, while the collection supports charitable initiatives for wildlife conservation, aligning art with impact."
  }
];



  return (
    <>
      <div class="max-w-5xl mx-auto">
        <Card.Root class="p-3 pt-6 md:p-5 bg-[#B6B6B6]/40">
             <Heading
                      title="FAQ"
                      icon={
                         <p class="text-4xl ">?</p>
                      }
                    />
          <Card.Content class="space-y-2 p-1 pb-4">
            <FAQAccordion faqs={faqs} />
          </Card.Content>
        </Card.Root>
      </div>
    </>
  );
});