const lazyLoadImg = {
  install(Vue) {
    Vue.directive('lazyload', {
      inserted: (el) => {
        function loadImage() {
          if (el) {
            el.addEventListener('error', (err) => console.error('Incorrect path', err.srcElement.currentSrc, err));
            el.addEventListener('load', () => {
              el.parentElement.classList.add('loaded');
            });
            // eslint-disable-next-line no-param-reassign
            el.src = el.dataset.src;
          }
        }

        function handleIntersect(entries, observer) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(el);
            }
          });
        }

        function createObserver() {
          const options = {
            root: null,
            threshold: '0',
          };
          const observer = new IntersectionObserver(handleIntersect, options);
          observer.observe(el);
        }

        if (window.IntersectionObserver) {
          createObserver();
        } else {
          loadImage();
        }
      },
    });
  },
};

export default lazyLoadImg;
