class LikesCounter {
    constructor() {
        this._count = 0
        this.$likesCount = document.querySelector('.like_count')
        console.log('LIKES',this.$likesCount);
    }

    update(action) {
        if (action === 'INC') {
            this._count += 1
        } else if (action === 'DEC') {
            this._count -= 1
        } else {
            throw "Unknow action"
        }

        this.$likesCount.innerHTML = this._count
    }
}

