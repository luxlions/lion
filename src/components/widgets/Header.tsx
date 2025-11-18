import { component$, useStore, useVisibleTask$, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { LuTwitter, LuSend } from "@qwikest/icons/lucide";
import IconChevronDown from "../icons/IconChevronDown";
import MenuModal from "./MenuModal";

interface MenuItem {
  text: string;
  href: string;
  items?: SubMenuItem[];
}

interface SubMenuItem {
  text: string;
  href: string;
}

export default component$(() => {
  const store = useStore({
    isScrolling: false,
    isMobile: false,
  });

  const isInitialized = useSignal(false);
  const location = useLocation();

  useVisibleTask$(async () => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    store.isMobile = mediaQuery.matches;
    isInitialized.value = true;

    // Initial scroll check
    const initialScrollY = window.scrollY;
    if (initialScrollY >= 10) {
      store.isScrolling = true;
    }

    const handler = (e: MediaQueryListEvent) => {
      store.isMobile = e.matches;
    };
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  });

  // Manual scroll listener (different approach for reliability)
  useVisibleTask$(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (!store.isScrolling && scrollY >= 10) {
        store.isScrolling = true;
      } else if (store.isScrolling && scrollY < 10) {
        store.isScrolling = false;
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const menu: { items: MenuItem[] } = {
    items: [
      { text: "Story", href: "#story" },
      { text: "Roadmap", href: "#roadmap" },
      { text: "Rarity", href: "#rarity" },
      { text: "FAQ", href: "#faq" },
    ],
  };

  return (
    <>
      {/* Header */}
      <header
        id="header"
        class={`
          sticky top-0 z-40 flex-none mx-auto max-w-7xl
          transition-all duration-100 ease-in-out border-primary-500 border-b-[#70C7BA] 
          ${store.isScrolling
            ? "bg-[#29b9b0] md:bg-primary-100/80 md:border-b-8 dark:bg-primary-900/80 md:backdrop-blur-sm"
            : "bg-[#29b9b0]"
          }
        `}
      >
        <div class="relative text-default py-0 md:p-1 px-0 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
          <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
            <a class="flex items-center min-w-[120px] md:min-w-[200px]" href="/">
              {/* Desktop Logo: Always visible, matches MenuModal style */}
              <img
                src="/images/banner.png"
                alt="Banner"
                class="hidden md:block w-auto h-14"
              />

              {/* Mobile Logo: Bubble mask-like fade-in (opacity + subtle scale for smooth bubble effect) */}
              <img
                src="/images/banner.png"
                alt="Banner"
                class={`
                  md:hidden w-auto h-14 transition-all duration-300 ease-out
                  ${store.isScrolling
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                  }
                `}
              />
            </a>
            <div class="flex items-center md:hidden mr-14 gap-1">
              {/* Mobile Social Icons - Twitter */}
              <a
                href="https://x.com/LuxLionsKas"
                target="_blank"
                rel="noopener noreferrer"
                class="p-1  backdrop-blur-sm transition-all duration-300 bg-[#29b9b0] border-white dark:border-primary-500 hover:shadow-xl hover:bg-white/45"
                aria-label="Twitter"
              >
                <LuTwitter class="w-6 h-6 text-white dark:text-secondary-200" />
              </a>

              {/* Mobile Social Icons - Telegram */}
              <a
                href="t.me/LuxLionsKas"
                target="_blank"
                rel="noopener noreferrer"
                class="p-1.5 backdrop-blur-sm transition-all duration-300 bg-[#29b9b0] border-white dark:border-primary-500 hover:shadow-xl hover:bg-white/45"
                aria-label="Telegram"
              >
                <LuSend class="w-6 h-6 text-white dark:text-secondary-200" />
              </a>

              {/* Mobile Audio Button */}
              {/* <button
                class="p-1.5 border-3 left-6 backdrop-blur-sm transition-all duration-300 bg-[#29b9b0] border-white dark:border-primary-500 hover:shadow-xl hover:bg-white/45"
                aria-label="Play Audio"
              >
                <LuVolume2 class="w-5 h-5 text-white dark:text-secondary-200" />
              </button> */}

              <MenuModal />
            </div>
          </div>
          <nav
            class="items-center w-full md:w-auto hidden md:flex dark:text-white overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5 group"
            aria-label="Main navigation"
          >
            {menu && menu.items ? (
              <ul class="flex flex-col md:flex-row text-primary-600 md:text-white md:self-center w-full md:w-auto text-xl md:text-[1.75rem] tracking-[0.01rem] font-medium">
                {menu.items.map(({ text, href, items }, key) => {
                  const isActive = location.url.pathname === href;
                  return (
                    <li key={key} class={items?.length ? "dropdown" : ""}>
                      {items?.length ? (
                        <>
                          <button
                            class={`
                              hover:text-[#f29b10]
                              px-4 py-3
                              flex items-center
                              transition-all duration-200
                              relative
                              after:content-['']
                              after:absolute
                              after:bottom-[6px]
                              after:left-1/2
                              after:h-[2px]
                              after:bg-[#f29b10]
                              after:transition-all
                              after:duration-200
                              ${isActive
                                ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                                : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                              }
                            `}
                            onClick$={() => {
                              if (location.url.pathname !== "/") {
                                window.location.href = "/classes";
                              } else {
                                const servicesSection = document.getElementById("services");
                                if (servicesSection) {
                                  servicesSection.scrollIntoView({ behavior: "smooth" });
                                }
                              }
                            }}
                          >
                            {text}
                            <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                          </button>
                          <ul
                            class={`
                              dropdown-menu
                              md:backdrop-blur-md
                              dark:md:bg-muted
                              md:absolute
                              pl-4 md:pl-0
                              md:hidden
                              font-medium
                              md:bg-white/80
                              md:min-w-[200px]
                              drop-shadow-xl
                              py-2
                            `}
                          >
                            {items.map(({ text: text2, href: href2 }: SubMenuItem, key2: number) => {
                              const isDropdownActive = location.url.pathname === href2;
                              const isFirst = key2 === 0;
                              const isLast = key2 === items.length - 1;
                              return (
                                <li key={key2}>
                                  <a
                                    class={`
                                      hover:bg-muted
                                      hover:text-[#f29b10]
                                      py-2 px-5
                                      block
                                      whitespace-no-wrap
                                      transition-all duration-200
                                      relative
                                      after:content-['']
                                      after:absolute
                                      after:bottom-[4px]
                                      after:left-1/2
                                      after:h-[2px]
                                      after:bg-[#f29b10]
                                      after:transition-all
                                      after:duration-200
                                      ${isDropdownActive
                                        ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                                        : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                                      }
                                      ${isFirst ? "hover:rounded-t-base" : ""}
                                      ${isLast ? "hover:rounded-b-base" : ""}
                                      ${!isFirst && !isLast ? "hover:rounded-none" : ""}
                                    `}
                                    href={href2}
                                    onClick$={(e) => {
                                      if (text2 === "Clay" && href2 === "/about#clay") {
                                        e.preventDefault();
                                        if (location.url.pathname !== "/about") {
                                          window.location.href = "/about#clay";
                                        } else {
                                          const claySection = document.getElementById("clay");
                                          if (claySection) {
                                            claySection.scrollIntoView({ behavior: "smooth" });
                                          }
                                        }
                                      }
                                    }}
                                  >
                                    {text2}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </>
                      ) : (
                        <a
                          class={`
                            hover:bg-muted
                            hover:text-[#f29b10]
                            px-4 py-3
                            flex items-center
                            relative
                            transition-all duration-200
                            after:content-['']
                            after:absolute
                            after:bottom-[6px]
                            after:left-1/2
                            after:h-[2px]
                            after:bg-[#f29b10]
                            after:transition-all
                            after:duration-200
                            ${isActive
                              ? "text-[#f29b10] after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                              : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                            }
                          `}
                          href={href}
                        >
                          {text}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </nav>
          <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
            <div class="items-center flex mr-2 justify-between w-full md:w-auto gap-2">
              {/* Desktop Audio Button */}
              {/* <button
                class="p-2.5 bg-primary-500/80 hover:bg-primary-600/80 transition-all duration-200 group shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button> */}

              {/* Desktop Social Icons - Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                class="p-1.5 backdrop-blur-sm transition-all duration-300 bg-[#29b9b0] border-white dark:border-primary-500 hover:shadow-xl hover:bg-white/45"
                aria-label="Twitter"
              >
                <LuTwitter class="w-6 h-6 text-white dark:text-secondary-200" />
              </a>

              {/* Desktop Social Icons - Telegram */}
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                class="p-1.5 backdrop-blur-sm transition-all duration-300 bg-[#29b9b0] border-white dark:border-primary-500 hover:shadow-xl hover:bg-white/45"
                aria-label="Telegram"
              >
                <LuSend class="w-6 h-6 text-white dark:text-secondary-200" />
              </a>

         {/* <a
            href="https://kaspa.com/nft/collections/LUXLIONS"
            class=" hover:bg-yellow-300 bg-[#e4b138] sm:w-auto bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 group relative inline-flex items-center justify-center px-3 pl-5 py-1 text-2xl font-semibold  shadow-lg hover:shadow-[0_0_12px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:opacity-0 before:transform before:-translate-x-full group-hover:before:opacity-100 group-hover:before:translate-x-0 before:transition-all before:duration-500 hover:scale-102 hover:bg-gradient-to-r hover:from-primary-400 hover:via-primary-400 hover:to-primary-300"
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
          </a> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
});
