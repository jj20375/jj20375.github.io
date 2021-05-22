<template>
    <div ref="service" id="service">
        <div class="grid grid-cols-2 bg-cover" style="background-image: url(img/service/service-circle-bg.png)">
            <div class="lg:col-span-1 col-end-3 col-span-2 md:p-2 desktopShow" >
                <owl-carousel :items="3"
                              :autoplay="true"
                              :loop="true"
                              :dots="true"
                              :margin="10"
                              :stagePadding="10"
                              :autoplayTimeout="1500"
                              :center="false"
                              :nav="false">
                    <ServiceCard v-for="(item, index) in datas"
                                 :key="index"
                                 :description="item.description"
                                 :name="item.name"
                                 :imgSrc="item.imgSrc" />
                </owl-carousel>
            </div>
            <div class="lg:col-end-3 col-start-1 lg:col-span-1 col-span-2 bg-cover md:bg-left-bottom bg-top ml-auto sm:mb-0 -mb-20"
                 style="background-image: url(img/service-red-bg.svg)">
                <div class="flex items-start h-96 md:ml-20 ml-0 md:mt-20 mt-2 md:pl-40 pl-2 md:pr-20">
                    <div class="flex-initial text-white">
                        <h1 class="text-5xl PattayaFont">Service</h1>
                        <p class="NotoSansFont font-medium">
                            您是否想了解更多關於，享時光的服務方式呀？
                            享時光為兩種客戶群
                        </p>
                        <ol class="list-decimal">
                            <li>
                                服務者
                            </li>
                            <li>
                                購買服務者
                            </li>
                        </ol>
                        <p class="NotoSansFont font-medium">
                            您可以選擇您是要提供服務來陪伴眾多的消費者，還是選擇購買
                            服務提供者提供的服務內容，來享受彼此的悠閒時光。</p>
                    </div>
                </div>
            </div>
             <div class="lg:col-span-1 col-end-3 col-span-2 p-2 mobileShow">
                <owl-carousel :items="2"
                              :autoplay="true"
                              :loop="true"
                              :dots="true"
                              :margin="10"
                              :stagePadding="0"
                              :autoplayTimeout="1500"
                              :center="false"
                              :nav="false">
                    <ServiceCard v-for="(item, index) in datas"
                                 :key="index"
                                 :description="item.description"
                                 :name="item.name"
                                 :imgSrc="item.imgSrc" />
                </owl-carousel>
            </div>

        </div>
    </div>

</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'// 导入gsap插件ScrollToPlugin
import ServiceCard from "../../components/Card";
gsap.registerPlugin(ScrollToPlugin)// 注册插件
export default {
    components: {
        ServiceCard
    },
    computed: {
        checkMobile() {
            if (window.screen.width < 768) {
                return true;
            } else {
                return false;
            }
        }
    },
    data() {
        return {
            datas: [
                {
                    name: "莓子",
                    description: "大家好我是莓子，閒閒沒事嗎？趕快來找我陪你聊天逛街，看電影",
                    imgSrc: "img/service/service-1.jpg"
                },
                {
                    name: "Sindy",
                    description: "1個人跑步很無趣嗎？趕快約Sindy 跑起來！跑起來，慢跑不再孤零零",
                    imgSrc: "img/service/service-2.jpg"
                },
                {
                    name: "Tank(坦克)",
                    description: "哈囉大家好我是Tank，每天運動很難有堅持的動力吧，讓我陪您一起打造精美體態，專業健身知識",
                    imgSrc: "img/service/service-3.jpg"
                }
            ],
        };
    },
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
            start.fromTo(this.$refs.service, { opacity: 0, x:-200 }, { opacity: 1, x: 0, duration: 1, ease: "bounce.inOut", imediateRender: false });
            start.from(".card", { opacity: 0, rotationY:360, duration:0.5, stagger:0.2, ease: "rough.out", });
            start.play();
        }
    },
    mounted() {
        this.startAnimate();
    }

};
</script>
