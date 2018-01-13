const preload = preloader => {
  const TIMEOUT = 10000;

  const images = document.querySelectorAll('img');
  const videos = document.querySelectorAll('video source');
  const percentsContainer = preloader.querySelector('.preloader__percents');
  let percents = 0;

  const getPaths = media => media.map(item => item.src);
  const getBgPaths = () => {
    return [...document.querySelectorAll('*')].reduce((acc, next) => {
      const bg = getComputedStyle(next).backgroundImage;

      if (bg !== 'none') {
        acc.push(bg.replace('url("', '').replace('")', ''));
      }

      return acc;
    }, []);
  };

  const getAllMediaPaths = (images, videos) => {
    const videosPaths = getPaths([...videos]);
    const imgPaths = getPaths([...images]).concat(getBgPaths());

    return {
      img: imgPaths,
      video: videosPaths
    };
  };

  const paths = getAllMediaPaths(images, videos);
  const portion = 100 / (paths.video.length + paths.img.length);

  const load = (element, url, event, success) => {
    const mediaElement = document.createElement(element);
    mediaElement.src = url;

    return new Promise((resolve, reject) => {
      mediaElement.addEventListener(event, resolve);
      mediaElement.addEventListener('error', resolve);
      setTimeout(resolve, TIMEOUT);
    });
  };

  const success = () => {
    percents += portion;
    percentsContainer.textContent = `${Math.floor(percents)}%`;
  };

  const imgPromises = paths.img.map(item =>
    load('img', item, 'load').then(success)
  );
  const videoPromises = paths.video.map(item =>
    load('video', item, 'loadeddata').then(success)
  );

  Promise.all(imgPromises.concat(videoPromises)).then(() => {
    preloader.classList.add('preloader--closed');
    preloader.addEventListener('transitionend', () => {
      preloader.style.display = 'none';
    });
  });
};

export default preload;
