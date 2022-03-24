class DisplayMedia{

    constructor(Medias){

        //media card wrapper
        this.name = localStorage.getItem('name')
        this.$mediaCard = document.createElement('div')
        this.$mediaCard.setAttribute('id', 'media_card_section')
        this.Medias = Medias
    
       // console.log(document.getElementById('total_likes_ssection'));
    }


   

    handleLikedButton(id) {
        const that = this
        const el = that.$mediaCard.querySelector("[id='"+id+"']")
        //console.log(el.classList.add('likes'));
       // console.log(el);
       // console.log(this);
    
        el.addEventListener('click', function() {
  
                //console.log(this.name);
               if (el.classList.contains('liked')) { 
   
                    el.classList.remove('liked') 
                    let likeCount = this.querySelector('.like_count')        
                    let likeCountScore = likeCount.innerHTML     
                    let updateLikeCount = parseInt(likeCountScore) - 1

                    likeCount.innerHTML = updateLikeCount     
                    console.log(el.querySelector('.like_count').innerHTML); 
                } 
                
                else {
                    el.classList.add('liked')
                    let likeCount = this.querySelector('.like_count')
                    //console.log(likeCount);  
                    let likeCountScore = likeCount.innerHTML     
                    let updateLikeCount = parseInt(likeCountScore) + 1
                 
                    likeCount.innerHTML = updateLikeCount  
                    console.log(el.querySelector('.like_count').innerHTML);
                }       
                
                console.log(el.querySelector('.like_count').innerHTML);
       
        })

    }

  


    playerModal(id) {
        //console.log(id);
        const that = this
        const elt = that.$mediaCard.querySelector("[id='"+id+"']")
        //console.log(elt);
        elt.addEventListener('click',function() {
            const mediaModal = document. createElement('div')
            mediaModal.setAttribute('id', 'mediaModal')
            
                const mediaCardModal = document.createElement('img')
                mediaCardModal.setAttribute('src', elt.src.split("http://127.0.0.1:5501")[1])
                //console.log('MEDIA',elt.src.split("http://127.0.0.1:5501")[1]);
                //console.log(mediaCardModal);
 
                const close_btn = document.createElement('button')
                close_btn.classList.add('close_btn')
                                       
                mediaModal.appendChild(mediaCardModal)
                mediaModal.appendChild(close_btn)
                that.$mediaCard.appendChild(mediaModal) 


                close_btn.addEventListener('click', () => {
                    mediaModal.style.display='none'
                })        
            }   
        )    
    }


    totalLikes(){
        console.log(this);
        const that = this
        console.log(that.$mediaCard.getElementsByClassName('like_count').length);
        for(let i = 0; i < that.$mediaCard.getElementsByClassName('like_count').length; i++){
            console.log(that.$mediaCard.getElementsByClassName('like_count')[i].innerHTML);
        }
        
    }
    
    getMediaCardDOM(){
        const that = this
        //console.log(that);
        
        this._name = this.name.substring(0, this.name.indexOf(' '));
        //console.log('NAME',this._name);
        this.Medias.forEach(media => {
            
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
            title.innerHTML = media.title
    
            const likesCountButton = document.createElement('button')

            const likesIcon = document.createElement('i')
            likesIcon.setAttribute('class', 'fa-solid fa-heart')
            const likesCount = document.createElement('p')
            likesCount.classList.add('like_count')
            likesCount.setAttribute('id','like_count' + media.id)
            likesCount.innerHTML = media.likes
    
            //console.log(media.id);
            likesCountButton.setAttribute('class', 'btn-like')
            likesCountButton.setAttribute('id', 'btn_' + media.id)
            likesCountButton.appendChild(likesIcon)
            likesCountButton.appendChild(likesCount)
            divTitleLikes.appendChild(title)
            divTitleLikes.appendChild(likesCountButton)

            mediaCardDiv.appendChild(divTitleLikes)
            this.$mediaCard.appendChild(mediaCardDiv)

            
            this.handleLikedButton('btn_' + media.id)
            this.playerModal('media' + media.id)
            
        });
            this.totalLikes()
            return  this.$mediaCard

    }

}