<template>
	<USelect
id="languageSwitch" v-model="locale" :options="availableLocales" option-attribute="name"
		value-attribute="value" required />
</template>

<script setup lang="ts">

const { locale, locales } = useI18n()

const availableLocales = computed(() => {
	return (locales.value)
})

</script>
