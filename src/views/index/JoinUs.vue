<template>
    <div ref="joinus"
         id="joinus"
         class="grid grid-cols-2 joinUsBg bg-cover bg-center h-80 place-content-center">
        <div class="md:col-span-1 col-span-2 md:ml-20 ml-2">
            <h1 id="joinus-title"
                class="text-5xl text-white PattayaFont text-shadow-md">Join Us</h1>
            <p class="NotoSansFont font-medium text-white text-shadow-md mt-5 mb-5">
                歡迎各位服務者一起加入此平台，一同為大家提供更多的服務選擇，
                一起共創此平台，讓大家的生活美好時光，因你我而改變。
            </p>
            <button class="blue-btn-outline bg-white shadow-black-sm">立即加入</button>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'// 导入gsap插件ScrollToPlugin
import { ScrollTrigger } from 'gsap/ScrollTrigger'// 导入gsap插件ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)// 注册插件
export default {
    methods: {
        startAnimate() {
            let start = gsap.timeline({
                paused: true,
                delay: 10,
                scrollTrigger: {
                    trigger: ".box",
                    start: "top top",
                    end: "center center",
                    // 開發時可以看到動畫起點與終點
                    // markers: true,
                    // 反向動畫 往回滾時會反轉動畫效果
                    // scrub: true,
                    toggleActions: "restart none resume pause",
                    pin: false
                }
            });
            start.fromTo(this.$refs.service, { opacity: 0, x: -200 }, { opacity: 1, x: 0, duration: 1, ease: "bounce.inOut", imediateRender: false });
            start.set("#joinus-title", { transformOrigin: "center center" }).fromTo("#joinus-title", { rotateX: 0 }, { rotateX: 360, duration: 1, ease: "power2.in", imediateRender: false });
            start.play();
        }
    },
    mounted() {
        this.startAnimate();
    }
};
</script>

<style scoped lang="scss">
.joinUsBg {
    background-image: url("/img/joinus-bg.jpg");
    @media screen and(max-width: 650px) {
        background-image: url("/img/joinus-mobile-bg.jpg");
    }
}
</style>