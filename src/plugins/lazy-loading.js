function loadImage (el) {
  if (el) {
    el.addEventListener('error', () => console.error('Some error with img path'))
    el.addEventListener('load', function () {
      this.parentElement.classList.add('loaded')
    })
    el.src = el.dataset.src
  }
}

const lazyLoadImg = {
  install (Vue) {
    Vue.directive('lazyload', {
      inserted: el => {
        function handleIntersect (entries, observer) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              loadImage(el)
              observer.unobserve(el)
            }
          })
        }

        function createObserver () {
          const options = {
            root: null,
            threshold: '0'
          }
          const observer = new IntersectionObserver(handleIntersect, options)
          observer.observe(el)
        }

        if (window.IntersectionObserver) {
          createObserver()
        } else {
          loadImage(el)
        }
      },
      update: el => {
        loadImage(el)
      }
    })
  }
}

export default lazyLoadImg
