function backToHome() {
    this.$logo = document.querySelector('.logo')
    this.$logo.addEventListener('click',()=> {
        window.location.assign("index.html")
    })
}