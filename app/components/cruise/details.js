import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CruiseDetailsComponent extends Component {
  @tracked carouselIndex = 0;
  @tracked isCarouselActive = false;

  @action startCarousel(imgIndex) {
    this.carouselIndex = imgIndex;
    this.isCarouselActive = true;
  }
}
