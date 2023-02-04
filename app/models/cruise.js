import Model, { attr } from '@ember-data/model';

export default class CruiseModel extends Model {
  @attr('string') location;
  @attr('number') length;
  @attr('date') departure;
  @attr('string') port;
  @attr('string') ship;
  @attr('string') description;
  @attr('string') price;
  @attr('array') amenities;
  @attr('array') images;
}
