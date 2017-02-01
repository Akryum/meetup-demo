<template>
  <div>
    <h1>Page 1</h1>
    <input v-model="message" />
    <button @click="handle">Click me</button>
  </div>
</template>

<script>
import store from '../store'

export default {
  computed: {
    message: {
      get () {
        return store.message
      },
      set (val) {
        store.message = val
      },
    },
  },

  methods: {
    handle () {
      this.$emit('hello')
    },
  },
}
</script>
