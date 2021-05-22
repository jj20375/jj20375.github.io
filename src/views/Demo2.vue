<template>
    <div>
        <button class="myBtn">
            Click me
        </button>
        <div class="grid grid-rows-12 grid-flow-col gap-0">
            <div class="row-span-3 bg-blue-400 ...">1</div>
            <div class="col-span-2 row-span-1 bg-green-500 ...">2</div>
            <div class="col-span-2 row-span-2 bg-red-400">3</div>
            <!-- <div class="col-span-3 row-span-1 bg-red-600">4</div>
            <div class="col-span-3 row-span-2 bg-red-300">5</div>
            <div class="col-span-1 row-span-1 bg-red-600">6</div>
            <div class="col-span-2 row-span-1 bg-red-600">7</div> -->
            <!-- <div class="row-span-4 bg-red-600">3</div> -->
            <!-- <div class="row-span-1 col-span-12 bg-red-600">3</div> -->
        </div>
        <div class="grid grid-cols-1 h-80 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <div class="bg-red-200" v-for="item in 10" :key="item">{{item}}</div>
        </div>
                <div class="grid grid-rows-3 grid-flow-col gap-4 h-64">
                    <div class="bg-gray-300">1</div>
                    <div class="bg-gray-300">9</div>
                    <div class="bg-gray-300">9</div>
                </div>

    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
    
}
</script>