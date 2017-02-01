<template>
  <div id="app" :class="cssClass">
    <app-menu v-bind:hide-page2="hidePage2"/>
    <router-view @hello="handle"></router-view>
    <button @click="hidePage2 = !hidePage2">Toggle Page 2</button>
  </div>
</template>

<script>
import AppMenu from './Menu.vue'

export default {
  components: {
    AppMenu,
  },

  data () {
    return {
      hidePage2: false,
    }
  },

  computed: {
    cssClass () {
      return [
        {
          secondary: this.secondary,
        },
        'app',
      ]
    },

    secondary () {
      return this.$route.matched.some(part => part.meta.secondary)
    },
  },

  methods: {
    handle () {
      console.log('hello')
    },
  },
}
</script>

<style lang="less">
@color: #40b883;

#app {
  font-family: sans-serif;
  color: @color;

  &.secondary {
    background: blue;
  }
}
</style>
