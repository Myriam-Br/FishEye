class RatingMedia {
    static async sorter (data, orderBy) {
        console.log('data', data)
        console.log('orderBy', orderBy)

        // order by popularity
        if (orderBy === 'popular') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => b.likes - a.likes)
                    }

                    // console.log('RESULT',result);

                    resolve(result)
                }, 1000)
            })
        }

        // order by title
        else if (orderBy === 'title') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => a.title.localeCompare(b.title))
                    }

                    // console.log('RESULT',result);

                    resolve(result)
                }, 1000)
            })
        }

        // default order
        else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data)
                    }

                    resolve(result)
                }, 1000)
            })
        }
    }
}
