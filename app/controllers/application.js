import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  notify: Ember.inject.service('notify'),
  actions: {
    signOut() {
      var notify = this.get('notify');
      this.get('session').close();
      notify.warning('You have signed out successfully');
    }
  }
});
