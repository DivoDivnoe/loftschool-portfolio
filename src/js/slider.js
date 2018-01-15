class Slider {
  constructor(data) {
    this.length = data.length;
  }

  get curSlide() {
    if (!this._curSlide) {
      this.curSlide = 0;
    }

    return this._curSlide;
  }

  set curSlide(curSlide) {
    this._curSlide = curSlide;
  }

  nextSlide() {
    this.curSlide = this.curSlide === this.length - 1 ? 0 : this.curSlide + 1;
    this.slideHandler(this);

    return this.curElement;
  }

  prevSlide() {
    this.curSlide = !this.curSlide ? this.length - 1 : this.curSlide - 1;
    this.slideHandler(this);

    return this.curSlide;
  }

  slideHandler(slider) {
    return slider;
  }
}

const initSlider = sliderElement => {
  const list = sliderElement.querySelector('.slider__list');
  const items = list.children;

  const prev = document.querySelector('.portfolio__toggles-item--previous');
  const prevList = prev.querySelector('.portfolio__toggles-list--previous');
  const prevItems = prevList.children;

  const next = document.querySelector('.portfolio__toggles-item--next');
  const nextList = next.querySelector('.portfolio__toggles-list--next');
  const nextItems = nextList.children;

  const slider = new Slider({length: items.length});
  const prevSlider = new Slider({length: items.length});
  const nextSlider = new Slider({length: items.length});

  const slideHandler = (slider, list, className) => {
    for (let item of list) {
      if (!item.classList.contains(className)) continue;

      item.classList.remove(className);
    }

    list[slider.curSlide].classList.add(className);
  };

  slider.slideHandler = function() {
    slideHandler(this, items, 'slider__item--active');
  };

  prevSlider.slideHandler = function() {
    slideHandler(this, prevItems, 'portfolio__toggles-picture--active');
  };

  nextSlider.slideHandler = function() {
    slideHandler(this, nextItems, 'portfolio__toggles-picture--active');
  };

  const clickButton = callback => {
    next.removeEventListener('click', clickNextHandler);
    prev.removeEventListener('click', clickPrevHandler);

    list.addEventListener('transitionend', () => {
      next.addEventListener('click', clickNextHandler);
      prev.addEventListener('click', clickPrevHandler);
    });

    callback();
  };

  const clickNextHandler = () => {
    clickButton(() => {
      slider.nextSlide();
      nextSlider.nextSlide();
      prevSlider.nextSlide();
    });
  };
  const clickPrevHandler = () => {
    clickButton(() => {
      slider.prevSlide();
      nextSlider.prevSlide();
      prevSlider.prevSlide();
    });
  };

  next.addEventListener('click', clickNextHandler);
  prev.addEventListener('click', clickPrevHandler);

  prevSlider.prevSlide();
  nextSlider.nextSlide();

  items[slider.curSlide].classList.add('slider__item--active');
  prevItems[prevSlider.curSlide].classList.add(
    'portfolio__toggles-picture--active'
  );
  nextItems[nextSlider.curSlide].classList.add(
    'portfolio__toggles-picture--active'
  );
};

export default initSlider;
