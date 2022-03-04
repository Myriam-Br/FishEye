class Api {
    constructor(url) {
        this._url = url
    }

    //method
    async get() {
        return fetch(this._url)
                .then(res => res.json())
                .then(res => res.photographers)
                .catch(err => console.log("error", err))
    }

    //method
    async getId(i) {
        return fetch(this._url)
                .then(res => res.json())
                .then(res => res.photographers[i])
                .catch(err => console.log("error", err))
    }

  

   
}

class PhotographerApi extends Api{

    constructor(url) {
        super(url) 
       
    }
   
    async getPhotographers(){
        return await this.get()
    }

    async getPhotographerById(){
        return await this.getId(i)
    }

}


