<template lang="pug">
Html(lang="en")
.flex.flex-col.min-h-screen
  AppHeader
  .grow
    slot
  AppFooter
</template>
