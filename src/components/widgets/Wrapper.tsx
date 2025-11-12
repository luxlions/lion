import { component$, Slot } from '@builder.io/qwik';

export const Wrapper = component$(() => {
  return (
    <div class="py-0 md:py-12 px-0">
      <Slot />
    </div>
  );
});