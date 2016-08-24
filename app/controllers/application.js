import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  actions: {
    signOut() {
      this.get('session').close();
    }
  }
});
