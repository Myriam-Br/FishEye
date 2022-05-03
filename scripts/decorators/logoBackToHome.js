function backToHome () {
  this.$logo = document.querySelector('.logo')
  this.$logo.addEventListener('click', () => {
    // window.location.assign('index.html')
    window.location.assign('index.html')
  })

  this.$logo.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      this.$logo.click()
    } else {
      // message error
    }
  })
}
// console.log(backToHome())
