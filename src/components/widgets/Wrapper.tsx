import { component$, Slot } from '@builder.io/qwik';
import { cn } from '@qwik-ui/utils';

export const Wrapper = component$<{ class?: string }>((props) => {
  return (
    <div class={cn("py-0 px-0 ", props.class)}>
      <Slot />
    </div>
  );
});