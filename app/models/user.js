import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  image: DS.attr('string'),
  admin: DS.attr('boolean', { defaultValue: false }),
  offers: DS.hasMany('offer', { async: false })
});
