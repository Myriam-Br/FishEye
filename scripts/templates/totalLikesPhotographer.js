class TotalLikesCard{
    constructor(Medias) {
        this.$wrapper = document.createElement('div')
        this.$wrapper.setAttribute('id','total_likes_section')
        this.Medias = Medias
        console.log('media', Medias);
        this.$mediaCardWrapper = document.getElementById('media_card_section')
        console.log(this.$mediaCardWrapper);
       
    }

   totalLikesDom(){

        const totalLikes = []
     
        const reducer = (accumulator, curr) => accumulator + curr;
        this.Medias.forEach(media => {
           let like_count = document.getElementById('like_count' + media.id).innerHTML
           like_count = parseInt( like_count)  
           //console.log(like_count);
            totalLikes.push(like_count)  
            
            //console.log( this.$mediaCardWrapper = document.getElementById('media_card_section').getElementsByClassName('.like_count'));
            
       }); 

       //console.log( this.$mediaCardWrapper = document.getElementById('media_card_section').querySelector('.like_count'));

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