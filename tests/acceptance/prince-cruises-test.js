import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | prince cruises', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h4').hasText('Prince Cruises');
    assert.dom('nav').exists();
    assert.dom('button').hasText('Filters');
  });
});
