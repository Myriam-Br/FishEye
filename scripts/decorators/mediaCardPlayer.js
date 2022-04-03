function mediaCardPlayer(Medias) {

const mainWrapper = document.getElementById('main')
let modalPlayer = document.createElement('div')
modalPlayer.setAttribute('id', 'modal_player')

const btnNext = document.createElement('button')
btnNext.setAttribute('id', 'btn_next_media')
btnNext.setAttribute('aria-label', 'media suivant')
btnNext.innerHTML = '>'

const btnPrevious = document.createElement('button')
btnPrevious.setAttribute('id', 'btn_previous_media')
btnPrevious.setAttribute('aria-label', 'media précèdent')
btnPrevious.innerHTML = '<'

const closeBtn = document.createElement('button')
closeBtn.setAttribute('id', 'btn_close_modal')
closeBtn.setAttribute('aria-label', 'fermer modal image')
closeBtn.innerHTML = 'X'


let imageModal = document.createElement('img')
imageModal.classList.add('IMAGE')
imageModal.classList.add('media_modal')


let videoModal = document.createElement('video')
videoModal.setAttribute('controls', '')
videoModal.classList.add('VIDEO')
videoModal.classList.add('media_modal')

let videoSource = document.createElement('source')
videoSource.setAttribute('type', 'video/mp4')

videoModal.appendChild(videoSource)




const n = Medias.getElementsByClassName('media_card').length

modalPlayer.appendChild(btnPrevious)
modalPlayer.appendChild(btnNext)
modalPlayer.appendChild(closeBtn)
modalPlayer.appendChild(imageModal)
modalPlayer.appendChild(videoModal)


btnNext.addEventListener('click', () => {
    console.log('next');
    
    let id_media = modalPlayer.getAttribute('id_media')

    id_media = parseInt(id_media) + 1
    if(id_media == n ) {
        id_media = 0
    }

    modalPlayer.setAttribute('id_media', id_media)

    
    let imgNext = Medias.getElementsByClassName('media_card')[id_media].querySelector('img')
    let videoNext = Medias.getElementsByClassName('media_card')[id_media].querySelector('source')  
    let srcNext = ''

    videoModal.style.display = 'block'
    imageModal.style.display = 'block'

    if(imgNext) {
        //console.log(imageModal);  
        videoModal.style.display = 'none'
       //console.log('IMG SRC',Medias.getElementsByClassName('media_card')[id_media].querySelector('img').src); 
       srcNext = Medias.getElementsByClassName('media_card')[id_media].querySelector('img').src.split('http://127.0.0.1:5501')[1]
       imageModal.setAttribute('src', srcNext)
       
    } else if(videoNext) {
        //console.log(videoModal); 
        imageModal.style.display = 'none'
        //console.log('VIDEO SRC',Medias.getElementsByClassName('media_card')[id_media].querySelector('source').src);
        srcNext = Medias.getElementsByClassName('media_card')[id_media].querySelector('source').src.split('http://127.0.0.1:5501')[1]
        videoModal.setAttribute('src', srcNext)
    }


})


btnPrevious.addEventListener('click', () => {
    console.log('previous');
    let id_media = modalPlayer.getAttribute('id_media')

    id_media = parseInt(id_media) - 1
    if(id_media == -1 ) {
        id_media = n -1 
    }

    modalPlayer.setAttribute('id_media', id_media)
 
    let imgNext = Medias.getElementsByClassName('media_card')[id_media].querySelector('img')
    let videoNext = Medias.getElementsByClassName('media_card')[id_media].querySelector('source')
    let srcPrevious = ''

    videoModal.style.display = 'block'
    imageModal.style.display = 'block'

    if(imgNext) {
        //console.log(imageModal);  
        videoModal.style.display = 'none'
       //console.log('IMG SRC',Medias.getElementsByClassName('media_card')[id_media].querySelector('img').src); 
       srcPrevious = Medias.getElementsByClassName('media_card')[id_media].querySelector('img').src.split('http://127.0.0.1:5501')[1]
       imageModal.setAttribute('src', srcPrevious)
       
    } else if(videoNext) {
        //console.log(videoModal); 
        imageModal.style.display = 'none'
        //console.log('VIDEO SRC',Medias.getElementsByClassName('media_card')[id_media].querySelector('source').src);
        srcPrevious = Medias.getElementsByClassName('media_card')[id_media].querySelector('source').src.split('http://127.0.0.1:5501')[1]
        videoModal.setAttribute('src', srcPrevious)
    }
})



for(let i = 0; i < Medias.getElementsByClassName('media_card').length; i++) {
   const n = Medias.getElementsByClassName('media_card').length
   Medias.getElementsByClassName('media_card')[i].setAttribute('id_media', i)

   console.log(Medias.getElementsByClassName('media_card')[i].querySelector('.media_title').innerHTML);

  // console.log(Medias.getElementsByClassName('media_card')[i]);
   // console.log(n);
    let img =   Medias.getElementsByClassName('media_card')[i].querySelector('img')

    let video =   Medias.getElementsByClassName('media_card')[i].querySelector('video')
    let mediaType = ''
    let mediaTypeModal = ''


    if(video == null && img !== null){
        mediaType = img
        mediaTypeModal = imageModal
        mediaTypeModal.setAttribute('alt', Medias.getElementsByClassName('media_card')[i].querySelector('.media_title').innerHTML)
        //console.log('IMAGE',mediaType);

    }
    
    else if(img == null && video !== null){
        mediaType = video
        mediaTypeModal = videoModal    
        mediaTypeModal.setAttribute('aria-label', Medias.getElementsByClassName('media_card')[i].querySelector('.media_title').innerHTML)  
    } 

//console.log( Medias.getElementsByClassName('media_card')[i].querySelector('img'));
 
    //console.log(i);
   
    if(mediaType) {
        
        mediaType.addEventListener('click', () => {
            modalPlayer.style.display='block'
            modalPlayer.setAttribute('id_media', i)  

            
            let srcOnClick = ''
            if(mediaType == video) {
               
                imageModal.style.display = 'none'   
                srcOnClick = Medias.getElementsByClassName('media_card')[i].querySelector('source').src.split('http://127.0.0.1:5501')[1]             
            }else {
              
                videoModal.style.display = 'none'
                srcOnClick = Medias.getElementsByClassName('media_card')[i].querySelector('img').src.split('http://127.0.0.1:5501')[1]             
            }

            //console.log(mediaType);
        
            //console.log(mediaType.querySelector('source').getAttribute('src'));
          
                mediaTypeModal.setAttribute('src', srcOnClick)
                
                mediaTypeModal.setAttribute('id', 'modal_image_player')         
                mediaTypeModal.setAttribute('id_media', i)  
                modalPlayer.appendChild(mediaTypeModal)
        })

       

    }

    } 
   

    closeBtn.addEventListener('click', () => {
        modalPlayer.style.display='none'
        videoModal.style.display = 'block'
        imageModal.style.display = 'block'
    })
   
//console.log(Medias.querySelector('.media_card'));

mainWrapper.appendChild(modalPlayer)


return Medias

}