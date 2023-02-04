import { helper } from '@ember/component/helper';

function parseDate(args) {
  return args[0].toDateString();
}

export default helper(parseDate);
