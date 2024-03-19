<template lang="pug">
main.grow.prose.max-w-5xl.px-4.py-4.mx-auto(class="dark:prose-invert")
	slot
	div(id="commento")
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
