<script setup lang="ts">
import {useInputValidation} from './composables/useInputValidation';
import {computed, onMounted, ref, Transition} from "vue";
import ProgressBar from "./components/ProgressBar.vue";
import BackgroundGallery from "./components/BackgroundGallery.vue";
import CaseSlider from "./components/CaseSlider.vue";
const {isValid, errorMessage, validate} = useInputValidation();

const url               = ref<string>('')
const progress          = ref<any>(0)
const startAnimation    = ref<boolean>(false)
const startAnalysis     = ref<boolean>(false)
const show              = ref<boolean>(false)
const markers           = ref<Record<number, string>>({
    0: 'Initializing...',
    20: 'Preparing...',
    40: 'Kunstig intelligens, ægte resultater...',
    60: 'Smarte løsninger til smarte virksomheder...',
    80: 'Udarbejder usecases...',
    100: 'Completed!'
})

const currentMarker = computed(() => {
    const keys = Object.keys(markers.value)
        .map(Number)
        .sort((a, b) => a - b);

    let text: string = 'Initializing...';

    for (const key of keys) {
        const markerText = markers.value[key];
        if (markerText && progress.value.progress >= key) {
            text = markerText;
        }
    }

    return text;
});

const validateURL = () => {
    validate(url.value)
    if (isValid.value) {
        startAnimation.value = true
        show.value = false

        setTimeout(() => {
            startAnalysis.value = true
        },1200)
    }
}

onMounted(() => {
    requestAnimationFrame(() => {
        show.value = true
    })
})


</script>

<template>
    <section class="flex h-full w-full">
        <div class="flex flex-col justify-end gap-4 pb-[22lvh] transition-all w-full max-w-200 trasition-all duration-1200"
             :class="{ '!pb-0' : startAnimation }"
        >

            <Transition
                enter-from-class="-translate-y-[50px] opacity-0"
                enter-active-class="transition duration-1200"
                leave-active-class="transition duration-1000"
                leave-to-class="-translate-y-[50px] opacity-0"
            >
                <div
                    v-if="show || startAnimation"
                    class="-z-1 absolute inset-0 transition-all duration-1200 bg-[linear-gradient(120deg,rgba(36,36,36,1)_45%,rgba(36,36,36,0)_80%)]"
                    :class="{'bg-[#242424]': startAnimation}"></div>
            </Transition>

            <Transition
                enter-from-class="opacity-0"
                enter-active-class="transition delay-400 duration-1200"
                leave-active-class="transition duration-1000"
                leave-to-class="-translate-y-[100px] opacity-0"
            >
                <h1
                    v-if="show"
                    class="text-white text-7xl font-semibold max-w-200 mb-4">
                    Opdag AI-muligheder
                    <span class="text-[#ff9700]">for jeres virksomhed</span>
                </h1>
            </Transition>

            <Transition
                enter-from-class="opacity-0"
                enter-active-class="transition delay-300 duration-1200"
                leave-active-class="transition duration-1000"
                leave-to-class="-translate-y-[100px] opacity-0"
            >
                <p
                    v-if="show"
                    class="text-white text-xl max-w-160 text-balance mb-3">
                    Få en gratis AI-analyse af jeres hjemmeside –
                    og se præcis, hvor jeres virksomhed kan spare tid, øge effektiviteten og skabe nye forretningsmuligheder.
                </p>
            </Transition>

            <form
                @submit.prevent="validateURL"
                class="flex flex-col gap-4 items-start z-1"
            >
                <Transition
                    enter-from-class="opacity-0"
                    enter-active-class="transition delay-200 duration-1200"
                    leave-active-class="transition duration-1200"
                    leave-to-class="-translate-x-[280px] opacity-0"
                >
                    <div
                        v-if="show || startAnimation"
                        class="relative rounded-lg transition-all duration-1200"
                    >
                        <input
                            v-model="url"
                            class="bg-gray-100 mb-4 border-2 py-3 px-4 w-130 h-[48px] caret-black placeholder:text-gray-600 rounded-sm text-1xl text-left transition-all duration-1200"
                            :class="{ '!h-[8px] !mb-0' : startAnimation }"
                            :disabled="startAnimation"
                            type="text"
                            placeholder="Indtast din hjemmeside URL (f.eks. virksomhed.dk)"
                        />
                        <span class="absolute -z-1 top-0 opacity-0 -translate-y-[20px] py-3 px-4 left-0 text-white transition-all duration-1200"
                              :class="{ '-translate-y-[68px] opacity-100' : startAnimation }"
                              v-text="currentMarker"
                        />
                        <span class="py-3 px-4 absolute left-0 text-black top-0 transition-all duration-1200"
                              :class="{ '-translate-y-[44px] text-white' : startAnimation }"
                              v-text="url"
                        />
                        <ProgressBar
                            v-if="startAnalysis"
                            ref="progress"
                            :duration="40000"
                        />
                    </div>

                </Transition>

                <Transition
                    enter-from-class="opacity-0"
                    enter-active-class="transition delay-100 duration-1200"
                    leave-active-class="transition duration-1200"
                    leave-to-class="-translate-x-[340px] opacity-0"
                >
                    <input
                        v-if="show || startAnimation"
                        class="bg-[#f97316] font-semibold text-white rounded-sm py-3 px-8 transition-all duration-1200"
                        :class="{ 'opacity-0 translate-y-[100px]' : startAnimation }"
                        type="submit"
                        value="Analyser min virksomhed"
                    />
                </Transition>

                <p class="text-red-500 text-sm" v-if="!isValid">{{ errorMessage }}</p>

            </form>

            <Transition
                enter-from-class="opacity-0"
                enter-active-class="transition delay-200 duration-1200"
                leave-active-class="transition delay-200 duration-1200"
                leave-to-class="opacity-0"
            >
                <div v-if="startAnalysis" class="absolute bottom-0 left-0 w-full h-full">
                    <CaseSlider/>
                </div>
            </Transition>

        </div>
    </section>

    <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition delay-1000 duration-1200"
        leave-active-class="transition delay-1000 duration-1200"
        leave-to-class="opacity-0"
    >
        <div
            v-if="show"
            class="z-[-2] absolute bottom-0 left-0 w-full h-full max-h-[80lvh]
                grid grid-cols-1 grid-rows-4 place-content-end py-10 gap-10 translate-x-[40vw]"
        >
            <BackgroundGallery :offset="4" />
            <BackgroundGallery :offset="8" />
            <BackgroundGallery :offset="12" />
            <BackgroundGallery :offset="16" />
        </div>
    </Transition>

</template>
