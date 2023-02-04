import { helper } from '@ember/component/helper';

function isChecked(args) {
  let [filters, category, value] = args;
  return filters[category].includes(value);
}

export default helper(isChecked);
