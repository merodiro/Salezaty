import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  discount: DS.attr('number'),
  images: DS.attr('string'),
  user: DS.belongsTo('user')
});
