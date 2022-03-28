function mediaCardPlayer(Medias) {
    //console.log('params',Medias.$mediaCard.querySelector('.media_card'));
console.log('media cards',Medias);

const mainWrapper = document.getElementById('main')
let modalPlayer = document.createElement('div')
modalPlayer.setAttribute('id', 'modal_player')
console.log(document.getElementById('media_card_section'));

const btnNext = document.createElement('button')
btnNext.setAttribute('id', 'btn_next_media')

const btnPrevious = document.createElement('button')
btnPrevious.setAttribute('id', 'btn_previous_media')

const closeBtn = document.createElement('button')
closeBtn.setAttribute('id', 'btn_close_modal')

let imageModal = document.createElement('img')

let videoModal = document.createElement('video')
let videoSource = document.createElement('source')
videoModal.appendChild(videoSource)


const n = Medias.getElementsByClassName('media_card').length

console.log(imageModal);
modalPlayer.appendChild(btnNext)
modalPlayer.appendChild(btnPrevious)
modalPlayer.appendChild(closeBtn)
modalPlayer.appendChild(imageModal)
modalPlayer.appendChild(videoModal)

btnNext.addEventListener('click', () => {
    console.log('next');
    let id_media = imageModal.getAttribute('id_media')
    id_media = parseInt(id_media) + 1
    if(id_media == n ) {
        id_media = 0

    }
    imageModal.setAttribute('id_media',id_media)
    console.log(id_media);

    let srcNextImage = Medias.getElementsByClassName('media_card')[id_media].querySelector('img').src.split('http://127.0.0.1:5501')[1]
    console.log(srcNextImage);
    imageModal.setAttribute('src', srcNextImage) 


})


btnPrevious.addEventListener('click', () => {
    console.log('previous');
    let id_media = imageModal.getAttribute('id_media')
    id_media = parseInt(id_media) - 1

    if(id_media == -1 ) {
        id_media = n -1 
    }
    imageModal.setAttribute('id_media',id_media)


    let srcPreviousImage = Medias.getElementsByClassName('media_card')[id_media].querySelector('img').src.split('http://127.0.0.1:5501')[1]
    console.log(srcPreviousImage);
    imageModal.setAttribute('src', srcPreviousImage)
})

for(let i = 0; i < Medias.getElementsByClassName('media_card').length; i++) {
   const n = Medias.getElementsByClassName('media_card').length
    console.log(n);
 
//console.log( Medias.getElementsByClassName('media_card')[i].querySelector('img'));
 console.log(Medias.getElementsByClassName('media_card')[i].querySelector('img'));  
if(!imageModal.src || !videoSource.src) {

    console.log(i);
    let img =   Medias.getElementsByClassName('media_card')[i].querySelector('img')
    //let video =   Medias.getElementsByClassName('media_card')[i].querySelector('source')
    console.log(img);
    if(img !== null) {
        img.addEventListener('click', () => {
            modalPlayer.style.display='block'
    
                let srcOnClickImage = Medias.getElementsByClassName('media_card')[i].querySelector('img').src.split('http://127.0.0.1:5501')[1]             
                imageModal.setAttribute('src', srcOnClickImage)
                imageModal.setAttribute('id', 'modal_image_player')         
                imageModal.setAttribute('id_media', i)     
    
             
                modalPlayer.appendChild(imageModal)
            })
    
    }


    }else {

    }   
   
}

   

    closeBtn.addEventListener('click', () => {
        modalPlayer.style.display='none'
    })
   
//console.log(Medias.querySelector('.media_card'));

mainWrapper.appendChild(modalPlayer)


return Medias

}