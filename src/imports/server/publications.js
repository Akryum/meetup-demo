import { Items } from '../lib/collection'

Meteor.publish('items', function (type) {
  return Items.find({
    type,
  })
})
