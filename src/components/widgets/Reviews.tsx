import { component$, useStyles$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import styles from './carousel.css?inline';
import { Card } from '../ui/Card';


export default component$(() => {
  useStyles$(styles);

  const images = Array.from({ length: 7 }, (_, i) => `c${i + 1}.png`);
  const isPlaying = useSignal<boolean>(false);
  // Initialize based on screen size to prevent flash - use 4 for desktop (768px+), 2 for mobile
  const slidesPerViewSig = useSignal(5);
  const gapSig = useSignal(35);

  // Update slidesPerView and gap based on screen size
  useVisibleTask$(({ cleanup }) => {
    isPlaying.value = true;

    const updateCarouselSettings = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        slidesPerViewSig.value = 5; // Desktop - 5 slides
        gapSig.value = 35; // Desktop gap
      } else {
        slidesPerViewSig.value = 2; // Mobile - 2 slides
        gapSig.value = 12; // Mobile gap
      }
    };

    updateCarouselSettings();
    window.addEventListener('resize', updateCarouselSettings);
    cleanup(() => {
      window.removeEventListener('resize', updateCarouselSettings);
    });
  });

  return (
    <>
      <Card.Root class="p-3 md:py-8 md:px-16 bg-[#29b9b0] ">
        {/* <Heading /> */}
      <Carousel.Root
  class="carousel-root"
  slidesPerView={slidesPerViewSig.value}
  gap={gapSig.value}
  autoPlayIntervalMs={2500}
  bind:autoplay={isPlaying}
  draggable={true}
  align="start"
>
          <Carousel.Scroller class="carousel-scroller">
            {images.map((image) => (
              <Carousel.Slide key={image} class="">
                <Card.Root class="md:h-48 overflow-hidden ">
                  <img src={`/images/${image}`} class="w-full md:h-48 object-cover" alt={`Slide ${image}`} />
                </Card.Root>
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
        </Carousel.Root>
      </Card.Root>
      <div class="h-2 md:h-3 bg-[#70C7BA]"></div>
      </>
  );
});