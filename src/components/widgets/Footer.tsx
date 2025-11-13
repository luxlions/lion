import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuStar, LuUsers } from "@qwikest/icons/lucide";

// Import the CustomTwitterIcon component
export const CustomTwitterIcon = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      class="w-6 h-6"
      fill="currentColor"
    >
      <path
        d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"
      />
    </svg>
  );
});

export default component$(() => {
  const links = [
    {
      title: "About",
      items: [
        { title: "About", href: "#about" },
        { title: "Roadmap", href: "#roadmap" },
                        { title: "FAQ", href: "#faq" },

      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Rarity Guide", href: "#rarity" },

        { title: "KaspaCom", href: "https://www.kaspa.com/nft/collections/LUXLIONS" },
      ],
    },
  ];



  return (
    <footer class="bg-[#70C7BA] bg-cover bg-center border-gray-300 dark:border-slate-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-4 sm:gap-8 pt-8 pb-6 md:pt-12 md:pb-4">
          <div class="col-span-12 lg:col-span-5 pr-4">
            <div class="flex flex-col">
              <div class="flex flex-row items-center justify-between mb-2 md:mb-2">
                <img
                  src="/images/banner.png"
                  alt="KasKritterz Logo"
                  class="h-8  mr-2 -mt-1"
                />
                {/* <ul class="flex flex-row flex-nowrap items-center space-x-2">
                  {social.map(({ label, href, icon: Icon }, index) => (
                    <li key={index}>
                      <Link
                        class={`
                          text-white 
                          dark:text-gray-400 
                          hover:text-teal-300 
                          focus:outline-none 
                          focus:ring-4 
                          focus:ring-gray-200 
                          dark:focus:ring-gray-700 
                          rounded-lg 
                          text-sm 
                          p-2.5 
                          inline-flex 
                          items-center 
                          relative 
                          transition-all 
                          duration-200 
                          after:content-[''] 
                          after:absolute 
                          after:bottom-[6px] 
                          after:left-1/2 
                          after:h-[2px] 
                          after:bg-teal-300 
                          after:transition-all 
                          after:duration-200 
                          after:w-0 
                          hover:after:w-1/2 
                          hover:after:left-1/4
                        `}
                        aria-label={label}
                        title={label}
                        href={href}
                      >
                        {typeof Icon !== "undefined" && <Icon />}
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </div>

              <div class="text-xl text-gray-200 mb-4 mt-2 dark:text-gray-400">
Lorem ipsum dolor sit amet consectetur adipisicing elit et Illo voluptatibus accusamus.               </div>
            </div>
          </div>

          {/* Sitemap links */}
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-white dark:text-gray-300 font-bold mb-2">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-lg">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-2">
                      <Link
                        class="!text-xl text-gray-300 hover:text-teal-400 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Buttons with order-first on mobile */}
          <div class="col-span-12 flex hidden flex-col w-full md:w-3/5 md:pl-0 px-4 sm:flex-row gap-3 pb-8 order-first sm:order-none">
            <a
              href="https://www.kaspa.com/nft/collections/KasKritter"
              class="border-2 hover:filter hover:invert border-black text-black text-xl px-5 py-3 rounded-lg bg-white/90 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <LuStar class="w-6 h-6 group-hover:text-teal-400" />
              Mint OG Mice
            </a>
            <a
              href="https://www.kaspa.com/nft/collections/BullzBearz"
              class="bg-teal-400 text-white text-xl px-3 py-3 rounded-lg hover:bg-white hover:text-teal-400 transition-colors flex items-center justify-center gap-2 flex-1"
            >
              <LuStar class="w-6 h-6 group-hover:text-teal-400" /> Mint Bullz vs Bearz
            </a>
            <a
              href="https://t.me/KasKritterzOfficial"
              class="bg-blue-300 text-white text-xl px-3 py-3 rounded-lg hover:bg-white hover:text-blue-300 transition-colors flex items-center justify-center gap-2 flex-1"
            >
              <LuUsers class="w-6 h-6 group-hover:text-blue-300" /> Join Community
            </a>
          </div>
        </div>

        <div class="md:flex md:items-center dark:border-gray-700 md:justify-between pb-6 pt-0 md:pb-8">
          <div class="!text-md text-gray-200 mr-4 dark:text-slate-400">
            © {new Date().getFullYear()} Lux Lions 
          </div>
        </div>
      </div>
    </footer>
  );
});