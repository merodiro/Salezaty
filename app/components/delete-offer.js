import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  notify: Ember.inject.service('notify'),
  actions: {
    confirmRemove: function(the_id) {
      var notify = this.get('notify');
      var store = this.get('store');
      store.find('offer', the_id).then(function(rec) {
        rec.destroyRecord();
        notify.alert('Offer has been deleted successfully');
      });
    }
  }
});
