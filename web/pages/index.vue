<script setup lang="ts">
/* Import modules. */
import moment from 'moment'

useHead({
    title: 'Pythia — Blockchain Insight',
    meta: [
        { name: 'description', content: 'Accountable and verifiable price & data oracles.' }
    ],
})

/* Initialize stores. */
import { useSystemStore } from '@/stores/system'
const System = useSystemStore()

const oracles = ref()

const dataOracles = computed(() => {
    if (!oracles.value || !oracles.value.data) {
        return []
    }

    return oracles.value.data
})

const priceOracles = computed(() => {
    if (!oracles.value || !oracles.value.price) {
        return []
    }

    return oracles.value.price
})

onMounted(() => {
    oracles.value = {}

    oracles.value.price = []
    oracles.value.data = []

    oracles.value.price.push({
        id: '51b3b9c8-cb5e-4554-a662-2d0424032971',
        name: 'BTC / USD₮',
        quote: '53,948.998880',
        decimals: 6,
        updatedAt: 1725657783,
    })

    oracles.value.price.push({
        id: '783dd4a2-1484-4b61-8a14-8d2f4b471c25',
        name: 'BCH / USD₮',
        quote: '298.009988',
        decimals: 6,
        updatedAt: 1725657783,
    })

    oracles.value.price.push({
        id: '518cd288-0d58-44e0-8262-cbde23fa4dd0',
        name: 'mNEXA / USD₮',
        quote: '2.088000',
        decimals: 6,
        updatedAt: 1725657783,
    })



    oracles.value.data.push({
        id: '76915bfb-3bc7-4f51-9b29-8ad80fc4c33a',
        name: 'AVAS / USD₮',
        quote: '0.991337',
        decimals: 6,
        updatedAt: 1725660362,
    })

    oracles.value.data.push({
        id: '643a8b3b-4c5a-408f-b778-02b13dfc91b0',
        name: 'NXL / USD₮',
        quote: '0.450099',
        decimals: 6,
        updatedAt: 1725660362,
    })

    oracles.value.data.push({
        id: '390e2931-409a-4cfe-aeef-0e6989e1552f',
        name: 'STUDIO / USD₮',
        quote: '0.028000',
        decimals: 6,
        updatedAt: 1725660362,
    })

    oracles.value.data.push({
        id: '390e2931-409a-4cfe-aeef-0e6989e1552f',
        name: 'NXY / USD₮',
        quote: '0.028000',
        decimals: 6,
        updatedAt: 1725660362,
    })

    oracles.value.data.push({
        id: 'd7fee110-619d-4919-9f8f-0f96d8ecb5a0',
        name: 'AGNAR / USD₮',
        quote: 'n/a',
        decimals: 0,
        updatedAt: 1725660362,
    })

    oracles.value.data.push({
        id: '87899228-aba3-475d-a9c4-ec8639e99304',
        name: 'TCTC / USD₮',
        quote: 'n/a',
        decimals: 0,
        updatedAt: 1725660362,
    })

})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <main>
        <section class="bg-white">
            <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div class="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
                    <div class="px-6 lg:px-0 lg:pt-4">
                        <div class="mx-auto max-w-2xl">
                            <div class="max-w-lg">

                                <h1 class="text-4xl font-base tracking-tight text-gray-500 lg:text-6xl lg:leading-[80px]">
                                    Universal On-chain
                                    <span class="text-7xl text-amber-400 italic font-light">Price &amp; Data Oracles</span>
                                    for <span class="text-7xl text-lime-500 italic font-light">Smart<span class="underline">er</span></span> Contracts
                                </h1>

                                <p class="mt-6 text-xl leading-8 text-gray-600">
                                    Pythia offers a <span class="font-bold">Premium Builder Experience (BX)</span> that favors rapid iterations to get you deployed as quickly as possible.
                                </p>

                                <p class="mt-6 text-base leading-7 text-gray-600">
                                    For smart contracts that require price data, the price data needs to be injected into the transaction itself.
                                    The data is injected in the form of a small, efficient, structured message that a smart contract knows how to break up into parts and use.
                                </p>

                                <div class="mt-10 flex items-center gap-x-6">
                                    <NuxtLink to="/v1"
                                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        View the API
                                    </NuxtLink>

                                    <NuxtLink to="https://github.com/modenero/pythia" target="_blank" class="text-2xl font-semibold leading-6 text-gray-900">
                                        View on GitHub <span aria-hidden="true">→</span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div class="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true"></div>
                        <div class="shadow-lg md:rounded-3xl">
                            <div class="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div class="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true"></div>
                                <div class="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                                    <div class="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <div class="w-screen overflow-hidden rounded-tl-xl bg-gray-900">

                                            <div class="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                    <div class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                        App.jsx
                                                    </div>

                                                    <div class="border-r border-gray-600/10 px-4 py-2">
                                                        Wallet.jsx
                                                    </div>
                                                </div>
                                            </div>

                                            <pre class="px-6 pb-14 pt-6 text-amber-100">
import { makeRequest } from 'axios'
import { getQuote } from '@nexajs/market'

function Example() {
    const [enabled, setEnabled] = useState(true);
}
                                            </pre>
                                        </div>
                                    </div>
                                    <div class="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl" aria-hidden="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
            </div>
        </section>

        <!-- <section class="isolate">
            <div class="relative isolate -z-10 mt-32 sm:mt-48">
                <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                    <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
                        <defs>
                            <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%" patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y="50%" class="overflow-visible fill-gray-50">
                            <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
                    </svg>
                </div>

                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2>
                    <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
                        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
                    </div>
                </div>
            </div>
        </section> -->

        <section>
            <div class="w-full my-20 h-1 bg-gray-500" />

            <ul role="list" class="mx-auto mt-32 max-w-7xl px-6 lg:px-8 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                <h2 class="col-span-3 text-3xl font-bold tracking-widest">
                    Featured Coin Pairs
                </h2>

                <li v-for="oracle of priceOracles" :key="oracle.id" class="overflow-hidden rounded-xl border border-gray-200">
                    <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                        <img src="https://tailwindui.com/img/logos/48x48/tuple.svg" alt="Tuple" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
                        <div class="text-xl font-medium leading-6 text-gray-900">
                            {{oracle.name}}
                        </div>
                    </div>

                    <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                        <div class="flex justify-between gap-x-4 py-3">
                            <dt class="text-lg text-gray-500">
                                Last Quote
                            </dt>

                            <dd class="flex items-start gap-x-2">
                                <div class="text-lg font-medium text-gray-900">
                                    {{oracle.quote}}
                                </div>
                                <!-- <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-red-700 bg-red-50 ring-red-600/10">Overdue</div> -->
                            </dd>
                        </div>

                        <div class="flex justify-between gap-x-4 py-3">
                            <dt class="text-base text-gray-500">
                                Precision
                            </dt>

                            <dd class="text-base text-gray-700">
                                {{oracle.decimals}} decimals
                            </dd>
                        </div>

                        <div class="flex justify-between gap-x-4 py-3">
                            <dt class="text-lg text-gray-500">
                                Last Update
                            </dt>

                            <dd class="flex items-start gap-x-2">
                                <div class="text-lg font-medium text-gray-900">
                                    {{moment.unix(oracle.updatedAt).fromNow()}}
                                </div>
                                <!-- <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-red-700 bg-red-50 ring-red-600/10">Overdue</div> -->
                            </dd>
                        </div>
                    </dl>
                </li>
            </ul>

            <div class="w-full my-20 h-1 bg-gray-500" />

            <ul role="list" class="mx-auto mt-32 max-w-7xl px-6 lg:px-8 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                <h2 class="col-span-3 text-3xl font-bold tracking-widest">
                    Featured Token Pairs
                </h2>

                <li v-for="oracle of dataOracles" :key="oracle.id" class="overflow-hidden rounded-xl border border-gray-200">
                    <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                        <img src="https://tailwindui.com/img/logos/48x48/tuple.svg" alt="Tuple" class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
                        <div class="text-xl font-medium leading-6 text-gray-900">
                            {{oracle.name}}
                        </div>
                    </div>

                    <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                        <div class="flex justify-between gap-x-4 py-3">
                            <dt class="text-lg text-gray-500">
                                Last Quote
                            </dt>

                            <dd class="flex items-start gap-x-2">
                                <div class="text-lg font-medium text-gray-900">
                                    {{oracle.quote}}
                                </div>
                                <!-- <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-red-700 bg-red-50 ring-red-600/10">Overdue</div> -->
                            </dd>
                        </div>

                        <div class="flex justify-between gap-x-4 py-3">
                            <dt class="text-base text-gray-500">
                                Precision
                            </dt>

                            <dd class="text-base text-gray-700">
                                {{oracle.decimals}} decimals
                            </dd>
                        </div>

                        <div class="flex justify-between gap-x-4 py-3">
                            <dt class="text-lg text-gray-500">
                                Last Update
                            </dt>

                            <dd class="flex items-start gap-x-2">
                                <div class="text-lg font-medium text-gray-900">
                                    {{moment.unix(oracle.updatedAt).fromNow()}}
                                </div>
                                <!-- <div class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset text-red-700 bg-red-50 ring-red-600/10">Overdue</div> -->
                            </dd>
                        </div>
                    </dl>
                </li>
            </ul>
        </section>
    </main>
</template>
