<template>
	<article class="flex flex-col min-h-dvh max-w-5xl mx-auto">
		<AppHeader />
		<div class="grow px-4 py-4 prose dark:prose-invert">
			<slot />
		</div>
		<AppFooter />
	</article>
</template>
