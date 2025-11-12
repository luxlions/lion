import { component$, useStyles$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import styles from './carousel.css?inline';
import { Card } from '../ui/Card';


export default component$(() => {
  useStyles$(styles);

  const images = Array.from({ length: 7 }, (_, i) => `c${i + 1}.png`);
  const isPlaying = useSignal<boolean>(false);
  const slidesPerViewSig = useSignal(1.3); // Default to 1.3 for mobile

  // Update slidesPerView based on screen size
  useVisibleTask$(({ cleanup }) => {
    isPlaying.value = true;

    const updateSlidesPerView = () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        slidesPerViewSig.value = 2; // Larger screens
      } else {
        slidesPerViewSig.value = 2; // Mobile
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    cleanup(() => {
      window.removeEventListener('resize', updateSlidesPerView);
    });
  });

  return (
    <>
      <Card.Root class="p-1.5 md:p-8 bg-[#29b9b0] max-w-6xl mx-auto">
        {/* <Heading /> */}
      <Carousel.Root
  class="carousel-root"
  slidesPerView={slidesPerViewSig.value}
  gap={6}
  autoPlayIntervalMs={2500}
  bind:autoplay={isPlaying}
  draggable={true}
  align="start"
>
          <Carousel.Scroller class="carousel-scroller">
            {images.map((image) => (
              <Carousel.Slide key={image} class="">
                <Card.Root>
                  <img src={`/images/${image}`} class="w-full object-cover" alt={`Slide ${image}`} />
                </Card.Root>
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
          {/* <div class="flex justify-center items-center gap-4">
            <Carousel.Pagination class="carousel-pagination">
              {images.map((image, index) => (
                <Carousel.Bullet class="carousel-pagination-bullet" key={image}>
                  {index + 1}
                </Carousel.Bullet>
              ))}
            </Carousel.Pagination>
          </div> */}
        </Carousel.Root>
      </Card.Root>
      <div class="h-6 bg-[#70C7BA]"></div>
      </>
  );
});