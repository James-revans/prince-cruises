import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cruises', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders details about a cruise', async function (assert) {
    this.setProperties({
      cruise: {
        location: 'Alaska',
        length: 5,
        departure: new Date('2023-04-01'),
        port: 'Seattle',
        ship: 'Crown Prince',
        description:
          'Embark on a breathtaking journey to Alaska with the Crown Prince, a magnificent ship that promises an unforgettable cruise experience. This 5-day trip will take you to some of the most beautiful and breathtaking destinations in Alaska, offering a unique chance to experience the stunning natural beauty of the region. The ship will depart from Seattle port and you will be able to enjoy all the amenities that the Crown Prince has to offer, including 24-hour room service, a spa, a gym, multiple dining options, and on-board entertainment. Get ready for a once-in-a-lifetime adventure in the land of glaciers and wildlife!',
        price: 2000,
        amenities: [
          '24-hour room service',
          'spa',
          'gym',
          'multiple dining options',
          'on-board entertainment',
        ],
        images: [
          'https://images.unsplash.com/photo-1511316695145-4992006ffddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
          'https://images.unsplash.com/photo-1664969211279-516190ca0672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
          'https://images.unsplash.com/photo-1614054145339-4a25fd7673a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80',
          'https://images.unsplash.com/photo-1593326101816-dd0c165b3ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
          'https://images.unsplash.com/photo-1576814485347-8b4e9861e74d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2348&q=80',
        ],
      },
    });
    await render(hbs`<Cruise::Details 
        @cruise={{this.cruise}}
    />`);

    assert.dom('h1').containsText('Alaska');
    assert
      .dom('.cruise_body_details_section')
      .containsText('5 day Alaska cruise');
    assert.dom('.cruise_body_details_section').containsText('Fri Mar 31 2023');
    // WIP....
  });
});
