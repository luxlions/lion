import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Process from "~/components/widgets/Process";
import FAQTabs from "~/components/widgets/FAQTabs";
import Hero from "~/components/widgets/Hero";
import Story from "~/components/widgets/Story";


export default component$(() => {
  return (
    <>
      <Hero/>

      <div id="story">
        <Story/>
      </div>

      <div id="roadmap">
        <Process/>
      </div>

     

      <div id="faq">
        <FAQTabs/>
      </div>
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