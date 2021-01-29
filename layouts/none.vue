<template>
  <div>
      <Nuxt keep-alive :nuxt-child-key="$route.fullPath" />
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>