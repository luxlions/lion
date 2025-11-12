import { component$, useStyles$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import styles from './carousel.css?inline';
import { Card } from '../ui/Card';
import Heading from './Heading';
import { Wrapper } from './Wrapper';
import RarityCheck from './RarityCheck';

export default component$(() => {
  useStyles$(styles);

  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];
  const isPlaying = useSignal<boolean>(false);
  const slidesPerViewSig = useSignal(1.3); // Default to 1.3 for mobile

  // Update slidesPerView based on screen size
  useVisibleTask$(({ cleanup }) => {
    isPlaying.value = true;

    const updateSlidesPerView = () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        slidesPerViewSig.value = 2; // Larger screens
      } else {
        slidesPerViewSig.value = 1; // Mobile
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    cleanup(() => {
      window.removeEventListener('resize', updateSlidesPerView);
    });
  });

  return (
      <div class="bg-[#49EACB
]">
            <Card.Root class="p-0 md:p-8  max-w-6xl mx-auto">


    <RarityCheck/>
    </Card.Root>
    </div>
  );
});