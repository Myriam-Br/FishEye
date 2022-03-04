class PhotographerCard{
    constructor(photographer){

        this._photographer = photographer
        this.$wrapper = document.createElement('article')
        this.$wrapper.classList.add('photographer-card-wrapper')
    }

    
    getUserCardDOM() {
        
        //portrait pic
        const img = document.createElement( 'img' );
        //img.classList.add('pfp')
        img.setAttribute("src", this._photographer.portrait)
    

        //photographer name
        const h2 = document.createElement( 'h2' );
        h2.classList.add('name')
        h2.innerHTML = this._photographer.name;
      

        //photographer tagline
        const tagline = document.createElement('p')
        tagline.classList.add('tagline')
        tagline.innerHTML = this._photographer.tagline
      

        //photographer location
        const location = document.createElement('h3')
        location.classList.add('location')
        location.innerHTML = this._photographer.city + ',' + this._photographer.country

        //photographer price
        const price = document.createElement('p')
        price.classList.add('price')
        price.innerHTML = this._photographer.price + "/jour"



        this.$wrapper.appendChild(img);
        this.$wrapper.appendChild(h2); 
        this.$wrapper.appendChild(location)
        this.$wrapper.appendChild(tagline)
        this.$wrapper.appendChild(price)
       
        
        return this.$wrapper;
    }


}

