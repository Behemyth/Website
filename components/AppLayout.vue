<template lang="pug">
Html(lang="en")
div.flex.flex-col.min-h-screen
  AppHeader
  div.grow
    slot
  AppFooter
</template>
