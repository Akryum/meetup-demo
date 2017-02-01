<template>
  <div>
    <h1>Page 2</h1>
    <p>
      {{ id }}
    </p>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
import store from '../store'

export default {
  computed: {
    id () {
      return this.$route.params.id
    },

    test () {
      this.$root.message = ''
    },

    message () {
      return store.message
    },
  },
}
</script>
