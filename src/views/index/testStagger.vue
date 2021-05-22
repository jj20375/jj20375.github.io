<template>
    <div>
        <div class="flex flex-wrap w-screen h-screen fixed">
            <span v-for="(item,index) in 220" :key="index" class="box2 rounded-full m-2 w-20 h-20 bg-pink-300 flex-auto"></span>
        </div>
    </div>
</template>

<script>
import  gsap  from "gsap";
export default {
    mounted() {
        let st1 = gsap.timeline();
        st1.to(".box2", {
            force3D: true,
            duration: 1,
            scale: 0.1,
            y: 40,
            // yoyo: true,
            // repeat: -1,
            ease: "power1.inOut",
            stagger: {
                grid: [7, 15],
                from: "center",
                amount: 1.5
            }
        });
        st1.to(".box2", { opacity: 0, display: "none", x:-1, duration:1 });
    }
};
</script>