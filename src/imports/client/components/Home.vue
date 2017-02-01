<template>
  <div>
    <input v-model="url" placeholder="URL" @keyup.enter="addItem" /><br />
    <label><input type="radio" v-model="type" value="JS" />JS</label><br />
    <label><input type="radio" v-model="type" value="PHP" />PHP</label>

    <div>
      <div v-for="item of items">
        {{ item.url }} <i>{{ item.type }}</i>
      </div>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor'
import { Items } from '../../lib/collection'

export default {
  data () {
    return {
      items: [],
      url: '',
      type: 'JS',
    }
  },

  meteor: {
    subscribe: {
      items () {
        return [this.type]
      },
    },
    items () {
      return Items.find()
    },
    /* items: {
      params () {
        // Vue
        return this.type
      },
      update (type) {
        // Tracker
        return Items.find({
          type,
        })
      },
    }, */
  },

  methods: {
    addItem () {
      Meteor.call('add-item', this.url, this.type)
      this.url = ''
    },
  },
}
</script>
