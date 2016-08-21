import DS from 'ember-data';

// app/adapters/application.js
export default DS.JSONAPIAdapter.extend({
  host: 'https://salezaty-api.herokuapp.com'
});
