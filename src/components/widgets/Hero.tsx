import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const currentCharacter = useSignal(1);

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      currentCharacter.value = (currentCharacter.value % 10) + 1;
    }, 300); // Change character every 300ms for quick movement

    return () => clearInterval(interval);
  });

  return (
    <section class="bg-[#70C7BA]  flex flex-col">
      {/* Banner Section */}
      <img
        src="/images/banner.png"
        alt="Banner"
        class=" md:h-60 h-30 "
      />

      {/* Character Carousel */}
      <div class="flex-1 flex flex-col items-center  px-2 md:py-12">
        {/* <div class="md:mb-12 relative w-full h-80 flex items-center justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <img
              key={num}
              src={`/images/c${num}.png`}
              alt={`Character ${num}`}
              class={`absolute w-full h-full object-contain transition-opacity duration-150 ${currentCharacter.value === num ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
        </div> */}
        <p class="pt-6 px-2 text-white text-3xl text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit et Illo voluptatibus accusamus. </p>
        {/* Action Buttons */}
        <div class="flex gap-6 flex-wrap justify-center py-6 pb-10">
         <a
                  href="#"
                  class="px-2 hover:bg-yellow-300 bg-[#e4b138] sm:w-auto bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 group relative inline-flex items-center justify-center px-3 pl-5 py-2.5 text-2xl font-semibold text-white  shadow-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:opacity-0 before:transform before:-translate-x-full group-hover:before:opacity-100 group-hover:before:translate-x-0 before:transition-all before:duration-500 hover:scale-102 hover:bg-gradient-to-r hover:from-primary-400 hover:via-primary-400 hover:to-primary-300"
                  role="button"
                  aria-label="Book a workshop"
                >
                  <span class="relative z-10 flex items-center gap-1">
                    MINT
                    <img
                      src="/images/sticker.webp"
                      alt="Jar Icon"
                      class="w-6 h-6 -ml-1 transform transition-transform duration-300 group-hover:-rotate-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                  <div class="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 group-hover:opacity-90 transform group-hover:translate-x-full transition-all duration-500"></div>
                </a>
          <button class="px-8 py-3 bg-[#b26122] text-gray-900 font-bold text-xl rounded-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
            Get $LION
          </button>
        </div>
      </div>
    </section>
  );
});