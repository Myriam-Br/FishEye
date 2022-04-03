class DisplayMedia{

    constructor(Medias){

        //media card wrapper
        this.name = localStorage.getItem('name')

        this.$main = document.getElementById('main')
 
        this.$mediaCard = document.createElement('div')
        this.$mediaCard.setAttribute('id', 'media_card_section')

       this.$totalLikes = document.getElementById('total_likes_section')
        this.Medias = Medias

      
    
       // console.log(document.getElementById('total_likes_ssection'));
    }




    handleLikedButton(id) {
        
        const that = this
        const el = that.$mediaCard.querySelector("[id='"+id+"']")
        //console.log(el.querySelector('.like_count'));
        let totalLikes  =   that.$totalLikes.querySelector('#total_likes')
        let likeCount = el.querySelector('.like_count')
        //console.log(totalLikes.innerHTML);

        //console.log(el.classList.add('likes'));
       // console.log(el);
       // console.log(this);
    
        el.addEventListener('click', function() {
  
                //console.log(this.name);
               if (el.classList.contains('liked') &&  likeCount.classList.contains('liked') ) { 
   
                    el.classList.remove('liked') 
                    likeCount.classList.remove('liked')
                    //console.log(likeCount);

                    let likeCountScore = likeCount.innerHTML     
                    let updateLikeCount = parseInt(likeCountScore) - 1
                    likeCount.innerHTML = updateLikeCount     

        
                    totalLikes.innerHTML = parseInt(totalLikes.innerHTML) - 1
                   
                } 

                
                else {
                    el.classList.add('liked')
                    likeCount.classList.add('liked')

                    //console.log(likeCount);

                    let likeCountScore = likeCount.innerHTML     
                    let updateLikeCount = parseInt(likeCountScore) + 1  
                    likeCount.innerHTML = updateLikeCount  

                    totalLikes.innerHTML = parseInt(totalLikes.innerHTML) + 1
                }       
                
                
               // console.log(el.querySelector('.like_count').innerHTML);
               // console.log(that.totalLikes);
       
        }) 
    }


    getMediaCardDOM(Medias){
        
        const that = this
        //console.log(that);
        console.log(Medias);
        this._name = this.name.substring(0, this.name.indexOf(' '));
        //console.log('NAME',this._name);
        Medias.forEach(media => {
            
            const mediaCardDiv = document.createElement('div')
            mediaCardDiv.classList.add('media_card')

            //console.log(media);
            if(media._video == undefined) {
                const image = document.createElement('img')
                image.setAttribute('id', 'media' + media.id)
                image.setAttribute('src', `/media/${this._name}/${media.type}`)
                image.setAttribute('alt', media.type.split('.jpg')[0])
                mediaCardDiv.appendChild(image)
    
            }else if(media._video) {
                const video = document.createElement('video')
                video.setAttribute('controls', '')
                video.classList.add('video')
                video.setAttribute('aria-label', media.type.split('.mp4')[0])
                const sourceVideo = document.createElement('source')
                video.appendChild(sourceVideo)
                sourceVideo.setAttribute('src',  `/media/${this._name}/${media.type}`)
                sourceVideo.setAttribute('type', 'video/mp4')
                sourceVideo.setAttribute('id', 'media' + media.id)
                mediaCardDiv.appendChild(video)
            }else{
                console.log('error');
            }
    
    
            const divTitleLikes = document.createElement('div')
            divTitleLikes.classList.add('title_likes')
    
            const title = document.createElement('h3')
            title.setAttribute('aria-label', media.title)
            title.setAttribute('class', 'media_title')
            title.innerHTML = media.title
    
            const likesCountButton = document.createElement('button')

            const likesIcon = document.createElement('i')
            likesIcon.setAttribute('class','fa-solid fa-heart')
            //console.log(likesIcon);
            const likesCount = document.createElement('p')
            likesCount.classList.add('like_count')
            likesCount.setAttribute('id','like_count' + media.id)
            likesCount.innerHTML = media.likes
    
            //console.log(media.id);
            likesCountButton.setAttribute('class', 'btn-like')
            likesCountButton.setAttribute('id', 'btn_' + media.id)
            likesCountButton.setAttribute('aria-label', 'bouton-like')
            likesCountButton.appendChild(likesIcon)
            likesCountButton.appendChild(likesCount)
            divTitleLikes.appendChild(title)
            divTitleLikes.appendChild(likesCountButton)

            mediaCardDiv.appendChild(divTitleLikes)
            this.$mediaCard.appendChild(mediaCardDiv)

            
            this.handleLikedButton('btn_' + media.id)
            
            //this.playerModal(media.id)
            
        });

        
            return  this.$mediaCard

    }

}