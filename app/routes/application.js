import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
    this.get('session').fetch().catch((error) => {
      console.log(error);
    });
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', {
        provider: provider
      }).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
