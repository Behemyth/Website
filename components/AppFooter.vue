<template lang="pug">
footer.p-4.bg-white.shadow(class="md:px-6 md:py-8 dark:bg-gray-900")
  div(class="md:flex md:justify-between")
    div(class="mb-6 md:mb-0")
      NuxtLink.flex.items-center(to="/")
        img.mr-3.h-12.rounded-full(src="https://www.gravatar.com/avatar/293a56bef971ab4999d6230491957d33?s=200" alt="Asher's Face")
        span.self-center.text-2xl.font-semibold.whitespace-nowrap(class="dark:text-white") Asher Norland
  hr.my-6.border-gray-200(class="sm:mx-auto dark:border-gray-700 lg:my-8")
  small Copyright &copy; {{ new Date().getFullYear() }} - Made with ❤️ by Asher and Ola
</template>

<script setup>

</script>
