<template>
  <div>
    <div>
      <b-btn @click="authenticate('google')">
        <font-awesome-icon :icon="['fab', 'google']" />
      </b-btn>
    </div>
  </div>
</template>

<script>
export default {
    auth: false,
    methods: {
        authenticate (provider) {
        this.$auth.loginWith(provider, { params: { prompt: 'select_account' } })
        }
    }
}
</script>

<style>

</style>
