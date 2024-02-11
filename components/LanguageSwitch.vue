<template lang="pug">
.flex.items-center
	select.rounded-md.text-sm.p-1(id="languageSwitcher" @change="updateLocale")
		option.p-1(v-for="loc in availableLocales" :key="loc.code" :value="loc.code") {{ loc.name }}
</template>

<script setup lang="ts">

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
	return (locales.value)
})

function updateLocale(event: any) {
	setLocale(event.target.value)
}

onMounted(() => {
	const languageSwitcher = document.querySelector('#languageSwitcher')

	if (languageSwitcher) {
		languageSwitcher.value = locale.value
	}
})
</script>
