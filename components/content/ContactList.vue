<template lang="pug">
.flex.space-x-6
	NuxtLink(v-for="contact in contacts", :key="contact.name", :to="contact.link", :title="contact.name")
		Icon(:name="contact.icon", :size="size.toString()")
</template>

<script setup lang="ts">
import type { MetaData } from '../../schema/metadata'

const props = defineProps({
	size: {
		type: Number,
		required: true
	}
})

const { data: contacts } = useLazyAsyncData('contacts', () =>
	queryContent<MetaData>('_data')
		.where({ _partial: true, title: 'Metadata' })
		.findOne().then((value) => {
			return value.contacts
		})
)

const size = computed(() => {
	const size = props.size
	return size
})
</script>
