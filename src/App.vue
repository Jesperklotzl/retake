<script setup lang="ts">
import {useInputValidation} from './composables/useInputValidation';
import {computed, onMounted, ref, Transition} from "vue";
import ProgressBar from "./components/ProgressBar.vue";
import BackgroundGallery from "./components/BackgroundGallery.vue";

const {isValid, errorMessage, validate} = useInputValidation();
const url = ref<string>('')
const progress = ref<number>(0)
const markers = ref<Record<number, string>>({
    0: 'Initializing...',
    20: 'Preparing...',
    40: 'Loading resources...',
    60: 'Processing...',
    80: 'Almost there...',
    100: 'Completed!'
})
const validateURL = () => {
    validate(url.value)
    if (isValid.value) {
        startAnalysis.value = true
        show.value = false
    }
}

const startAnalysis = ref(false)
const show = ref(false)

onMounted(() => {
    requestAnimationFrame(() => {
        show.value = true
    })
})


</script>

<template>

    <section class="flex flex-col justify-end gap-4 !pb-[35lvh]">

        <Transition
            enter-from-class="-translate-x-[200px] opacity-0"
            enter-active-class="transition duration-1200"
            leave-active-class="transition duration-1200"
            leave-to-class="-translate-x-[200px] opacity-0"
        >
            <div
                v-if="show || startAnalysis"
                class="-z-1 absolute inset-0 transition-all duration-1200"
                :class="{
                    'bg-[linear-gradient(120deg,rgba(36,36,36,1)_45%,rgba(36,36,36,0)_80%)]': show,
                    'bg-[linear-gradient(270deg,rgba(36,36,36,0)_50%,rgba(36,36,36,1)_50%)]': startAnalysis
                }"></div>
        </Transition>

        <Transition
            enter-from-class="-translate-x-[200px] opacity-0"
            enter-active-class="transition duration-1200"
            leave-active-class="transition duration-1200"
            leave-to-class="-translate-x-[200px] opacity-0"
        >
            <h1
                v-if="show"
                class="text-white text-7xl font-semibold max-w-200 mb-4">
                Opdag AI-muligheder
                <span class="text-[#ff9700]">for jeres virksomhed</span>
            </h1>
        </Transition>

        <Transition
            enter-from-class="-translate-x-[240px] opacity-0"
            enter-active-class="transition delay-20 duration-1200"
            leave-active-class="transition delay-20 duration-1200"
            leave-to-class="-translate-x-[240px] opacity-0"
        >
            <p
                v-if="show"
                class="text-white text-xl max-w-160 text-balance mb-8">
                Få en gratis AI-analyse af jeres hjemmeside –
                og se præcis, hvor jeres virksomhed kan spare tid, øge effektiviteten og skabe nye forretningsmuligheder.
            </p>
        </Transition>

        <Transition
            enter-from-class="-translate-x-[280px] opacity-0"
            enter-active-class="transition delay-50 duration-1200"
            leave-active-class="transition delay-50 duration-1200"
            leave-to-class="-translate-x-[280px] opacity-0"
        >
            <form
                v-if="show || startAnalysis"
                class="flex gap-4 flex-col w-full max-w-180" @submit.prevent="validateURL">

                <div class="relative border-3 border-gray-300 rounded-lg">
                    <input
                        v-model="url"
                        class="w-full pr-75 bg-gray-100 py-3 px-4 text-black rounded-sm text-1xl text-left"
                        type="text"
                        placeholder="Indtast din hjemmeside URL (f.eks. virksomhed.dk)"
                    />
                    <input
                        class="absolute right-0 bg-[#f97316] font-semibold text-white rounded-sm py-3 px-8"
                        type="submit"
                        value="Analyser min virksomhed"
                    />
                </div>

                <p class="text-red-500 text-sm" v-if="!isValid">{{ errorMessage }}</p>

    <!--                <ProgressBar-->
    <!--                    ref="progress"-->
    <!--                    :duration="40000"-->
    <!--                    :progress-->
    <!--                />-->

            </form>
        </Transition>

    </section>

    <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition delay-800 duration-1200"
        leave-active-class="transition delay-800 duration-1200"
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
