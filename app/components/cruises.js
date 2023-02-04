import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CruiseFormComponent extends Component {
  @tracked filteredCruises = this.args.cruises;

  @action setFilteredCruises(cruises) {
    this.filteredCruises = cruises;
  }
}
