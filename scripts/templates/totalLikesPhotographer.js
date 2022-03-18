class TotalLikesCard{
    constructor(Medias) {
        this.$wrapper = document.createElement('div')
        this.$wrapper.classList.add('total_likes_section')
        this.Medias = Medias
        //console.log('media', Medias);
    }

    totalLikesDom(){

        const totalLikes = []
        const reducer = (accumulator, curr) => accumulator + curr;
       this.Medias.forEach(media => {
        totalLikes.push(media.likes)        
       });
       localStorage.setItem('total likes', totalLikes.reduce(reducer))

       
        const totalLikesSection = document.createElement('p')
        totalLikesSection.classList.add('total_likes')
        totalLikesSection.innerHTML = localStorage.getItem('total likes')

        const price = document.createElement('p')
        price.classList.add('price')
        price.innerHTML = localStorage.getItem('price') + '/' + 'jour'
        


        this.$wrapper.appendChild(totalLikesSection)
        this.$wrapper.appendChild(price)

       

        return this.$wrapper

    }
}