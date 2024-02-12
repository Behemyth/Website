<template lang="pug">
main.prose.max-w-5xl.px-4.py-4.mx-auto(class="dark:prose-invert")
	slot
	span.text-sm.text-gray-500(class="sm:text-center dark:text-gray-400") This review uses the TMDB API but is not endorsed or certified by TMDB.
</template>
