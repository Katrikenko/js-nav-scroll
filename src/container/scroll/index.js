window.buttonScroll.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

// setInterval(() => {
//   if (window.scrollY >= window.innerHeight) {
//     window.buttonScroll.style.display = 'flex'
//   } else {
//     window.buttonScroll.style.display = 'none'
//   }
// }, 500)

let isDisplay = false

setInterval(() => {
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    isDisplay = true
    window.buttonScroll.style.display = 'flex'

    return null
  }
  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    isDisplay = false
    window.buttonScroll.style.display = 'none'

    return null
  }
}, 200)
