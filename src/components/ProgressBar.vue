<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

interface Props {
  duration?: number;
  markers?: Record<number, string>;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 60000, // 60 seconds
});

const progress = ref(0);
let startTime = 0;
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

// Compute active marker text
const currentText = computed(() => {
  if (!props.markers) return '';

  const keys = Object.keys(props.markers)
      .map(Number)
      .sort((a, b) => a - b);

  let text = '';
  for (const key of keys) {
    if (progress.value >= key) text = props.markers[key];
  }
  return text;
});

onMounted(start);
onBeforeUnmount(() => timer && clearInterval(timer));
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    <!-- Progress Bar -->
    <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
          class="h-full bg-green-500 transition-all duration-200 ease-out"
          :style="{ width: progress + '%' }"
      ></div>
    </div>

    <!-- Marker Text -->
    <p class="text-sm text-gray-700">{{ currentText }}</p>
  </div>
</template>