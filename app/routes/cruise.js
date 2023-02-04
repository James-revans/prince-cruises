import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CruiseRoute extends Route {
  @service store;

  async model(params) {
    return await this.store.findRecord('cruise', params.cruise_id);
  }
}
