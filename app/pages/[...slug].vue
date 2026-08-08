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
		>
			<template #links>
				<UButton
					v-for="(link, index) in page.links ?? []"
					:key="index"
					color="neutral"
					variant="outline"
					v-bind="link"
				/>
				<AppFeedCopy
					v-if="feed"
					:feed="feed"
				/>
			</template>
		</UPageHeader>
		<UPageBody>
			<ContentRenderer :value="page.body" />
		</UPageBody>
	</UPage>
	<PageNotFound v-else />
</template>

<script lang="ts" setup>
const { page } = await useContentPage('content');
useSeoMeta({ title: page.value?.title, description: page.value?.description });
const { feed } = useContentFeed();
</script>
