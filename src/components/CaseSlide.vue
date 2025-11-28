<script lang="ts" setup>
import {defineProps} from 'vue';
defineProps<{
    case: any
    currentIndex: number
}>();
</script>

<template>
    <div class="relative aspect-video h-full bg-[#333333] w-[60vw] mr-50">
        <h2 class="absolute -z-1 top-0 left-0 -translate-y-[200px] -translate-x-[160px] text-[20rem] leading-none font-bold text-[#f97316] opacity-50">
            0{{ currentIndex + 1 }}
        </h2>

<!--        <img :src="image" class="w-full h-full object-cover transition-transform duration-700" />-->
    </div>
</template>