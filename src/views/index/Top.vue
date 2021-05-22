<template>
    <div ref="home"
         index="home"
         class="bg grid grid-cols-12 gap-4 sm:bg-cover bg-cover bg-no-repeat sm:bg-left-bottom bg-top h-96 sm:h-screen w-full md:items-center sm:items-center items-start mt-24 md:mt-0">
        <div class="md:col-span-6 lg:col-span-5 xl:col-span-4 col-span-6 sm:not-sr-only sr-only">
            <div class="grid grid-rows-6 gap-4">
                <div class="row-start-1 row-span-3">
                    <div class="flex flex-wrap mt-5">
                        <div class="flex-1 sm:flex-initial md:flex-initial">
                            <img class="w-full object-fill"
                                 src="img/logo.svg"
                                 alt="">
                        </div>
                        <div class="flex-auto md:flex-initial self-center">
                            <h1 class="PattayaFont 2xl:text-5xl xl:text-3xl text-xl text-white text-left md:text-right">Enjoy the time</h1>
                            <h2 class="NotoSansTCFont font-extralight 2xl:text-3xl xl:text-xl text-xl text-left md:text-right text-white">享時光</h2>
                        </div>
                    </div>
                </div>
                <div class="row-start-4 row-span-3 pl-5">
                    <p class="whitespace-pre-line p-2  2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-md OpenSansFont font-medium text-white text-shadow-md">
                        What ever who you are

                        young or old you can join this

                        platform and find your Life or Love

                        Just enjoy the time.</p>
                    <WalkingPeople />
                </div>
            </div>
        </div>
        <div class="md:col-span-6 lg:col-span-5 xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="flex mobileShow">
                <div id="girl"
                     class="flex-initial">
                    <img class="w-full object-cover"
                         src="img/index-girl-center.png"
                         alt="">
                </div>
                <div class="flex-initial">
                    <h1 id="homeTitle"
                        class="PattayaFont text-2xl -ml-40 mt-10 mr-2">Enjoy the time</h1>
                    <h2 id="homeTitle2"
                        class="OpenSans font-thin tracking-wide bg-blue-500 text-white p-2 rounded-md text-sm inline-block -ml-40 mt-2 mr-2">Find your service and enjoy the moment</h2>
                </div>
            </div>
            <img id="girl"
                 class="w-full object-cover desktopShow"
                 src="img/index-girl-center.png"
                 alt="">
            <div class="2xl:static xl:static xl:not-sr-only md:sr-only sm:sr-only">
                <div class="absolute inset-y-0 md:top-1/2 top-72 w-40 h-24 right-1/3">
                    <HelloBtn />
                </div>
            </div>
            <div class="xl:static desktopShow">
                <div class="xl:absolute md:static sm:static xl:inset-y-0 xl:top-1/3 top-1/3 right-0 md:right-8 xl:right-1/4 lg:right-52 2xl:right-1/4">
                    <h1 id="homeTitle"
                        class="PattayaFont 2xl:text-8xl xl:text-6xl lg:text-6xl text-4xl">Enjoy the time</h1>
                    <h2 id="homeTitle2"
                        class="OpenSans font-thin tracking-wide bg-blue-500 text-white p-2 mt-2 rounded-md 2xl:text-3xl xl:text-lg lg:text-lg md:text-md text-sm inline-block">Find your service and enjoy the moment</h2>
                </div>
            </div>
        </div>
        <div class="md:col-span-2 lg:col-span-2 xl:col-span-4 sm:col-span-6 col-span-12 mb-5 self-end">
            <div class="flex items-end justify-start xl:not-sr-only sr-only">
                <div class="flex-initial">
                    <img class="w-full object-conver"
                         src="img/green-arrow.svg"
                         alt="">
                </div>
                <div class="flex-initial">
                    <h5 class="OpenSans text-5xl text-red-300 text-shadow-red-300-md italic"
                        @click="clickScroll()">See About</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.bg {
    background-image: url("/img/index-top-bg5.svg");
    @media screen and(max-width: 650px) {
        background-image: url("/img/index-top-mobile-bg.png");
    }
}
</style>

<script>
import WalkingPeople from "../../components/WalkingPeople.vue";
import HelloBtn from "../../components/HelloBtn.vue";
import { gsap, Bounce, Power1, TimelineLite } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
export default {
    components: {
        WalkingPeople,
        HelloBtn
    },
    methods: {
        startAnimate() {
            let start = gsap.timeline({
                // paused: true,
                yoyo: true,
                // scrollTrigger: {
                //     trigger: ".box",
                //     start: "top top",
                //     end: "center center",
                //     toggleActions: "restart none resume pause",
                //     // 開發時可以看到動畫起點與終點
                //     markers: true,
                //     // 反向動畫 往回滾時會反轉動畫效果
                //     // scrub: true,
                //     pin: false
                // }
            });
            start.fromTo("#girl", { opacity: 0, x: -200, rotateX: 90 }, { opacity: 1, x: 0, rotateX: 0, duration: 2, ease: Bounce.easeOut });
            start.fromTo("#homeTitle", { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: 1, ease: Power1.easeIn });
            start.fromTo("#homeTitle2", { opacity: 0, y: 200, rotationZ: 50 }, { opacity: 1, y: 0, duration: 1, ease: Bounce.easeOut, rotationZ: 0 });
            // start.play();
        }
    },
    mounted() {
        this.startAnimate();
    }
};
</script>