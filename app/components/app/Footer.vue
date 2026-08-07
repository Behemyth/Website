<template>
	<UFooter>
		<UNavigationMenu
			:items="items"
			color="neutral"
			variant="link"
		/>

		<template #left>
			<AppProfileCard
				orientation="horizontal"
				variant="soft"
			/>
		</template>

		<template #right>
			<UDropdownMenu
				:items="feedItems"
				:content="{ align: 'end' }"
				:external-icon="false"
			>
				<UButton
					icon="i-lucide-rss"
					color="neutral"
					variant="ghost"
					:aria-label="$t('feed.feeds')"
					:title="$t('feed.feeds')"
				>
					{{ $t('feed.feeds') }}
				</UButton>
			</UDropdownMenu>
			<UButton
				v-for="social in socials"
				:key="social.name"
				:icon="social.icon"
				color="neutral"
				variant="ghost"
				:to="social.link"
				target="_blank"
				:title="social.name"
				size="lg"
			/>
		</template>

		<template #bottom>
			<span class="flex flex-wrap flex-row items-center justify-around gap-x-3 gap-y-1.5 text-(--ui-text-muted) text-sm">
				<span>Copyright &copy;
					{{ new Date().getFullYear() }}
				</span>

				<span>
					<ULink to="/about#film-data">{{ $t('footer.filmData') }}</ULink>
					<div class="inline" /> from
					<ULink to="https://www.themoviedb.org/">TMDb</ULink>
				</span>
				<AppLanguageSwitch />
				<span>{{ $t('footer.madeWith') }}</span>
			</span>
		</template>
	</UFooter>
</template>

<script setup lang="ts">
import { contentFeeds, getFeedUrl } from '#shared/utils/feeds';

const { t } = useI18n();

const items = computed(() => [
	{
		label: t('footer.home'),
		to: '/',
	},
	{
		label: t('footer.about'),
		to: '/about',
	},
	{
		label: t('contact'),
		to: '/contact',
	},
]);

const feedItems = computed(() => contentFeeds.map(feed => ({
	label: t(feed.labelKey),
	icon: 'i-lucide-rss',
	to: getFeedUrl(feed, 'xml'),
	external: true,
})));

const { data: socials } = await useSocialsData();
</script>
