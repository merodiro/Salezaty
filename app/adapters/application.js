import DS from 'ember-data';

// app/adapters/application.js
export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000'
});
