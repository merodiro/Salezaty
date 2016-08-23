import Ember from 'ember';

export default Ember.Component.extend({
      store: Ember.inject.service(),
      actions: {
        submit: function() {
          var store = this.get('store');
          let offer = store.createRecord('offer', {
            name: this.get('name'),
            description: this.get('description'),
            price: this.get('price'),
            discount: this.get('discount'),
            images: this.get('images')
          });
           store.findRecord('user', "-KPpVaSv2LXJTP_ZO1M4").then(function(user) {
               offer.set('user', user);
               offer.save();

              // user.get('offers').addObject(this.store.createRecord('offer', {
              //   name: this.get('name'),
              //   description: this.get('description'),
              //   price: this.get('price'),
              //   discount: this.get('discount'),
              //   images: this.get('images')
              // }));
              // user.save();
            });
          }
        }
      });
