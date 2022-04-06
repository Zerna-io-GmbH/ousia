<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
  import { ScrollSmoother } from "gsap/dist/ScrollSmoother.js";
  import { SplitText } from "gsap/dist/SplitText.js";

  let smoother;
  onMount(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
      smoother = ScrollSmoother.create({
          wrapper: "#wrapper",
          content: "#content",
          smooth: 2,
          smoothTouch: 0.1,
          effects: true
      });
  })

  function scrollToTop() {
      if (smoother) {
          smoother.scrollTo(0, true, "center center");
      }
  }
</script>


<div id="wrapper" class="wrapper">
    <div id="content">
        <slot />
        <section class="flex justify-center items-center gap-8 pb-6">
            <button type="button" class="btn btn--xs" on:click={scrollToTop}>Go up</button>
        </section>
    </div>
</div>
