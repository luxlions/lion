import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { LuBookOpen } from '@qwikest/icons/lucide';
import { Carousel } from '@qwik-ui/headless';
import { Card } from '../ui/Card';
import Heading from './Heading';

export default component$(() => {
  useStyles$(`
    .story-carousel-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #d1d5db;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .story-carousel-dot.active {
      background-color: #70C7BA;
      transform: scale(1.3);
    }
  `);

  const selectedIndex = useSignal(0);

  const storyParagraphs = [
    "Lux Lions were born in the Crypto Kingdom, where power is earned through precision, discipline, and unwavering focus. Forged on Kaspa, they embody resilience and refinement, rising as symbols of leadership in a digital realm shaped by constant evolution.",
    "Guided by the light of Lux, each Lion represents mastery expressed through gold, rose gold, and VVS diamond lineage. These elements reflect clarity, rarity, and purpose, forming a foundation that strengthens the pride and elevates the standards of the entire Kingdom.",
    "To hold a Lux Lion is to embrace intention and legacy. The collection stands as a declaration of ambition, built for those who pursue excellence without compromise. As the Kingdom expands, these Lions remain the enduring core of its identity."
  ];

  return (
    <div class="bg-[#49EACB] texture">
      <div class="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <Card.Root class="p-4 md:p-12 bg-[#B6B6B6]/40 my">
          <div class="text-white">
            <Heading
              title="Story"
              icon={
                <LuBookOpen class=" w-8 h-8 text-white" />
              }
            />
          </div>

          {/* Desktop Version - All paragraphs visible in a row */}
          <div class="hidden md:flex md:gap-6 text-white">
            {storyParagraphs.map((paragraph, index) => (
              <p key={index} class="flex-1 text-lg md:text-2xl leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Mobile Version - Carousel */}
          <div class="md:hidden">
            <Carousel.Root
              bind:selectedIndex={selectedIndex}
              gap={20}
              sensitivity={{ mouse: 2.5, touch: 2.5 }}
            >
              <Carousel.Scroller class="w-full">
                {storyParagraphs.map((paragraph, index) => (
                  <Carousel.Slide key={index} class="w-full">
                    <div class="relative">
                      <p class="text-xl leading-relaxed text-white px-2">
                        {paragraph}
                      </p>
                    </div>
                  </Carousel.Slide>
                ))}
              </Carousel.Scroller>

              {/* Carousel Counter */}
              <div class="flex justify-center items-center">
                <span class="text-white/80 text-md font-medium">
                  {selectedIndex.value + 1}/3
                </span>
              </div>
            </Carousel.Root>
          </div>
        </Card.Root>
      </div>
            <div class="h-2 md:h-3 bg-[#70C7BA]/50"></div>

    </div>
  );
});
