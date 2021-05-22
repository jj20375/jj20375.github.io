<template>
    <div id="app">
        <div class="box">
            <h2 class="text1">Scroll trigger</h2>
            <h2 class="text2">This is my first one</h2>
            <h2 class="text3">How is it?</h2>

        </div>
        <div class="box2">
            <h2 class="text4">Let get out</h2>
            <h2 class="text5">of this town</h2>
            <h2 class="text6">Drive out the city</h2>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
    mounted: function () {
        this.scrollAnimation();
    },
    methods: {
        scrollAnimation() {
            let t1 = gsap.timeline({
                 scrollTrigger: {
                    trigger: ".box1",
                    start: "center center",
                    end: "bottom top",
                    markers: true,
                    scrub: true,
                    pin: true
                }
            });
            let t2 = gsap.timeline({
                 scrollTrigger: {
                    trigger: ".text2",
                    start: "center center",
                    end: "bottom top",
                    markers: true,
                    scrub: true,
                    pin: true
                }
            });
            let st1 = gsap.from(".text1", { x: innerWidth * 1, opacity: 0 });
            let st2 = gsap.from(".text2", { x: innerWidth * 1, opacity: 0 });
            // t1.add([st1]);
            t2.add([st2]);

            // gsap.timeline({
            //     scrollTrigger: {
            //         trigger: ".box",
            //         start: "center center",
            //         end: "bottom top",
            //         // 開發時可以看到動畫起點與終點
            //         markers: true,
            //         // 反向動畫 往回滾時會反轉動畫效果
            //         scrub: true,
            //         pin: true,
            //     }
            // })
            //     .from(".text1", { x: innerWidth * 1, opacity: 0 })
            //     .from(".text2", { x: innerWidth * 1, opacity: 0 })
            //     .from(".text3", { x: innerWidth * 1, opacity: 0 });

            gsap.timeline({
                scrollTrigger: {
                    trigger: ".box2",
                    start: "center center",
                    end: "bottom top",
                    // 開發時可以看到動畫起點與終點
                    markers: true,
                    // 反向動畫 往回滾時會反轉動畫效果
                    scrub: true,
                    pin: true
                }
            })
                .from(".text4", { x: innerWidth * 1, opacity: 0 })
                .from(".text5", { x: innerWidth * 1, opacity: 0 })
                .from(".text6", { x: innerWidth * 1, opacity: 0 });
        }
    }
};
</script>

<style scoped>
h2 {
    margin-top: 200px;
    margin-bottom: 200px;
}
</style>
