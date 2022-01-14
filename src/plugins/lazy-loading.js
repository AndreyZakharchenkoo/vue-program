const lazyLoadImg = {
  install (Vue) {
    Vue.directive('lazyload', {
      inserted: el => {
        function loadImage () {
          const imageElement = Array.from(el.children).find(
            el => el.nodeName === 'IMG'
          )
          if (imageElement) {
            imageElement.addEventListener('load', () => {
              el.classList.add('loaded')
            })
            imageElement.addEventListener('error', () => console.error('Some error with img path'))
            imageElement.src = imageElement.dataset.src
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
