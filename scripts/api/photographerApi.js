class API {
    constructor (url) {
        this._url = window.location.href + url
        console.log(this._url)
        console.log(window.location.href)
    }

    async get () {
        return fetch(this._url)
                    .then(res => res.json())
                    .then(res => res.photographers)
                    .catch(err => console.log('error', err))
    }

    async getById (i) {
        return fetch(this._url)
                    .then(res => res.json())
                    .then(res => {
                        // res.photographers
                        // console.log(res.photographers)
                        for (let j = 0; j < res.photographers.length; j++) {
                            if (res.photographers[j].id === i) {
                                return res.photographers[j]
                            } else {
                                // message error
                            }
                        }
                    })
                    .catch(err => console.log('error', err))
    }

    async getMediaById () {
        return fetch(this._url)
                    .then(res => res.json())
                    .then(res => {
                        // res.media
                        // console.log(res.media);
                        const mediaOfPhotographer = []
                        const idPhotographer = JSON.parse(localStorage.getItem('id'))
                        // console.log(idPhotographer);
                        res.media.forEach(media => {
                            if (media.photographerId == idPhotographer) {
                                mediaOfPhotographer.push(media)
                            } else {
                                // console.log('ERROR');
                            }
                        })
                        // console.log('MEDIA TAB',mediaOfPhotographer);
                        return mediaOfPhotographer
                    })
                    .catch(err => console.log('error', err))
    }
}

class PhotographerApi extends API {
    constructor (url) {
        super(url)
    }

    async getPhotographers () {
        return await this.get()
    }

    async getPhotographerById () {
        return await this.getById(i)
    }
}

class MediaApi extends API {
    constructor (url) {
        super(url)
    }

    async getMediaByIdPjotographer () {
        return await this.getMediaById()
    }
}
