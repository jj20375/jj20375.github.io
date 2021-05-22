<template>
    <div>
        <div ref="box"
             class="box mt-9">test</div>
             <h1 v-for="item in 9" :key="item" :class="`text-blue-${item}00`" class="text-2xl">testBlue</h1>
             <!-- <h1 v-for="item in 9" :key="item" :class="`text-red-${item}00`" class="text-2xl">testRed</h1> -->
             <!-- <h1 v-for="item in 9" :key="item" :class="`text-green-${item}00`" class="text-2xl">testGreen</h1> -->
        <button @click="run()" class="bg-gradient-to-r py-3 rounded-lg md:px-1 sm:px-3 from-blue-500 to-red-300">CLick</button>
        <button class="ml-1 blue-btn"
                @click="run2">blueBtn</button>
        <button class="ml-1 blue-btn-outline"
                @click="run2">blueBtnOutline</button>
        <button class="ml-1 blue-btn disabled" disabled
                @click="run2">blueBtnDisabled</button>
        <button class="ml-1 red-btn"
                @click="run2">redBtn</button>
        <button class="ml-1 red-btn-outline"
                @click="run2">redBtnOutline</button>
        <button class="ml-1 green-btn"
                @click="run2">greenBtn</button>
        <button class="ml-1 green-btn-outline"
                @click="run2">greenBtnOutline</button>
        <button class="ml-1 green-blue-text-btn"
                @click="run2">greenBlueText</button>
        <button class="ml-5"
                @click="restart()">Restart</button>
        <svg version="1.1"
             ref="circle"
             baseProfile="tiny"
             id="Layer_1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px"
             y="0px"
             width="570px"
             height="150px"
             viewBox="0 0 570 150"
             xml:space="preserve">
            <circle fill="none"
                    cx="71.5"
                    cy="77.5"
                    r="51.5"
                    stroke="#88CE02"
                    stroke-width="4" />
        </svg>
        <!-- <svg viewBox="0 0 340 333">

            <path class="path"
                  fill="white"
                  stroke="black"
                  stroke-width="4"
                  d="M66.039,133.545c0,0-21-57,18-67s49-4,65,8
  s30,41,53,27s66,4,58,32s-5,44,18,57s22,46,0,45s-54-40-68-16s-40,88-83,48s11-61-11-80s-79-7-70-41
  C46.039,146.545,53.039,128.545,66.039,133.545z" />

        </svg> -->
        <Logo style="width:500px;" />
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div class="flex-shrink-0">
                <img class="h-12 w-12"
                     src="/img/logo.svg"
                     alt="ChitChat Logo">
            </div>
            <div>
                <div class="text-xl font-medium text-black">ChitChat</div>
                <p class="text-gray-500">You have a new message!</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    height: 100px;
    width: 100px;
    background-color: red;
}


@keyframes dash {
  from {
    stroke-dashoffset: 822;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>

<script>
import { gsap, Back } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Logo from "../components/Logo.vue";
export default {
    components: {
        Logo
    },
    methods: {
        run() {
            let self = this;
            var tl = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo:true});
            tl.to(self.$refs.box, 1, { x:200, rotation: 90, ease: Back.easeInOut,   repeat: 0,  lazy:true});
            tl.to(self.$refs.box, 1, {scale:.5, autoAlpha:0}, "+=0.5");
            tl.to(self.$refs.box, 2, {scale:10, autoAlpha:1}, "+=0.5");
            tl.to(self.$refs.box, .5, {scale:1, translateX:-300}, "+=0.5");
            // tl.restart();
        },
        run2() {
            let self = this;
            // let timeLine = new TimelineMax();
            // timeLine.to(self.$refs.box, 1, { x:100, translateX: -200, ease: Back.easeInOut});
            // timeLine.staggerTo(self.$refs.box, 1, 
            // {cycle: 
            //     { backgroundColor: ["red", "white", "#00f"], 
            //     y: function(index, target) {
            //             console.log(index, target)
            //             //目标target &lt; div class = "box" &gt; &lt; /div&gt;
            //             // 目标数组的动画索引值index
            //             return index * 20;
            //     },}});
            
        },
        restart() {
            let self = this;
            // let timeLine = new TimelineMax();
            // timeLine.from(self.$refs.box);
            // timeLine.restart();
            // timeLine.to(self.$refs.box, 1, { x:200, translateX: -200, ease: Back.easeInOut});
        }
    },
    mounted() {
        let self = this;
        let shapes = self.$refs.circle;
		// let tl = new TimelineLite();

        // tl.fromTo(shapes, {drawSVG:"100%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})
    }
}
</script>