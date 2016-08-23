import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeOffer: function(the_id) {
      this.get('store').find('offer', the_id).then(function(rec) {
        rec.destroyRecord();
      });
    }
  }
});
