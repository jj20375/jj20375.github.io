<template>
    <div class="md:p-2 sm:p-2 absolute top-0 w-full z-10">
        <div class="relative"
             :class="!showMenu ? 'hidden': ''">
            <div class="bg-black opacity-50 w-full h-screen absolute top-0 left-0"></div>
        </div>
        <div class="grid grid-cols-3 gap-3 mobileShow bg-blue-500 items-center">
            <div class="col-span-2">
                <img class="w-full"
                     src="img/mobile-logo.png"
                     alt="">
            </div>
            <div @click="clickMoileShowMenu()"
                 class="text-blue-500 text-right mr-5 z-10">
                <div class="bg-white inline-block p-3 rounded-lg">
                    <i class="fas fa-bars fa-2x"></i>
                </div>
            </div>
        </div>
        <nav class="grid grid-cols-8 gap-2 sm:not-sr-only md:not-sr-only sm:opacity-100 sm:transform translate-x-0 z-10"
             :class="!showMenu ? 'sr-only opacity-0 transform -translate-x-full' : 'not-sr-only transition duration-500 ease-in opacity-100 absolute w-full p-2 bg-white transform translate-x-0'">
            <div class="2xl:col-start-6 2xl:col-span-2 xl:col-start-4 xl:col-span-3 lg:col-start-3 lg:col-span-4 md:col-start-3 md:col-span-4 sm:col-start-1 sm:col-span-6 col-start-1 col-span-9">
                <ul class="flex justify-end list-none flex-wrap">
                    <li class="red-btn flex-initial text-center sm:mt-0 mt-2 sm:flex-1 md:flex-1 md:flex-grow sm:flex-grow-0 md:w-auto w-full flex-grow md:ml-1">Home</li>
                    <li class="red-btn-outline flex-initial text-center sm:mt-0 mt-2 sm:flex-1 md:flex-1 md:flex-grow sm:flex-grow-0 md:w-auto w-full flex-grow md:ml-1"
                        @click="clickMenu('about')">About</li>
                    <li class="red-btn-outline flex-initial text-center sm:mt-0 mt-2 sm:flex-1 md:flex-1 md:flex-grow sm:flex-grow-0 md:w-auto w-full flex-grow md:ml-1" @click="clickMenu('service')">Service</li>
                    <li class="red-btn-outline flex-initial text-center sm:mt-0 mt-2 sm:flex-1 md:flex-1 md:flex-grow sm:flex-grow-0 md:w-auto w-full flex-grow md:ml-1" @click="clickMenu('joinus')">Join</li>
                </ul>
            </div>
            <div class="2xl:col-start-9 2xl:col-span-2 xl:col-start-7 xl:col-span-2 lg:col-start-7 lg:col-span-3 md:col-start-7 md:col-span-2 sm:col-start-7 sm:col-span-3 col-start-1 col-span-9 sm:mt-0 mt-5">
                <ul class="flex justify-end list-none flex-wrap text-center">
                    <li class="blue-btn lg:text-xl flex-initial md:flex-grow-0 flex-grow sm:w-auto md:w-auto mt-2 sm:mt-0">Sign In</li>
                    <li class="blue-btn-outline lg:text-xl flex-initial md:flex-grow-0 flex-grow sm:w-auto md:w-auto  md:ml-2 mt-2 sm:mt-0">Sign Up</li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'// 导入gsap插件ScrollToPlugin
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)// 注册插件
export default {
    data() {
        return {
            showMenu: false
        };
    },
    methods: {
        clickMoileShowMenu() {
            this.showMenu = !this.showMenu;
        },
        clickMenu(val) {
            // gsap.registerPlugin(ScrollTrigger);
            // let t1 = gsap.timeline({
            //     scrollTrigger: {
            //         trigger: ".box",
            //         start: "center center",
            //         end: "bottom top",
            //         markers: true,
            //         scrub: true,
            //         pin: true
            //     }
            // });
            // let st = gsap.from("#about", {
            //     scrollTo: {
            //         y: innerHeight + 464,
            //         autoKill: false
            //     },
            //     duration: 1
            // });
            // t1.add(st);

            // gsap.timeline({
            //     scrollTrigger: {
            //         trigger: "#about",
            //         start: "center center",
            //         end: "bottom top",
            //         markers: true,
            //         scrub: true,
            //         pin: true
            //     }
            // }).to(".box", {
            //     ease: Back.easeInOut,
            //     scrollTo: {
            //         // y: innerHeight + 464,
            //         autoKill: false
            //     },
            //     duration: 1
            // }).from("#about", { x: innerWidth * 1, opacity: 0 });
            // alert(val);
            // console.log(st, innerHeight);
            // let t1 = gsap.timeline({ paused: true });
            // t1.set("#about", { transformOrigin: "center center" }).fromTo("#about", { opacity: 0, scale: 0.8, y: "+=100" }, { opacity: 1, scale: 1, y: 0, duration: 1, imediateRender: false });
            // let scrt = ScrollTrigger.create({
            //     trigger: ".box",
            //     start: "top top",
            //     // id: "ScrollTrigger",
            //     end: "bottom bottom",
            //     endTrigger: "#about",
            //     animation: t1,
            //     toggleActions: "restart none resume pause",
            //     markers: true,
            // });
            // t1.play();
            this.showMenu = !this.showMenu;
            let t2 = gsap.timeline();
            t2.to(window, { duration: 1, scrollTo: `#${val}`})
            
        },
    },
    mounted() {

    }
};
</script>
