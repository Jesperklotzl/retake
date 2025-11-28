export interface CaseItem {
    id: number;
    title: string;
    company: string;
    description: string;
    optimized: Array<string>;
    image: string;
}


export const cases: CaseItem[] = [
    {
        id: 1,
        title: "AI der accelererer forskning",
        company: "Novo Nordisk",
        description: "Vi hjalp Novo Nordisk med at implementere intelligente AI-værktøjer i deres forsknings- og regulatoriske workflows. Systemerne analyserer, strukturerer og validerer store mængder medicinske dokumenter, hvilket har reduceret både tid, risiko og omkostninger i R&D. Resultatet: hurtigere beslutningsgrundlag og markant større operationel præcision.",
        optimized: [
            'Reduceret tiden til klinisk datavalidering med <span class="text-[#f97316]">54%</span> ved at automatisere manuel dokumentgennemgang.',
            'Forbedret kvaliteten af interne forskningsrapporter med <span class="text-[#f97316]">40% færre fejl</span> gennem AI-assisteret review.',
            'Accelereret time-to-insight i R&D med <span class="text-[#f97316]">3× hurtigere dataanalyse.</span>'
        ],
        image: "/assets/images/l11.webp",
    },
    {
        id: 2,
        title: "AI der accelererer forskning",
        company: "Novo Nordisk",
        description: "Vi hjalp Novo Nordisk med at implementere intelligente AI-værktøjer i deres forsknings- og regulatoriske workflows. Systemerne analyserer, strukturerer og validerer store mængder medicinske dokumenter, hvilket har reduceret både tid, risiko og omkostninger i R&D. Resultatet: hurtigere beslutningsgrundlag og markant større operationel præcision.",
        optimized: [
            'Reduceret tiden til klinisk datavalidering med <span class="text-[#f97316]">54%</span> ved at automatisere manuel dokumentgennemgang.',
            'Forbedret kvaliteten af interne forskningsrapporter med <span class="text-[#f97316]">40% færre fejl</span> gennem AI-assisteret review.',
            'Accelereret time-to-insight i R&D med <span class="text-[#f97316]">3× hurtigere dataanalyse.</span>'
        ],
        image: "/assets/images/l11.webp",
    },
    {
        id: 3,
        title: "AI der accelererer forskning",
        company: "Novo Nordisk",
        description: "Vi hjalp Novo Nordisk med at implementere intelligente AI-værktøjer i deres forsknings- og regulatoriske workflows. Systemerne analyserer, strukturerer og validerer store mængder medicinske dokumenter, hvilket har reduceret både tid, risiko og omkostninger i R&D. Resultatet: hurtigere beslutningsgrundlag og markant større operationel præcision.",
        optimized: [
            'Reduceret tiden til klinisk datavalidering med <span class="text-[#f97316]">54%</span> ved at automatisere manuel dokumentgennemgang.',
            'Forbedret kvaliteten af interne forskningsrapporter med <span class="text-[#f97316]">40% færre fejl</span> gennem AI-assisteret review.',
            'Accelereret time-to-insight i R&D med <span class="text-[#f97316]">3× hurtigere dataanalyse.</span>'
        ],
        image: "/assets/images/l11.webp",
    },
];