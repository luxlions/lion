import { component$ } from '@builder.io/qwik';
import { Card } from '../ui/Card';
import FAQAccordion from './FAQAccordion';
import Heading2 from './Heading2';
import Heading from './Heading';

export default component$(() => {
  // FAQ data for the category
  const faqs = [
  {
    question: "What is Lux Lions?",
    answer: "Lux Lions is an exclusive NFT collection on the Kaspa blockchain, featuring 1,000 unique digital lion artworks that blend luxury aesthetics with blockchain innovation. Each NFT represents a majestic lion in various regal poses and environments, designed to appeal to collectors who value artistry, scarcity, and community-driven projects."
  },
  {
    question: "How many NFTs are in the Lux Lions collection?",
    answer: "The Lux Lions collection consists of exactly 1,000 unique NFTs. This limited supply ensures rarity and value appreciation for holders, with each piece hand-crafted by digital artists to capture the fierce elegance of lions in a futuristic, opulent style."
  },
  {
    question: "What is the Lion token and its total supply?",
    answer: "The Lion token (LION) is the native utility token for the Lux Lions ecosystem, with a fixed total supply of 10 million tokens. It powers staking rewards, governance voting, marketplace fees, and exclusive access to community events, fostering long-term engagement among holders."
  },
  {
    question: "What is the 10% buy and burn mechanism?",
    answer: "Every Lion token purchase triggers a 10% buy and burn protocol, where 10% of the transaction value is used to repurchase and permanently burn LION tokens from the market. This deflationary mechanism reduces circulating supply over time, potentially increasing token scarcity and value for existing holders."
  },
  {
    question: "How can I mint or acquire Lux Lions NFTs?",
    answer: "Minting for Lux Lions opens in phases on the Kaspa network. Early access is available via whitelist for community members, followed by a public sale. Use your Kaspa wallet to connect to our official minting site, where each NFT costs a set amount in KAS. Secondary trading will be live on Kaspa-compatible marketplaces post-mint."
  },
  {
    question: "What utilities and benefits do Lux Lions holders receive?",
    answer: "Lux Lions holders gain access to exclusive perks, including airdrops of Lion tokens, VIP community governance, real-world merchandise drops, and collaborations with luxury brands. Staking your NFTs or tokens unlocks additional yields, while the collection supports charitable initiatives for wildlife conservation, aligning art with impact."
  }
];



  return (
    <>
      <div class="max-w-5xl mx-auto">
        <Card.Root class="p-3 md:p-5">
             <Heading
                      title="FAQ"
                      icon={
                        <svg fill="#70C7BA" class="-mt-4" height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <g>
                                <path d="M0,57.741v374.695l150.388,21.822V79.564L0,57.741z M120.7,384.667l-91.011-16.844v-31l91.011,16.945V384.667z M120.7,332.26l-91.011-16.836V284.48L120.7,301.37V332.26z M120.7,279.918l-91.011-16.891v-30.954l91.011,16.899V279.918z M120.7,227.511l-91.011-16.883v-30.962l91.011,16.908V227.511z M120.7,175.105l-91.011-16.874v-30.97l91.011,16.916V175.105z"></path>
                              </g>
                            </g>
                            <g>
                              <g>
                                <path d="M361.611,57.741v374.695l150.388,21.822V79.564L361.611,57.741z M482.311,384.667l-91.011-16.844v-31l91.011,16.945 V384.667z M482.311,332.26l-91.011-16.836V284.48l91.011,16.891V332.26z M482.311,279.918l-91.011-16.891v-30.954l91.011,16.899 V279.918z M482.311,227.511l-91.011-16.883v-30.962l91.011,16.908V227.511z M482.311,175.105l-91.011-16.874v-30.97l91.011,16.916 V175.105z"></path>
                              </g>
                            </g>
                            <g>
                              <g>
                                <path d="M180.806,79.564v374.695l150.388-21.822V57.741L180.806,79.564z M301.506,367.822l-91.011,16.844V248.973l91.011-16.899 V367.822z M301.506,210.628l-91.011,16.883v-30.935l91.011-16.908V210.628z M301.506,158.23l-91.011,16.874v-30.928l91.011-16.916 V158.23z"></path>
                              </g>
                            </g>
                            <g>
                              <g>
                                <polygon points="240.911,274.273 240.911,348.105 271.089,342.486 271.089,268.672 "></polygon>
                              </g>
                            </g>
                          </g>
                        </svg>
                      }
                    />
          <Card.Content class="space-y-2 p-0">
            <FAQAccordion faqs={faqs} />
          </Card.Content>
        </Card.Root>
      </div>
    </>
  );
});