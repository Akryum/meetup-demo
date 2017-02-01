import { Items } from './collection'

Meteor.methods({
  'add-item' (url, type) {
    Items.insert({
      url,
      type,
    })
  },
})
