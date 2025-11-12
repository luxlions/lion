import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Process from "~/components/widgets/Process";
import Reviews from "~/components/widgets/Reviews";
import FAQTabs from "~/components/widgets/FAQTabs";
import Hero from "~/components/widgets/Hero";
import Services from "~/components/widgets/Services";
import Rarity from "~/components/widgets/Rarity";


export default component$(() => {
  return (
    <>
    <Hero/>
               <Reviews/>

      <Process/>

    <Rarity/>
      <FAQTabs/>
      <Services/>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};