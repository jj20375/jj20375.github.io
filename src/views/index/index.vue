<template>
    <div class="w-full box">

        <testStagger class="desktopShow" />
        <Top />
        <About />
        <Service />
        <JoinUs />

        <!-- <test /> -->
    </div>
</template>

<script>
import Top from "./Top.vue";
import About from "./About.vue";
import Service from "./Service.vue";
import JoinUs from "./JoinUs.vue";
import test from "./test.vue";
import testStagger from "./testStagger.vue";
import { gsap, Back } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default {
    components: {
        Top,
        About,
        Service,
        JoinUs,
        test,
        testStagger
    }
};
</script>
