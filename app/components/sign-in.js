import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  notify: Ember.inject.service('notify'),
  actions: {
    signIn(provider) {
      var notify = this.get('notify');
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        controller.set('email', null);
        controller.set('password', null);
        this.$('#sign-in').modal('hide');
        notify.success('You have logged in successfully');
      }, (error) => {
        console.log(error);
      });
    }
  }
});
