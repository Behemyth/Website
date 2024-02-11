<template lang="pug">
.flex.space-x-6
	NuxtLink(v-for="contact in contacts", :key="contact.name", :to="contact.link", :title="contact.name")
		Icon(:name="contact.icon", :size="props.size.toString()")
</template>

<script setup lang="ts">
const props = defineProps({
	size: {
		type: Number,
		required: true
	}
})

// queryContent() is wrapped with useAsyncData() to prevent query duplication
const { data: contacts } = useAsyncData('contacts', () =>
	queryContent('_data')
		.where({ _partial: true, title: 'Metadata' })
		.findOne().then((value) => {
			return value.contacts
		})
)

</script>
