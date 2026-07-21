<template>
	<UPage
		v-if="page"
		:class="{ 'max-w-4xl mx-auto w-full': !page.body?.toc?.links?.length }"
	>
		<template
			v-if="page.body?.toc?.links?.length"
			#left
		>
			<UPageAside>
				<UContentToc
					:title="$t('common.contents')"
					highlight
					:links="page.body.toc.links"
				/>
			</UPageAside>
		</template>
		<UPageHeader
			:title="page.title"
			:description="page.description"
			:links="page.links"
		/>
		<UPageBody>
			<ContentRenderer :value="page.body" />
		</UPageBody>
	</UPage>
	<PageNotFound v-else />
</template>

<script lang="ts" setup>
const { page } = await useContentPage('content');
useSeoMeta({ title: page.value?.title, description: page.value?.description });

// Feed link for RSS-enabled pages
const route = useRoute();
useHead(() => ({
	link: page.value?.feed
		? [{
				rel: 'alternate' as const,
				title: page.value.title,
				type: 'application/json',
				href: '/feed' + route.path + '.json',
			}]
		: [],
}));
</script>
