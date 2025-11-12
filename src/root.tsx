import {
  component$,
  isDev,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "~/components/common/RouterHead";
import styles from "~/assets/styles/global.css?inline";
import Header from "./components/widgets/Header";

import {
  ThemeBaseColors,
  ThemeBorderRadiuses,
  ThemeFonts,
  ThemeModes,
  ThemePrimaryColors,
  ThemeStyles,
} from "@qwik-ui/utils";
import { APP_STATE_CONTEXT_ID } from "./_state/app-state-context-id";
import { AppState } from "./_state/app-state.type";
import { ThemeProvider } from "./lib/themes/provider";

export default component$(() => {
  useStyles$(styles);

  // --- AppState setup ---
  const appState = useStore<AppState>({
    featureFlags: {
      showStyled: true,
      showNeumorphic: isDev,
    },
  });
  useContextProvider(APP_STATE_CONTEXT_ID, appState);

  return (
    <QwikCityProvider>
      <head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="manifest" href="/manifest.json" />
  {/* Preload VT323 */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com"  />
  <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
  {/* Load Della Respira normally */}
  <RouterHead />
  <ServiceWorkerRegister />
  {/* Image preloads with correct types */}
</head>
      <body class="bg-white antialiased sm:hidden ">
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          themes={[
            ...Object.values(ThemeFonts),
            ...Object.values(ThemeModes),
            ...Object.values(ThemeStyles),
            ...Object.values(ThemeBaseColors),
            ...Object.values(ThemePrimaryColors),
            ...Object.values(ThemeBorderRadiuses),
          ]}
        >
          <Header />
          <div class="relative md:border-x mx-auto max-w-7xl overflow-x-hidden">
        
            <div
              class="absolute inset-0 z-[-1] bg-gradient-to-br from-background via-background/80 to-background"
              aria-hidden="true"
            ></div>
           
            <div
              class="absolute top-0 left-5 w-[700px] h-[800px] z-[-1]  rounded-full blur-xl animate-float"
              aria-hidden="true"
            ></div>
            <div
              class="absolute top-0 right-0 w-[800px] h-[800px] z-[-1] bg-primary-100/30 rounded-full blur-xl animate-float"
              aria-hidden="true"
            ></div>
            <div
              class="absolute top-5 md:left-[650px] w-[490px] h-[80px] z-[-1]  rounded-full blur-xl animate-float"
              aria-hidden="true"
            ></div>
            <RouterOutlet />
          </div>
        </ThemeProvider>
      </body>
    </QwikCityProvider>
  );
});
