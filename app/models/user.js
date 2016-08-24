import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  email: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  offers: DS.hasMany('offer', { async: false })
});
