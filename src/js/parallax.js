export const mouseMoveParallax = () => {
  const parallaxContainer = document.querySelector('.parallax');

  if (!parallaxContainer) return false;

  const layers = parallaxContainer.children;
  const moveLayers = evt => {
    const initialCoords = {
      x: window.innerWidth / 2 - evt.pageX,
      y: window.innerHeight / 2 - evt.pageY
    };

    let i = 0;
    for (let layer of layers) {
      const divider = i / 80;
      const positionCoords = {
        x: initialCoords.x * divider,
        y: initialCoords.y * divider
      };

      const bottomPosition = window.innerHeight / 2 * divider;
      const image = layer.firstElementChild;

      if (image.tagName.toUpperCase() === 'IMG') {
        layer.style.transform = `translate(${positionCoords.x}px, ${positionCoords.y}px)`;
        image.style.bottom = `-${bottomPosition}px`;
      }

      i++;
    }
  };

  if (window.innerWidth >= 768) {
    window.addEventListener('mousemove', moveLayers);
  } else {
    window.removeEventListener('mousemove', moveLayers);
  }
};

export const scrollParallax = () => {
  const bg = document.querySelector('.hero__bg');
  const user = document.querySelector('.hero__box');

  const move = (block, windowScroll, strafeAmount) => {
    const strafe = -windowScroll * strafeAmount + 'px';

    block.style.transform = `translateY(${strafe})`;
  };

  const init = wScroll => {
    move(bg, wScroll, 0.1);
    move(user, wScroll, 0.3);
  };

  window.addEventListener('scroll', evt => {
    init(window.pageYOffset);
  });
};
