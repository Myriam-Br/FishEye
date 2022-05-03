function mediaCardPlayer (Medias) {
  const mainWrapper = document.getElementById('main')
  const modalPlayer = document.createElement('div')
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

  const imageModal = document.createElement('img')
  imageModal.classList.add('IMAGE')
  imageModal.classList.add('media_modal')

  const videoModal = document.createElement('video')
  videoModal.setAttribute('controls', '')
  videoModal.classList.add('VIDEO')
  videoModal.classList.add('media_modal')

  const videoSource = document.createElement('source')
  videoSource.setAttribute('type', 'video/mp4')

  videoModal.appendChild(videoSource)

  const n = Medias.getElementsByClassName('media_card').length

  modalPlayer.appendChild(btnPrevious)
  modalPlayer.appendChild(btnNext)
  modalPlayer.appendChild(closeBtn)
  modalPlayer.appendChild(imageModal)
  modalPlayer.appendChild(videoModal)

  // accessibility
  modalPlayer.setAttribute('aria-label', 'image closeup view')
  btnPrevious.setAttribute('aria-label', 'Previous image')
  btnNext.setAttribute('aria-label', 'Next image')
  closeBtn.setAttribute('aria-label', 'Close dialog')

  // get next media on click btnNext
  btnNext.addEventListener('click', () => {
    // console.log('next');

    let idMedia = modalPlayer.getAttribute('idMedia')

    idMedia = parseInt(idMedia) + 1
    if (idMedia === n) {
      idMedia = 0
    }

    modalPlayer.setAttribute('idMedia', idMedia)

    const imgNext = Medias.getElementsByClassName('media_card')[idMedia].querySelector('img')
    const videoNext = Medias.getElementsByClassName('media_card')[idMedia].querySelector('source')
    let srcNext = ''

    videoModal.style.display = 'block'
    imageModal.style.display = 'block'

    if (imgNext) {
      videoModal.style.display = 'none'
      srcNext = Medias.getElementsByClassName('media_card')[idMedia].querySelector('img').src.split('http://127.0.0.1:5501')[1]
      imageModal.setAttribute('src', srcNext)
    } else if (videoNext) {
      imageModal.style.display = 'none'
      srcNext = Medias.getElementsByClassName('media_card')[idMedia].querySelector('source').src.split('http://127.0.0.1:5501')[1]
      videoModal.setAttribute('src', srcNext)
    }
  })

  // get previous media on click btnPrevious
  btnPrevious.addEventListener('click', () => {
    let idMedia = modalPlayer.getAttribute('idMedia')

    idMedia = parseInt(idMedia) - 1
    if (idMedia === -1) {
      idMedia = n - 1
    }

    modalPlayer.setAttribute('idMedia', idMedia)

    const imgNext = Medias.getElementsByClassName('media_card')[idMedia].querySelector('img')
    const videoNext = Medias.getElementsByClassName('media_card')[idMedia].querySelector('source')
    let srcPrevious = ''

    videoModal.style.display = 'block'
    imageModal.style.display = 'block'

    if (imgNext) {
      videoModal.style.display = 'none'
      srcPrevious = Medias.getElementsByClassName('media_card')[idMedia].querySelector('img').src.split('http://127.0.0.1:5501')[1]
      imageModal.setAttribute('src', srcPrevious)
    } else if (videoNext) {
      imageModal.style.display = 'none'
      srcPrevious = Medias.getElementsByClassName('media_card')[idMedia].querySelector('source').src.split('http://127.0.0.1:5501')[1]
      videoModal.setAttribute('src', srcPrevious)
    }
  })

  console.log(modalPlayer)
  modalPlayer.addEventListener('keydown', e => {
    console.log('works')
  })

  for (let i = 0; i < Medias.getElementsByClassName('media_card').length; i++) {
    Medias.getElementsByClassName('media_card')[i].setAttribute('idMedia', i)

    const img = Medias.getElementsByClassName('media_card')[i].querySelector('img')
    const video = Medias.getElementsByClassName('media_card')[i].querySelector('video')
    let mediaType = ''
    let mediaTypeModal = ''

    // set value of mediaTypeModal to const img if it's an image and const video if it's a video
    if (video == null && img !== null) {
      mediaType = img
      mediaTypeModal = imageModal
      mediaTypeModal.setAttribute('alt', Medias.getElementsByClassName('media_card')[i].querySelector('.media_title').innerHTML)
    } else if (img == null && video !== null) {
      mediaType = video
      mediaTypeModal = videoModal
      mediaTypeModal.setAttribute('aria-label', Medias.getElementsByClassName('media_card')[i].querySelector('.media_title').innerHTML)
    }

    // change display modal tot block and display none media img if video and none media video if img
    if (mediaType) {
      mediaType.addEventListener('click', () => {
        modalPlayer.style.display = 'block'
        modalPlayer.setAttribute('idMedia', i)

        let srcOnClick = ''
        if (mediaType === video) {
          imageModal.style.display = 'none'
          srcOnClick = Medias.getElementsByClassName('media_card')[i].querySelector('source').src.split('http://127.0.0.1:5501')[1]
        } else {
          videoModal.style.display = 'none'
          srcOnClick = Medias.getElementsByClassName('media_card')[i].querySelector('img').src.split('http://127.0.0.1:5501')[1]
        }

        mediaTypeModal.setAttribute('src', srcOnClick)

        mediaTypeModal.setAttribute('id', 'modal_image_player')
        mediaTypeModal.setAttribute('idMedia', i)
        modalPlayer.appendChild(mediaTypeModal)
      })

      // accessibility media player open/close player ; next/previous media
      mediaType.addEventListener('keydown', e => {
        if (e.keyCode === 13) {
          mediaType.click()
        } else if (e.keyCode === 27) {
          closeBtn.click()
        } else if (e.keyCode === 39) {
          btnNext.click()
        } else if (e.keyCode === 37) {
          btnPrevious.click()
        } else {
          // message error
        }
      })
    }
  }

  // close modalPlayer
  closeBtn.addEventListener('click', () => {
    modalPlayer.style.display = 'none'
    videoModal.style.display = 'block'
    imageModal.style.display = 'block'
  })

  mainWrapper.appendChild(modalPlayer)

  return Medias
}
