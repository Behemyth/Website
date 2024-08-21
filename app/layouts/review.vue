<template>
	<main class="flex flex-col min-h-dvh prose max-w-5xl mx-auto dark:prose-invert">
		<AppHeader />
		<div class="grow px-4 py-4">
			<slot />

		</div>
		<DiscussionList
		category="Movies"/>
		<AppFooter />
	</main>
</template>
