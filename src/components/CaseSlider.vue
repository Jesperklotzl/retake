<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import CaseSlide from './CaseSlide.vue';
import { cases } from '../data/cases';


const currentIndex = ref<number>(0);
const total = cases.length;
const autoplaySpeed = 5000;
let autoplayTimer: any = null;


const imageContainer = ref<HTMLElement | null>(null);
const textContainer = ref<HTMLElement | null>(null);


function animateSlide(newIndex: number) {
    // gsap.to(imageContainer.value, {
    //     x: -newIndex * 100 + '%',
    //     duration: 1.1,
    //     ease: 'power3.out',
    // });
    //
    // gsap.to(textContainer.value, {
    //     y: -newIndex * 100 + '%',
    //     duration: 1.1,
    //     ease: 'power3.out',
    // });
}

function next() {
    currentIndex.value = (currentIndex.value + 1) % total;
    animateSlide(currentIndex.value);
}

function prev() {
    currentIndex.value = (currentIndex.value - 1 + total) % total;
    animateSlide(currentIndex.value);
}

function startAutoplay() {
    autoplayTimer = setInterval(() => {
        next();
    }, autoplaySpeed);
}

function pauseAutoplay() {
    clearInterval(autoplayTimer);
}

function resumeAutoplay() {
    startAutoplay();
}

onMounted(() => {
    // startAutoplay();
    animateSlide(0);
});

onBeforeUnmount(() => {
    pauseAutoplay();
});
</script>

<template>
    <div class="relative flex w-full pl-[25vw] max-w-[1200px] h-full text-white p-10 gap-12">

        <div class="absolute top-1/2 flex -translate-y-2/3 transition-transform duration-700 ease-out"
             :style="{ transform: `translateX(-${(currentIndex * 100) / cases.length}%)` }">
            <CaseSlide
                v-for="c in cases"
                :key="c.id"
                :case="c"
                :currentIndex="currentIndex"
            />
        </div>

    </div>
<!--        <div class="absolute p-10 top-0 left-0 overflow-hidden">-->

<!--            <h2 class="text-[20rem] font-bold text-[#f97316] opacity-50"-->
<!--            v-for="c in cases"-->
<!--            :key="c.id"-->
<!--            >0{{c.id}}</h2>-->

<!--        </div>-->

        <!-- IMAGE AREA -->



        <!-- TEXT AREA -->
<!--        <div class="relative w-[40%] h-full overflow-hidden flex items-center">-->
<!--            <div ref="textContainer" class="absolute w-full">-->
<!--                <div-->
<!--                    v-for="c in cases"-->
<!--                    :key="c.id"-->
<!--                    class="h-[550px] flex flex-col justify-center"-->
<!--                >-->
<!--                    <h1 class="text-5xl font-bold mb-2 leading-tight">{{ c.title }}</h1>-->
<!--                    <p class="opacity-80 text-base">{{ c.subtitle }}</p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->


        <!-- PAGINATION (like screenshot) -->
<!--        <div class="absolute bottom-8 left-10 flex gap-2">-->
<!--            <div-->
<!--                v-for="(c, i) in cases"-->
<!--                :key="c.id"-->
<!--                class="h-[3px] w-10 rounded-full transition-all duration-300"-->
<!--                :class="i === currentIndex ? 'bg-red-500 w-14 shadow-[0_0_8px_#ff3d3d]' : 'bg-gray-500/40'"-->
<!--            />-->
<!--        </div>-->


<!--         BUTTONS-->
        <div class="absolute bottom-8 right-10 flex gap-4">
            <button
                @click="prev"
                class="px-5 py-2 border border-gray-600 hover:bg-white hover:text-black transition rounded-lg"
            >Prev</button>


            <button
                @click="next"
                class="px-5 py-2 border border-gray-600 hover:bg-white hover:text-black transition rounded-lg"
            >Next</button>
        </div>
</template>