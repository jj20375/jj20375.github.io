<template>
    <div ref="about"
         id="about"
         class="bg grid grid-cols-2 bg-cover bg-no-repeat bg-top">
        <div class="blueBg lg:col-span-1 col-span-2 bg-cover bg-top 2xl:bg-top md:bg-right-bottom">
            <div class="flex items-center h-96 md:ml-20 ml-2 mt-20">
                <div class="flex-initial">
                    <h1 class="text-5xl text-white PattayaFont title">About</h1>
                    <p class="NotoSansFont font-medium text-white">您是否有過孤獨且無趣的時光呢？是否想找人陪，卻又找不到伴呢？
                        <br />
                        關於這問題享時光，都幫你想好了我們是一群年輕創業族群，了解，
                        <br />
                        年輕好友們或上班族，以及銀髮族群，空閒時光時，找不到伴或者根本沒有伴
                        <br />
                        陪你度過這時光，享時光，就是為了，你們而誕生。
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // 导入gsap插件ScrollToPlugin
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 导入gsap插件ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger); // 注册插件
export default {
    methods: {
        startAnimate() {
            let start = gsap.timeline({
                paused: true,
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
            start.fromTo(this.$refs.about, { opacity: 0, scale: 2, rotationX: 0, y: "-=100" }, { opacity: 1, scale: 1, rotationX: 360, y: 0, duration: 1, imediateRender: false });
            start.play();
        }
    },
    mounted() {
        this.startAnimate();
    }
};
</script>

<style scoped lang="scss">
.blueBg {
    background-image: url(../../img/about-blue-bg.svg);
}
.bg {
    background-image: url(../../img/about-bg.jpg);
}
</style>
