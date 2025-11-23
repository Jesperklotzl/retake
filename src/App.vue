<script setup lang="ts">
import {useInputValidation} from './composables/useInputValidation';
import {ref} from "vue";
import ProgressBar from "./components/ProgressBar.vue";

const { isValid, errorMessage, validate } = useInputValidation();
const url = ref<string>('')
let startAnalysis = ref(false)

const validateURL = () => {
  validate(url.value)

  if ( isValid.value ) startAnalysis.value = true

}

</script>

<template>

  <section>
    <div>
      <h1 class="text-white text-6xl font-semibold max-w-180 mb-4">Opdag AI-muligheder <span class="text-[#ff9700]">for jeres virksomhed</span></h1>
      <p class="text-white text-xl max-w-180 text-balance mb-8">Vi hjælper virksomheder med at træde ind i den digitale tidsalder. Lær hvordan AI kan transformere din forretning med personaliserede anbefalinger.</p>
      <form class="flex gap-4 flex-col max-w-140" @submit.prevent="validateURL">
        <input v-model="url" class="bg-gray-100 py-3 px-4 text-black rounded text-1xl text-center" type="text" placeholder="Indtast din hjemmeside URL (f.eks. virksomhed.dk)" />
        <p class="text-red-500 text-sm" v-if="!isValid">{{ errorMessage }}</p>
        <input class="bg-[#f97316] font-semibold text-white rounded py-3 px-8" type="submit" value="Analyser min virksomhed">

        <ProgressBar
            :duration="40000"
            :markers="{
              0: 'Initializing...',
              20: 'Preparing...',
              40: 'Loading resources...',
              60: 'Processing...',
              80: 'Almost there...',
              100: 'Completed!'
            }"
        />
      </form>
    </div>
    <div>
      <div class="grid">
          <Image src="/image.jpg" alt="Image" width="250" />
      </div>
    </div>
  </section>

</template>
