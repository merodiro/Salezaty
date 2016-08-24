import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    confirmSignOut() {
      this.get('onConfirm')();
    }
  }
});
