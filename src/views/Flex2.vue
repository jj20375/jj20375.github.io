<template>
    <div>
        <div class="flex flex-row flex-change-line gray-box justify-content-center">
            <div class="col col-12 col-sm-3 red-box my-2 mx-2 col-md-4 col-lg-5 text-white align-content-center" style="height:300px;">
                <div>box1</div>
                <div>box2</div>
            </div>
            <div class="col col-12 col-sm-3 red-box my-2 mx-2 col-md-4 col-lg-5 text-white align-content-center" style="height:300px;">
                box1
            </div>
            <div class="col col-12 col-sm-3 red-box my-2 mx-2 col-md-4 col-lg-5 text-white align-content-center" style="height:300px;">
                box1
            </div>
            <div class="col col-12 col-sm-3 red-box my-2 mx-2 col-md-4 col-lg-5 text-white align-content-center" style="height:300px;">
                box1
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.red-box {
    background-color: red;
}
.blue-box {
    background-color: blue;
}
.gray-box {
    background-color: #666;
}

.text-white {
    color: #fff;
}

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
}
.flex-in-line {
    flex-wrap: nowrap;
}
.flex-reverse {
    flex-wrap: wrap-reverse;
}

.justify-content-center {
    justify-content: center;
}
.justify-content-start {
    justify-content: flex-start;
}
.justify-content-end {
    justify-content: flex-end;
}
.justify-content-between {
    justify-content: space-between;
}
.justify-content-around {
    justify-content: space-around;
}

.align-items-center {
    align-items: center;
}
.align-items-start {
    align-items: flex-start;
}
.align-items-end {
    align-items: flex-end;
}
.align-items-stretch {
    align-items: stretch;
}
.align-items-baseline {
    align-items: baseline;
}

.align-self-center {
    align-self: center;
}
.align-self-start {
    align-self: flex-start;
}
.align-self-end {
    align-self: flex-end;
}
.align-self-stretch {
    align-self: stretch;
}
.align-self-baseline {
    align-self: baseline;
}

.align-content-center {
    align-content: center;
}
.align-content-start {
    align-content: flex-start;
}
.align-content-end {
    align-content: flex-end;
}
.align-content-stretch {
    align-content: stretch;
}
.align-content-baseline {
    align-content: baseline;
}

.col {
    display: grid;
    flex-grow: 1;
    margin: 0 15px 0 15px;
    height: auto;
}

@for $i from 1 through 12 {
    .col-#{$i} {
        flex-grow: 0;
        flex-basis: calc(-30px + 100% *#{$i} * 1 / 12);
    }
}

@media screen and (min-width: 300px) and (max-width: 480px) {
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
            flex-basis: calc(-30px + 100% *#{$i} * 1 / 12);
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

@for $i from 1 through 5 {
    .mt-#{$i} {
        margin-top: #{0.25 * $i}rem;
    }
    .mb-#{$i} {
        margin-bottom: #{0.25 * $i}rem;
    }
    .m-#{$i} {
        margin: #{0.25 * $i}rem;
    }
    .my-#{$i} {
        margin-top: #{0.25 * $i}rem;
        margin-bottom: #{0.25 * $i}rem;
    }
    .mx-#{$i} {
        margin-left: #{0.25 * $i}rem;
        margin-right: #{0.25 * $i}rem;
    }
    .pt-#{$i} {
        padding-top: #{0.25 * $i}rem;
    }
    .pb-#{$i} {
        padding-bottom: #{0.25 * $i}rem;
    }
    .p-#{$i} {
        padding: #{0.25 * $i}rem;
    }
    .py-#{$i} {
        padding-top: #{0.25 * $i}rem;
        padding-bottom: #{0.25 * $i}rem;
    }
    .px-#{$i} {
        padding-left: #{0.25 * $i}rem;
        padding-right: #{0.25 * $i}rem;
    }
}
</style>