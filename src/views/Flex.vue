<template>
    <div style="width:100%;">
        <!-- <div class="flex gray-box justify-content-between align-items-start flex-change-line"
             style="height:500px;">
            <div class="red-box text-white m-1 text-center">
                BOX1
            </div>
            <div class="red-box text-white m-1 text-center align-self-center width80">
                BOX2
                BOX2
                BOX2
                BOX2
                BOX2
            </div>
            <div class="red-box text-white m-1 text-center">
                BOX3
            </div>
            <div class="flex"
                 style="width:100%;">
                <div class="red-box text-white m-1 text-center">
                    BOX1
                </div>
                <div class="red-box text-white m-1 text-center align-self-center width80 flex-grow0">
                    BOX2
                    BOX2
                    BOX2
                    BOX2
                    BOX2
                </div>
                <div class="red-box text-white m-1 text-center">
                    BOX3
                </div>
            </div>
        </div>
        <div class="flex gray-box justify-content-between align-items-start"
             style="height:500px; margin-top: 50px;">
            <div class="red-box text-white m-1 text-center">
                BOX1
            </div>
            <div class="red-box text-white m-1 text-center align-self-center width80">
                BOX2
                BOX2
                BOX2
                BOX2
                BOX2
            </div>
            <div class="red-box text-white m-1 text-center">
                BOX3
            </div>
        </div> -->

        <div class="flex flex-row gray-box flex-change-line justify-content-center"
             style="margin: 20px 0 0 0;">
            <div class="col col-12 blue-box align-content-center col-lg-1 col-md-2 col-sm-2 text-white mt-2">Box1</div>
            <div class="col col-12 blue-box align-content-center col-lg-12 col-md-2 col-sm-12 text-white mt-2">Box12</div>
            <div class="col col-12 blue-box align-content-center col-lg-6 col-md-2 col-sm-2 text-white mt-2">Box6</div>
            <div class="col col-12 blue-box align-content-center col-lg-6 col-md-2 col-sm-2 text-white mt-2">Box6</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flex {
    display: flex;
    width: 100%;
}
.flex-row {
    flex-direction: row;
}
.flex-column {
    flex-direction: column;
}
.flex-change-line {
    flex-wrap: wrap;
    // @media screen and (max-width: 480px) {
    //     flex-wrap: nowrap;
    // }
}
.flex-in-line {
    flex-wrap: nowrap;
}
.flex-reverse {
    flex-wrap: wrap-reverse;
}
.flex-shrink0 {
    flex-shrink: 0;
}
.flex-grow0 {
    flex-grow: 0;
}

.col {
    height: auto;
    margin: 0 15px 0 15px;
    flex-grow: 1;
    display: grid;
}

@for $i from 1 through 12 {
    .col-#{$i} {
        flex-grow: 0;
        flex-basis: calc(-30px + 100% * #{$i} * 1 / 12);
    }
}
@media screen and (min-width: 320px) and (max-width: 480px) {
    @for $i from 1 through 12 {
        .col-sm-#{$i} {
            flex-grow: 0;
            flex-basis: calc(-30px + 100% *#{$i} * 1 / 12);
        }
    }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
    @for $i from 1 through 12 {
        .col-md-#{$i} {
            flex-grow: 0;
            flex-basis: calc(-30px + 100% * #{$i} * 1 / 12);
        }
    }
}
@media screen and (min-width: 769px) and (max-width: 2560px) {
    @for $i from 1 through 12 {
        .col-lg-#{$i} {
            flex-grow: 0;
            flex-basis: calc(-30px + 100% *#{$i} * 1 / 12);
        }
    }
}
// @media screen and (max-width: 480px) {
//     @for $i from 1 through 12 {

//     }
// }
@for $i from 1 through 5 {
    .mt-#{$i} {
        margin-top: #{0.25 * $i}rem;
    }
    .mb-#{$i} {
        margin-bottom: #{0.25 * $i}rem;
    }
}

.justify-content-start {
    justify-content: flex-start;
}
.justify-content-end {
    justify-content: flex-end;
}
.justify-content-center {
    justify-content: center;
}
.justify-content-between {
    justify-content: space-between;
}
.justify-content-around {
    justify-content: space-around;
}

.align-items-start {
    align-items: flex-start;
}
.align-items-end {
    align-items: flex-end;
}
.align-items-center {
    align-items: center;
}
.align-items-stretch {
    align-items: stretch;
}
.align-items-baseline {
    align-items: baseline;
}

.align-self-start {
    align-self: flex-start;
}
.align-self-end {
    align-self: flex-end;
}
.align-self-center {
    align-self: center;
}
.align-self-stretch {
    align-self: stretch;
}
.align-self-baseline {
    align-self: baseline;
}

.align-content-start {
    align-content: flex-start;
}
.align-content-end {
    align-content: flex-end;
}
.align-content-center {
    align-content: center;
}
.align-content-stretch {
    align-content: stretch;
}
.align-content-baseline {
    align-content: baseline;
}

.red-box {
    background-color: red;
    height: 50px;
    width: 50px;
}
.blue-box {
    background-color: blue;
    height: 50px;
    width: 50px;
}
.gray-box {
    background-color: #666;
    width: 100%;
}
.green-box {
    background-color: blue;
    height: 50px;
    width: 50px;
}
.height {
    height: 80px;
}
.width {
    width: 80px;
}
.width80 {
    width: 600px;
}

.text-white {
    color: #fff;
}
.text-center {
    text-align: center;
}
.p-1 {
    padding: 1rem;
}
.m-1 {
    margin: 1rem;
}
</style>