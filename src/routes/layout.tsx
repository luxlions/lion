import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import { inject } from "@vercel/analytics";


//



export default component$(() => {
   useVisibleTask$(() => {
    inject(); // Runs only on client sides
  });
  return (
    <>
      <main class="mt-0 px-0 md:px-0">
        <Slot />
      </main>
     
      
    </>
  );
});
