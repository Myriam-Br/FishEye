class DisplayMedia{

    constructor(Medias){

        //media card wrapper
        this.name = localStorage.getItem('name')
        this.$mediaCard = document.createElement('div')
        this.$mediaCard.setAttribute('id', 'media_card_section')
        this.Medias = Medias
        this.LikesSubject = LikesSubject
        //console.log(this.Medias);
        //console.log(this.name);
        //console.log(LikesSubject);
        //console.log(LikesCounter);
    }

    handleLikedButton() {
        const that = this
        //console.log(that.$mediaCard);
        
        this.$mediaCard.querySelector('.media_card')
            .querySelector('.btn-like')
            .addEventListener('click', function() {
                if (this.classList.contains('liked')) {
                    this.classList.remove('liked')
                    this.LikesSubject.fire('DEC')
                    console.log(this.LikesSubject.fire('DEC'));
                    
                } else {
                    this.classList.add('liked')
                    this.LikesSubject.fire('INC')
                }
            })
    }

    
    getMediaCardDOM(){

      
        this._name = this.name.substring(0, this.name.indexOf(' '));
        //console.log('NAME',this._name);

        this.Medias.forEach(media => {
            
            const mediaCardDiv = document.createElement('div')
            mediaCardDiv.classList.add('media_card')

            //console.log(media);
            if(media._video == undefined) {
                const image = document.createElement('img')
                image.setAttribute('src', `/media/${this._name}/${media.type}`)
                mediaCardDiv.appendChild(image)
    
            }else if(media._video) {
                const video = document.createElement('video')
                video.setAttribute('controls', '')
                video.classList.add('video')
                const sourceVideo = document.createElement('source')
                video.appendChild(sourceVideo)
                sourceVideo.setAttribute('src',  `/media/${this._name}/${media.type}`)
                sourceVideo.setAttribute('type', 'video/mp4')
                mediaCardDiv.appendChild(video)
            }else{
                console.log('error');
            }
    
    
            const divTitleLikes = document.createElement('div')
            divTitleLikes.classList.add('title_likes')
    
            const title = document.createElement('h3')
            title.innerHTML = media.title
    
            const likesCountButton = document.createElement('button')
            const likesIcon = document.createElement('i')
            likesIcon.setAttribute('class', 'fa-solid fa-heart')
            const likesCount = document.createElement('p')
            likesCount.classList.add('like_count')
            likesCount.innerHTML = media.likes
    
            likesCountButton.setAttribute('class', 'btn-like')
            likesCountButton.appendChild(likesIcon)
            likesCountButton.appendChild(likesCount)
            divTitleLikes.appendChild(title)
            divTitleLikes.appendChild(likesCountButton)

            mediaCardDiv.appendChild(divTitleLikes)
            this.$mediaCard.appendChild(mediaCardDiv)

            this.handleLikedButton()
        });

        
          
            return  this.$mediaCard

    }

    
  
}