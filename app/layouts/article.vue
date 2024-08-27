<template>
	<article class="flex flex-col min-h-dvh max-w-5xl mx-auto">
		<AppHeader />
		<UContainer class="grow prose dark:prose-invert">
			<slot />
		</UContainer>
		<AppFooter />
	</article>
</template>
