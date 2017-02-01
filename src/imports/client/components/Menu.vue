<template>
  <nav>
    <router-link :to="{ name: 'page1' }">Page 1</router-link>
    <router-link v-if="!hidePage2" :to="{ name: 'page2' }">Page 2</router-link>
  </nav>
</template>

<script>
export default {
  props: {
    hidePage2: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
