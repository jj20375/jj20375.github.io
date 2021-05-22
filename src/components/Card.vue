<template>
    <div class="bg-white border-4 border-blue-500 shadow-blue-500-md h-auto rounded-xl card">
        <div class="flex flex-col"></div>
        <div class="flex-grow-0">
            <img class="w-full rounded-bl-full rounded-br-full rounded-tl-xl rounded-tr-xl"
                 :src="imgSrc"
                 alt="">
        </div>
        <div class="flex-grow-0 text-center">
            <h1 class="bg-blue-500 text-center text-white p-2">{{ name }}</h1>
            <p class="bg-red-300 text-white p-2 m-3 rounded-xl">{{ subString(description, 30) }}</p>
            <button class="green-blue-text-btn mb-5 w-1/2">邀約</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        imgSrc: {
            type: String,
            default: null
        }
    },
    methods: {
        subString(val, num) {
            if (val.length > num) {
                return val.substring(0, num) + "...";
            }
            return val;
        }
    }
};
</script>
