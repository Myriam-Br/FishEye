class ProxyRatingMedia {
    constructor () {
        this.cache = []
    }

    async sorter (media, orderBy) {
        const cachedData = this.cache.find(media => media.key === orderBy)

        if (cachedData) {
            console.log('get from cache')

            return cachedData
        }

        const data = await RatingMedia.sorter(media, orderBy)

        this.cache.push(data)
        return data
    }
}
