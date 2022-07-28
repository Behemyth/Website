<template lang="pug">
footer.p-4.bg-white.shadow(class="dark:bg-gray-900")
  div(class="md:flex md:justify-between")
    div(class="mb-6 md:mb-0")
      NuxtLink.flex.items-center(to="/")
        img.mr-3.h-12.rounded-full(src="https://www.gravatar.com/avatar/293a56bef971ab4999d6230491957d33?s=200" alt="Asher's Face")
        span.self-center.text-2xl.font-semibold.whitespace-nowrap(class="dark:text-white") Asher Norland
  hr.my-4.border-gray-200(class="sm:mx-auto dark:border-gray-700")
  div(class="sm:flex sm:items-center sm:justify-between")
    span.text-sm.text-gray-500(class="sm:text-center dark:text-gray-400") Copyright &copy; {{ new Date().getFullYear() }}
    span.flex.mt-4.text-sm.text-gray-500(class="sm:justify-center sm:mt-0") Made with ❤️ by Asher and Ola
</template>

<script setup>

</script>
