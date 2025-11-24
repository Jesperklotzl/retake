// useInputValidation.ts
import {ref} from 'vue';

export function useInputValidation() {
    const isValid = ref(true);
    const errorMessage = ref('');

    // Basic website URL regex (supports http, https, domain-only, etc.)
    const websiteRegex =
        /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

    function validate(value: string) {
        if (!value) {
            isValid.value = false;
            errorMessage.value = 'Indtast venligst en gyldig URL.';
            return;
        }

        if (!websiteRegex.test(value.trim())) {
            isValid.value = false;
            errorMessage.value = 'Indtast venligst en gyldig URL.';
            return;
        }

        isValid.value = true;
        errorMessage.value = '';
    }

    return {
        isValid,
        errorMessage,
        validate,
    };
}
