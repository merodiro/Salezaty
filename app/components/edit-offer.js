import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    edit: function(the_id) {
      var store = this.get('store');
      store.find('offer', the_id).then(function(rec) {
        rec.save();
      });
    }
  }
});
