<template >
main.flex.flex-col.min-h-dvh.prose.max-w-5xl.mx-auto(class="dark:prose-invert")
	AppHeader
	.grow.px-4.py-4
		slot
	div(id="commento")
	AppFooter
</template>

<script setup lang="ts">

onMounted(() => {
	if (!document.getElementById('commento_script')) {
		const commentoScript = document.createElement('script')
		commentoScript.setAttribute('src', 'https://cdn.commento.io/js/commento.js')
		commentoScript.defer = true
		commentoScript.id = 'commento_script'

		document.head.appendChild(commentoScript)
	}
})

</script>
