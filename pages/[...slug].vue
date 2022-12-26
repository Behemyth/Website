<template lang="pug">
div.max-w-4xl.px-4.py-10.mx-auto.bg-white(class="sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded")
  ContentDoc.prose.prose-gray.max-w-none(class="dark:prose-invert")
</template>

<style lang="postcss" scoped>
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;

  &:hover {
    @apply border-b border-neutral-600 border-neutral-300;
  }
}
</style>
