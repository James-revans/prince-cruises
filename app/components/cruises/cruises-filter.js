import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { cloneDeep } from 'lodash';

export default class CruisesFilterComponent extends Component {
  emptyFilter = {
    location: [],
    length: [],
    departure: [],
    port: [],
    ship: [],
  };
  @tracked showModal = false;
  @tracked filters = cloneDeep(this.emptyFilter);
  @tracked draftFilters = cloneDeep(this.emptyFilter);

  get parsedFormOptions() {
    const allCruises = this.args.cruises;
    const formFields = allCruises.reduce((cruisesParsed, cruise) => {
      for (let [key, val] of Object.entries(
        cruise.getProperties('location', 'length', 'departure', 'port', 'ship')
      )) {
        if (key === 'departure') {
          val = val.toLocaleString('en-us', { month: 'long' });
        }
        if (cruisesParsed.hasOwnProperty(key)) {
          if (!cruisesParsed[key].includes(val)) {
            cruisesParsed[key].push(val);
          }
        } else {
          cruisesParsed[key] = [val];
        }
      }
      return cruisesParsed;
    }, {});
    return formFields;
  }

  @action selectItem(value, category, e) {
    let inputVal = value;
    const inputCategory = category;
    const checked = e.target.checked;

    if (inputCategory === 'length') {
      inputVal = parseInt(inputVal);
    }
    if (checked) {
      this.draftFilters[category].push(inputVal);
    } else {
      this.draftFilters[category].splice(
        this.draftFilters[category].indexOf(inputVal),
        1
      );
    }
    // Assign filters to itself to trigger an update
    this.draftFilters = this.draftFilters;
  }

  @action showCruises() {
    // Filter and show cruises
    // Loop through all cruises and filter based on our filters
    // Each cruise needs to meet all the criteria

    this.filters = cloneDeep(this.draftFilters);
    const filteredCruises = this.args.cruises.filter((cruise) => {
      let isMatch = true;
      // Grabbing these properties from ember data seems weird
      for (let [key, val] of Object.entries(
        cruise.getProperties('location', 'length', 'departure', 'port', 'ship')
      )) {
        let valueToCheck = val;
        if (key === 'departure') {
          valueToCheck = valueToCheck.toLocaleString('en-us', {
            month: 'long',
          });
        }
        if (
          this.filters[key].length > 0 &&
          !this.filters[key].includes(valueToCheck)
        ) {
          isMatch = false;
        }
      }
      return isMatch;
    });
    this.showModal = false;
    // Set the cruises to be displayed via the arg setFilteredCruises
    this.args.setFilteredCruises(filteredCruises);
    return filteredCruises;
  }

  @action clearAll() {
    this.draftFilters = cloneDeep(this.emptyFilter);
    this.showCruises();
  }

  @action toggleModal() {
    // Reset the draft to the saved filters
    this.draftFilters = cloneDeep(this.filters);
    this.showModal = !this.showModal;
  }
}
