class TotalLikesCard {
  constructor (Medias, photographer) {
    this.$wrapper = document.createElement('div')
    this.$wrapper.setAttribute('id', 'total_likes_section')
    this.Medias = Medias
    this.photographer = photographer
    // console.log('media', this.Medias);
    // console.log(this.photographer);
  }

  // creation totalLike DOM
  totalLikesDom () {
    const totalLikes = []

    const reducer = (accumulator, curr) => accumulator + curr
    this.Medias.forEach(media => {
      totalLikes.push(media._likes)

      // console.log( this.$mediaCardWrapper = document.getElementById('media_card_section').getElementsByClassName('.like_count'));
    })
    totalLikes.reduce(reducer)
    console.log(totalLikes.reduce(reducer))

    const totalLikesSection = document.createElement('p')
    totalLikesSection.classList.add('total_likes')
    totalLikesSection.setAttribute('id', 'total_likes')
    totalLikesSection.innerHTML = totalLikes.reduce(reducer)

    // changement filtre recupère like base
    totalLikesSection.addEventListener('update', e => {
      console.log(e.target)
      e.target.innerHTML = totalLikes.reduce(reducer)
    })

    const likesIcon = document.createElement('i')
    likesIcon.setAttribute('class', 'fa fa-heart')

    const price = document.createElement('p')
    price.classList.add('price')
    price.innerHTML = this.photographer.price + '€' + '/' + 'jour'

    this.$wrapper.appendChild(totalLikesSection)
    this.$wrapper.appendChild(likesIcon)
    this.$wrapper.appendChild(price)

    return this.$wrapper
  }
}
