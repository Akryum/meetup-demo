
if (Meteor.isServer) {
  import './imports/server/server'
} else if (Meteor.isClient) {
  import './imports/client/client'
}
