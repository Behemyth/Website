<template lang="pug">
footer.w-full.max-w-5xl.mx-auto.p-4.bg-white.shadow(
	class="dark:bg-gray-900"
)
	.flex.items-center.justify-between
		.mb-6(class="sm:mb-0")
			NuxtLink.flex.items-center(to="contact")
				NuxtImg.mr-3.h-12.rounded-full(
					src="https://www.gravatar.com/avatar/293a56bef971ab4999d6230491957d33?s=200",
					alt="Asher's Face"
					preload
				)
				span.self-center.text-2xl.font-semibold.whitespace-nowrap(
					class="dark:text-white"
				) {{ $t('Contact') }}

		SocialIcons(:socials="socials ? socials: []", size="24")

	hr.my-4.border-gray-200(class="sm:mx-auto dark:border-gray-700")
	.flex.items-center.justify-between
		span.text-sm.text-gray-500(class="sm:text-center dark:text-gray-400") Copyright &copy; {{ new Date().getFullYear() }}
		span.flex.mt-4.text-sm.text-gray-500(class="sm:justify-center sm:mt-0") Made with ❤️ by Asher and Ola
</template>

<script setup lang="ts">
import type { MetaData } from '~/types/metadata'

const { data: socials } = useLazyAsyncData('socials', () =>
	queryContent<MetaData>('_data')
		.where({ _partial: true, title: 'Metadata' })
		.findOne().then((value) => {
			return value.socials
		})
)
</script>
~/types/types
