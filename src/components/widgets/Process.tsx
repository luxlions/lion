import { component$, useSignal, useComputed$, useStyles$, useVisibleTask$, } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import { cn } from '@qwik-ui/utils';
import { Wrapper } from './Wrapper';
import Heading from './Heading';

import styles from './carousel.css?inline';
import { Card } from '../ui/Card';

export default component$(() => {
  useStyles$(styles);

  // Add custom animation styles
  useStyles$(`
    /* Progress dot animations */
    .progress-separator {
      position: relative;
      overflow: hidden;
      background: #e5e7eb !important;
      transition: all 0.3s ease;
    }

    .progress-separator::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 0%;
      background: #70C7BA;
      transition: height 3s linear;
      border-radius: inherit;
      z-index: 1;
    }

    .progress-separator.active::after {
      height: 100%;
      animation: fillProgress 3s linear forwards;
    }

    .progress-separator.user-controlled {
      background: #70C7BA !important;
    }

    .progress-separator.user-controlled::after {
      display: none;
    }

    .progress-separator.completed {
      background: #70C7BA !important;
    }

    .progress-separator.completed::after {
      display: none;
    }

    @keyframes fillProgress {
      from {
        height: 0%;
      }
      to {
        height: 100%;
      }
    }
  `);

  // Signal to control autoplay state
  const isPlaying = useSignal<boolean>(false);
  const hasCompletedOneCycle = useSignal<boolean>(false);
  const currentStageStartTime = useSignal<number>(0);
  const userHasInteracted = useSignal<boolean>(false);

  // Start autoplay when component becomes visible
  useVisibleTask$(() => {
    isPlaying.value = true;
    currentStageStartTime.value = Date.now();
  });

  // Watch for stage changes to reset the animation timing
  useVisibleTask$(({ track }) => {
    track(() => selectedIndex.value);
    currentStageStartTime.value = Date.now();

    // If we've reached the end (last slide) and we're playing (not user-controlled)
    if (selectedIndex.value === roadmapPhases.length - 1 && isPlaying.value && !hasCompletedOneCycle.value && !userHasInteracted.value) {
      // Set a timeout to go to first slide one more time, then stop
      setTimeout(() => {
        selectedIndex.value = 0;
        hasCompletedOneCycle.value = true;
        isPlaying.value = false; // Stop autoplay
      }, 3000); // Wait for the interval time before cycling back
    }
  });

  // 6 phases of the Lux Lions roadmap
  const roadmapPhases = [
    {
      headline: 'Phase 1:',
      title: 'Deploy $LION on Kasplex',
      icon: '🦁',
      description: '$LION officially launched on Kasplex, establishing the foundation of the Lux Lions ecosystem.',
      milestones: [],
    },
    {
      headline: 'Phase 2:',
      title: ' Deploy $LUXLIONS on KaspaCom',
      icon: '🎨',
      description: 'The Lux Lions NFT collection goes live on KaspaCom, opening minting to the public.',
      milestones: [],
    },
    {
      headline: 'Phase 3:',
      title: 'Buy & Burn 35% of $LION Supply',
      icon: '🔥',
      description: '10% of total mint funds will be used to buy and burn 35% of the entire $LION token supply.',
      milestones: [],
    },
    {
      headline: 'Phase 4:',
      title: 'Website Deployment',
      icon: '🌐',
      description: 'A dedicated Lux Lions website will go live, centralizing project information and future utilities.',
      milestones: [],
    },
    {
      headline: 'Phase 5:',
      title: 'Exclusive Airdrop Collection',
      icon: '🎁',
      description: 'A special holders-only airdrop collection will be released.',
      milestones: [],
    },
    {
      headline: 'Phase 6:',
      title: 'Coming Soon',
      icon: '🚀',
      description: 'Further expansion and ecosystem developments will be revealed.',
      milestones: [],
    },
  ];
  // Bind to carousel's selectedIndex for reactive updates
  const selectedIndex = useSignal(0);
  const previousIndex = useSignal(0);

  // Compute progress index to determine which separators are active
  const progressIndex = useComputed$(() => selectedIndex.value);

  // Track previous index for animations
  useVisibleTask$(({ track }) => {
    track(() => selectedIndex.value);
    previousIndex.value = selectedIndex.value;
  });

  // Compute background opacity based on selected index
  const bgOpacity = useComputed$(() => {
    return (selectedIndex.value + 1) * 10;
  });

  return (
    <>
      <Wrapper>
        <Card.Root class="p-3 md:p-16 pt-8 max-w-7xl border-2 bg-[#49EACB]/70 mx-auto">
          <Heading
            title="Roadmap"
            // subtitle="Our process from start to finish."
            icon={
              <svg fill="#70C7BA " class="-mt-4 " height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xml:space="preserve">
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
          <Carousel.Root
            class="carousel-root"
            gap={30}
            bind:selectedIndex={selectedIndex}
            autoPlayIntervalMs={3000}
            bind:autoplay={isPlaying}
          >
            <div class="flex flex-row gap-5 w-full">
              <div
                class="w-1/3 hidden md:block aspect-square bg-lux-green"
                style={`opacity: ${bgOpacity.value}%`}
              />
              <div class="flex flex-row items-start w-full md:flex-1">
                {/* Vertical progress line */}
                <div class="flex flex-col items-center justify-start w-2 mr-3">
                  {roadmapPhases.map((_, index) => (
                    <>
                      <div
                        class="w-1 h-0 bg-gray-200"
                        style={{ marginTop: index === 0 ? '1rem' : '0.5rem' }}
                        key={`spacer-${index}`}
                      />
                      {index < roadmapPhases.length && (
                        <div
                          class={`progress-separator w-1 h-4 ${userHasInteracted.value
                              ? progressIndex.value >= index ? 'user-controlled' : ''
                              : progressIndex.value > index
                                ? 'completed'
                                : progressIndex.value === index && isPlaying.value
                                  ? 'active'
                                  : ''
                            }`}
                          style={{ transform: 'rotate(0deg)' }}
                          key={`separator-${index}`}
                        />
                      )}
                    </>
                  ))}
                </div>

                {/* Stepper with alternating steps and slides */}
                <Carousel.Stepper class="carousel-stepper w-full" style={{ flexDirection: 'column' }}>
                  {roadmapPhases.map((phase, index) => (
                    <>
                      <Carousel.Step
                        class="flex items-start justify-start cursor-pointer"
                        key={`step-${index}`}
                        onClick$={() => {
                          console.log(`Clicked index: ${index}`);
                          userHasInteracted.value = true;
                          isPlaying.value = false;
                          selectedIndex.value = index;
                        }}
                      >
                        <span
                          class={cn(
                            'text-[0.9375rem] md:text-3xl font-medium px-1.5 md:px-3 py-1 whitespace-nowrap',
                            selectedIndex.value === index ? 'bg-lux-green text-white' : 'bg-transparent'
                          )}
                        >
                          <span class="bg-white/40 py-1 pl-1.5 md:pl-2 -ml-1.5 md:-ml-2 mr-1 md:mr-1.5"> {phase.headline} </span>
                          {phase.title}
                          <span class="ml-0.5 md:ml-1">{phase.icon}</span>
                        </span>
                      </Carousel.Step>
                      <Carousel.Slide
                        class="p-2 md:p-3 !mt-2 bg-lux-green/10 shadow-sm transition-opacity duration-300"
                        key={`slide-${index}`}
                      >
                        <p class="mb-0 text-md md:text-2xl leading-snug">{phase.description}</p>
                        {phase.milestones && phase.milestones.length > 0 && (
                          <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                            {phase.milestones.map((milestone, i) => (
                              <li key={`milestone-${i}`} class="text-xl md:text-2xl leading-relaxed">
                                {milestone}
                              </li>
                            ))}
                          </ul>
                        )}
                      </Carousel.Slide>
                    </>
                  ))}
                </Carousel.Stepper>
              </div>
            </div>
          </Carousel.Root>
        </Card.Root>
      </Wrapper>
    </>
  );
});