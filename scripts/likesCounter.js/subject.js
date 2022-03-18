class LikesSubject {
    constructor() {
        this._observers = []
    }

    like(observer) {
        this._observers.push(observer)
        console.log(this._observers);
    }

    dislike(observer) {
        this._observers = this._observers.filter(obs => obs !== observer)
    }

    fire(action) {
        this._observers.forEach(observer => observer.update(action))
    }
}