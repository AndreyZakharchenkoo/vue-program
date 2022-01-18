const lazyLoadImg = {
  install (Vue) {
    Vue.directive('lazyload', {
      inserted: el => {
        function loadImage () {
          if (el) {
            el.addEventListener('error', () => console.error('Some error with img path'))
            el.addEventListener('load', function () {
              this.parentElement.classList.add('loaded')
            })
            el.src = el.dataset.src
          }
        }

        function handleIntersect (entries, observer) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              loadImage()
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
          loadImage()
        }
      }
    })
  }
}

export default lazyLoadImg
