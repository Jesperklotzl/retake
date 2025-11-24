<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee'
import {computed, defineProps, onMounted, ref} from "vue";

import l1 from "../assets/images/slider/l1.webp"
import l2 from "../assets/images/slider/l2.webp"
import l3 from "../assets/images/slider/l3.webp"
import l4 from "../assets/images/slider/l4.webp"
import l5 from "../assets/images/slider/l5.webp"
import l6 from "../assets/images/slider/l6.webp"
import l7 from "../assets/images/slider/l7.png"
import l8 from "../assets/images/slider/l8.webp"
import l9 from "../assets/images/slider/l9.webp"
import l10 from "../assets/images/slider/l10.webp"
import l11 from "../assets/images/slider/l11.webp"
import l12 from "../assets/images/slider/l12.webp"
import l13 from "../assets/images/slider/l13.webp"
import l14 from "../assets/images/slider/l14.webp"
import l15 from "../assets/images/slider/l15.webp"
import l16 from "../assets/images/slider/l16.webp"
import l17 from "../assets/images/slider/l17.webp"
import l18 from "../assets/images/slider/l18.webp"

const props = defineProps<{ offset?: number }>()

const all = [
    l1, l2, l3, l4, l5, l6, l7, l8, l9,
    l10, l11, l12, l13, l14, l15, l16, l17, l18
]

const rotated = computed(() => {
    const o = props.offset ? props.offset % all.length : 0
    return [...all.slice(o), ...all.slice(0, o)]
})


</script>

<template>
    <Vue3Marquee
        :duration="180"
        class="!h-full"
        :style="{ transform: `translateX(-${offset*2}0px)` }"
    >
        <img
            v-for="(img, i) in rotated"
            :key="i"
            :src="img"
            class="object-contain aspect-square bg-amber-50 p-10 w-full h-full rounded-xl mr-10 filter grayscale"
        />
    </Vue3Marquee>
</template>

