<template>
  <div class="container p-md-5">
    <b-card :bg-variant="$colorMode.preference === 'dark'?'dark':'white'">
        <p class='text-center mb-3 font-weight-bold'>{{title}}</p>
        <p v-html="html" style="width:100%" />
        <p class='text-center mt-0' v-if="html!==''"><small>Updated at: {{time}}</small></p>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    }
  },
}
</script>

<style>

@media only screen and (max-width: 600px) {
  a>img{
    width:92% !important;
    min-width: 0px !important;
  }
}
</style>
