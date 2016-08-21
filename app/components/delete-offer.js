import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
   confirmRemove: function(the_id){
     this.get('onConfirm',the_id)();
   }
 }
});
