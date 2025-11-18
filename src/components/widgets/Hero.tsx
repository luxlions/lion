import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import Reviews from "~/components/widgets/Reviews";

export default component$(() => {
  const currentCharacter = useSignal(1);

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      currentCharacter.value = (currentCharacter.value % 10) + 1;
    }, 300); // Change character every 300ms for quick movement

    return () => clearInterval(interval);
  });

  return (
    <div class="bg-[#29b9b0]">
    <section class="bg-[#70C7BA]  flex flex-col">
      <div class="bg-[#29b9b0]">
      {/* Banner Section */}
      <img
        src="/images/banner.png"
        alt="Banner"
        class=" md:h-55 h-30 md:mx-20  -mt-2 md:-mt-6 "
      />
      </div>
      <p class="pt-8 px-1 md:px-24 text-white text-4xl text-center"> A pixel art NFT collection of the Crypto Kingdom, ruled by royalty. Embodying power, precision, and innovation.
      </p>
          <div class="flex gap-6 px-2 flex-wrap justify-center py-8 pb-10">
          <a
            href="https://kaspa.com/nft/collections/LUXLIONS"
            class=" hover:bg-yellow-300 bg-[#e4b138] sm:w-auto bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 group relative inline-flex items-center justify-center px-3 pl-5 py-2.5 text-2xl font-semibold  shadow-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:opacity-0 before:transform before:-translate-x-full group-hover:before:opacity-100 group-hover:before:translate-x-0 before:transition-all before:duration-500 hover:scale-102 hover:bg-gradient-to-r hover:from-primary-400 hover:via-primary-400 hover:to-primary-300"
            role="button"
            aria-label="Mint NFT"
          >
            <span class="relative z-10 text-4xl flex items-center gap-1">
              MINT
              <img
                src="/images/logo.png"
                alt="Jar Icon"
                class="w-8 h-8  transform transition-transform duration-300 group-hover:scale-110 group-active:scale-100"
              />
            </span>
            <div class="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 group-hover:opacity-90 transform group-hover:translate-x-full transition-all duration-500"></div>
          </a>
          <a
            href="https://lfg.kaspa.com/app/token/0x2e3bcFa281A70c09b83DeB5d6553e2130756905d"
            class=" hover:bg-yellow-300 bg-[#b26122] sm:w-auto bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 group relative inline-flex items-center justify-center px-3 pl-5 py-2.5 text-2xl font-semibold text-white shadow-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:opacity-0 before:transform before:-translate-x-full group-hover:before:opacity-100 group-hover:before:translate-x-0 before:transition-all before:duration-500 hover:scale-102 hover:bg-gradient-to-r hover:from-primary-400 hover:via-primary-400 hover:to-primary-300"
            role="button"
            aria-label="Get $LION token"
          >
            <span class="relative z-10 flex text-4xl items-center gap-1">
              Get $LION
            </span>
            <div class="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 group-hover:opacity-90 transform group-hover:translate-x-full transition-all duration-500"></div>
          </a>

             <a
            href="https://lfg.kaspa.com/app/token/0x2e3bcFa281A70c09b83DeB5d6553e2130756905d"
            class=" hover:bg-yellow-300 hidden md:block bg-[#29b9b0] sm:w-auto bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 group relative inline-flex items-center justify-center px-3 pl-5 py-2.5 text-2xl font-semibold text-white shadow-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:opacity-0 before:transform before:-translate-x-full group-hover:before:opacity-100 group-hover:before:translate-x-0 before:transition-all before:duration-500 hover:scale-102 hover:bg-gradient-to-r hover:from-primary-400 hover:via-primary-400 hover:to-primary-300"
            role="button"
            aria-label="Get $LION token"
          >
            <span class="relative z-10 flex text-4xl items-center gap-1">
              Join Community
            </span>
            <div class="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 group-hover:opacity-90 transform group-hover:translate-x-full transition-all duration-500"></div>
          </a>
        </div>
      {/* Carousel positioned between banner and content */}
      <Reviews />

    
    </section>
    </div>
  );
});