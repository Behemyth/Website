<template lang="pug">
div
	main.prose.max-w-5xl.px-4.py-4.mx-auto(class="dark:prose-invert")
		slot
	script(defer src="https://cdn.commento.io/js/commento.js")
	div(id="commento")
</template>
