<template lang="pug">
.flex.space-x-6
	ULink(v-for="contact in contacts", :key="contact.name", :to="contact.link", :title="contact.name")
		UIcon.w-12.h-12(:name="contact.icon")
</template>

<script setup lang="ts">

import type { MetaData } from '~/types/metadata'

// queryContent() is wrapped with useAsyncData() to prevent query duplication
const { data: contacts } = useAsyncData('contacts', () =>
	queryContent<MetaData>('_data')
		.where({ _partial: true, title: 'Metadata' })
		.findOne().then((value) => {
			return value.contacts
		})
)

</script>
