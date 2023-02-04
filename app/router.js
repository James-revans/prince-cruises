import EmberRouter from '@ember/routing/router';
import config from 'prince-cruise/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cruise', { path: '/cruises/:cruise_id' });
});
