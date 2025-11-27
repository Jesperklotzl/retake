<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount, defineExpose, readonly} from 'vue';

interface Props {
    duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
    duration: 60000, // 60 seconds
});

const progress = ref(0);
let startTime = 1200;
let timer: number | null = null;

function tick() {
    const elapsed = Date.now() - startTime;
    const t = Math.min(elapsed / props.duration, 1);
    const randomFactor = 0.8 + Math.random() * 0.4; // 0.8–1.2
    let target = Math.min(100, t * 100 * randomFactor);

    target = Math.max(target, progress.value);
    progress.value += (target - progress.value) * 0.2;

    if (elapsed >= props.duration || progress.value >= 99.5) {
        progress.value = 100;
        clearInterval(timer!);
        timer = null;
    }
}

function start() {
    startTime = Date.now();
    timer = setInterval(tick, 80); // ~12.5 FPS
}

defineExpose({progress: readonly(progress)});

onMounted(start);
onBeforeUnmount(() => timer && clearInterval(timer));
</script>

<template>
    <div class="flex flex-col gap-1 w-full h-full absolute  top-0 bottom-o left-0">
        <div class="w-full bg-white rounded-sm h-full p-0.5 overflow-hidden">
            <div
                class="h-full relative bg-[#f97316] transition-all rounded-sm duration-200 ease-out"
                :style="{ width: progress + '%' }"
            >
                <span class="absolute left-4 top-2/4 -translate-y-6/12 text-white text-[12px]">
                    {{ progress.toFixed(0) + '%' }}</span>
            </div>
        </div>
    </div>
</template>