import Ember from 'ember';

export default Ember.Component.extend({
  firebaseApp: Ember.inject.service(),
  store: Ember.inject.service(),
  notify: Ember.inject.service('notify'),
  actions: {
    signUp(email, pass) {
      var store = this.get('store');
      var notify = this.get('notify');
      const auth = this.get('firebaseApp').auth();
      auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
        this.$('#sign-up').modal('hide');
        notify.success('User has been created successfully');
        let user = store.createRecord('user', {
          id: userResponse.uid,
          email: userResponse.email,
          username: this.get('username'),
        });
        return user.save();
      });
    }
  }
});
