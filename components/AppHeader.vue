<template lang="pug">
div.flex.justify-between.max-w-4xl.px-4.py-4.mx-auto(class="sm:px-8")
  div.text-gray-700(class="dark:text-gray-200")
    ContentNavigation(v-slot="{ navigation }")
      NuxtLink.mr-4(v-for="link of navigation" :key="link._path" :to="link._path" active-class="font-bold") {{ link.navTitle || link.title }}

  div.space-x-3.text-gray-500.transition
    ColorModeSwitch(class="hover:text-gray-700 dark:hover:text-gray-300")

</template>
